/**
 * Generates the app's PNG icons from code — no binary blobs in the repo that
 * nobody can regenerate, and no image dependency to install in CI.
 *
 * The motif is first light over still water: a gold sun rising above a calm
 * horizon, its reflection reaching down like a path, ringed in gold on a
 * midnight-blue field. Rendered with 4x supersampling.
 *
 *   node scripts/generate-icons.mjs
 */
import { deflateSync } from 'node:zlib'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const PUBLIC = join(ROOT, 'public')

/* ------------------------------------------------------------------ PNG ---- */

const CRC_TABLE = (() => {
  const table = new Int32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[n] = c
  }
  return table
})()

function crc32(buf) {
  let c = -1
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ -1) >>> 0
}

function chunk(type, data) {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length, 0)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body), 0)
  return Buffer.concat([length, body, crc])
}

/** Encodes 8-bit RGBA pixel data as a PNG buffer. */
function encodePng(width, height, rgba) {
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // colour type: truecolour + alpha
  ihdr[10] = 0 // deflate
  ihdr[11] = 0 // adaptive filtering
  ihdr[12] = 0 // no interlace

  const stride = width * 4
  const raw = Buffer.alloc((stride + 1) * height)
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0 // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

/* -------------------------------------------------------------- drawing ---- */

const NIGHT_TOP = [0x18, 0x1f, 0x33]
const NIGHT_BOTTOM = [0x0a, 0x0d, 0x16]
const WATER_TOP = [0x11, 0x17, 0x26]
const GOLD = [0xd2, 0xa5, 0x59]
const GOLD_BRIGHT = [0xf0, 0xd4, 0x93]
const CREAM = [0xf7, 0xed, 0xd8]

const mix = (a, b, t) => [
  Math.round(a[0] + (b[0] - a[0]) * t),
  Math.round(a[1] + (b[1] - a[1]) * t),
  Math.round(a[2] + (b[2] - a[2]) * t),
]
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)
const smoothstep = (t) => {
  const x = clamp01(t)
  return x * x * (3 - 2 * x)
}

/**
 * Colour of the icon at normalized coordinates, where the square spans
 * [-1, 1] on both axes. `scale` is the outer radius the motif may occupy.
 */
function shade(nx, ny, scale) {
  // Night sky above, deeper water below.
  const horizon = scale * 0.16
  let color =
    ny < horizon
      ? mix(NIGHT_TOP, NIGHT_BOTTOM, smoothstep((ny / scale + 1) / 2.6))
      : mix(WATER_TOP, NIGHT_BOTTOM, smoothstep((ny - horizon) / (scale * 1.1)))

  const sunY = -scale * 0.18
  const sunR = scale * 0.3
  const d = Math.hypot(nx, ny - sunY)

  // A soft halo breathing into the sky.
  const halo = 1 - smoothstep((d - sunR) / (scale * 0.55))
  if (ny < horizon) color = mix(color, GOLD, 0.28 * halo * halo)

  // The rising sun, brighter at its crown.
  if (ny < horizon && d < sunR) {
    color = mix(GOLD_BRIGHT, GOLD, smoothstep((ny - (sunY - sunR)) / (2 * sunR)))
    if (d < sunR * 0.45) color = mix(color, CREAM, 0.5)
  }

  // The horizon, lit where the sun touches it.
  if (Math.abs(ny - horizon) < scale * 0.014) {
    const lit = 1 - smoothstep(Math.abs(nx) / (scale * 0.85))
    color = mix(color, GOLD_BRIGHT, 0.25 + 0.6 * lit)
  }

  // The reflection: a shimmering path of light on still water.
  if (ny > horizon) {
    const depth = (ny - horizon) / scale
    const spread = sunR * (0.45 + depth * 0.5)
    if (Math.abs(nx) < spread) {
      const fall = 1 - smoothstep(depth / 1.05)
      const band = 0.5 + 0.5 * Math.sin(depth * 46)
      const across = 1 - Math.abs(nx) / spread
      color = mix(color, GOLD, 0.5 * fall * (0.5 + 0.5 * band) * across)
    }
  }

  // A single keeper ring.
  const r = Math.hypot(nx, ny)
  const ringWidth = Math.max(scale * 0.012, 0.008)
  if (Math.abs(r - scale) < ringWidth) color = mix(color, GOLD, 0.55)

  return color
}

function render(size, scale) {
  const SS = 4
  const rgba = Buffer.alloc(size * size * 4)
  const half = size / 2

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let r = 0
      let g = 0
      let b = 0
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const nx = (x + (sx + 0.5) / SS - half) / half
          const ny = (y + (sy + 0.5) / SS - half) / half
          const c = shade(nx, ny, scale)
          r += c[0]
          g += c[1]
          b += c[2]
        }
      }
      const n = SS * SS
      const i = (y * size + x) * 4
      rgba[i] = Math.round(r / n)
      rgba[i + 1] = Math.round(g / n)
      rgba[i + 2] = Math.round(b / n)
      rgba[i + 3] = 255
    }
  }
  return encodePng(size, size, rgba)
}

/* ---------------------------------------------------------------- write ---- */

const targets = [
  // `scale` is the fraction of the half-width the motif fills. Maskable icons
  // stay inside the 80%-diameter safe zone platforms may crop to.
  { file: 'icons/icon-192.png', size: 192, scale: 0.82 },
  { file: 'icons/icon-512.png', size: 512, scale: 0.82 },
  { file: 'icons/maskable-512.png', size: 512, scale: 0.58 },
  { file: 'apple-touch-icon.png', size: 180, scale: 0.76 },
]

mkdirSync(join(PUBLIC, 'icons'), { recursive: true })
for (const { file, size, scale } of targets) {
  const out = join(PUBLIC, file)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, render(size, scale))
  console.log(`icon  ${file}  ${size}x${size}`)
}
console.log('Icons generated.')
