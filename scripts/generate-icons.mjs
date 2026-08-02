/**
 * Generates the app's PNG icons from code — no binary blobs in the repo that
 * nobody can regenerate, and no image dependency to install in CI.
 *
 * The motif is an illuminated-manuscript compass star: a four-point star for
 * the cardinal directions crossed with a shorter diagonal star, ringed and
 * centred on a candle-lit cream disc. Rendered with 4x supersampling.
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

const INK_CORE = [0x26, 0x1d, 0x14]
const INK_EDGE = [0x0d, 0x0a, 0x07]
const GOLD_TOP = [0xf0, 0xd4, 0x93]
const GOLD_BOTTOM = [0x9a, 0x71, 0x27]
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
 * Four-pointed star as a concave superellipse: |x|^k + |y|^k <= r^k. An
 * exponent below 1 pulls the edges inward, so the four tips come to a real
 * point instead of the rounded lobes a cosine-radius star produces.
 */
function inStar(x, y, radius, sharpness) {
  return (
    Math.pow(Math.abs(x), sharpness) + Math.pow(Math.abs(y), sharpness) <=
    Math.pow(radius, sharpness)
  )
}

const SQRT1_2 = Math.SQRT1_2

/**
 * Colour of the icon at normalized coordinates, where the square spans
 * [-1, 1] on both axes. `scale` is the outer radius the motif may occupy.
 */
function shade(nx, ny, scale) {
  const r = Math.hypot(nx, ny)

  // Parchment-dark ground with a warm centre, as if lit by a single candle.
  let color = mix(INK_CORE, INK_EDGE, smoothstep(r / 1.25))

  const gold = mix(GOLD_TOP, GOLD_BOTTOM, smoothstep((ny / scale + 1) / 2))

  // Faint constellation of fixed points, drawn beneath the star.
  for (const [sx, sy, sr] of [
    [-0.72, -0.66, 0.022],
    [0.68, -0.75, 0.017],
    [0.79, 0.6, 0.02],
    [-0.63, 0.74, 0.015],
  ]) {
    if (Math.hypot(nx - sx * scale * 1.16, ny - sy * scale * 1.16) < sr) {
      color = mix(color, gold, 0.5)
    }
  }

  // Two keeper rings, as on an astrolabe.
  const ringWidth = Math.max(scale * 0.012, 0.008)
  if (Math.abs(r - scale) < ringWidth) color = mix(color, gold, 0.6)
  if (Math.abs(r - scale * 0.93) < ringWidth * 0.7) color = mix(color, gold, 0.28)

  // Cardinal star, crossed by a shorter diagonal one: a compass rose.
  const dx = (nx + ny) * SQRT1_2
  const dy = (nx - ny) * SQRT1_2
  const onCardinal = inStar(nx, ny, scale * 0.86, 0.62)
  const onDiagonal = inStar(dx, dy, scale * 0.48, 0.72)
  if (onCardinal || onDiagonal) {
    color = gold
    // The diagonal points sit slightly behind the cardinal ones.
    if (onDiagonal && !onCardinal) color = mix(color, INK_EDGE, 0.22)
  }

  // Inner ring and the candle-lit centre.
  if (Math.abs(r - scale * 0.26) < scale * 0.016) color = mix(color, INK_EDGE, 0.6)
  if (r < scale * 0.13) color = CREAM
  else if (r < scale * 0.155) color = mix(CREAM, GOLD_BOTTOM, 0.55)

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
