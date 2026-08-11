/**
 * The seam between the app and any source of Bible text.
 *
 * The MVP ships one implementation backed by bundled World English Bible
 * data (public domain). A licensed API provider can be added by implementing
 * this interface and registering it in `getScriptureProvider` — no UI code
 * changes. The interface is async for exactly that reason.
 */
import type { ScripturePassage, Translation } from '../../schemas'
import { passageById, passages, webTranslation } from '../../data/registry'

export interface ScriptureProvider {
  readonly translation: Translation
  getPassage(id: string): Promise<ScripturePassage | null>
  listPassages(): Promise<ScripturePassage[]>
}

class LocalWebProvider implements ScriptureProvider {
  readonly translation = webTranslation

  getPassage(id: string): Promise<ScripturePassage | null> {
    return Promise.resolve(passageById.get(id) ?? null)
  }

  listPassages(): Promise<ScripturePassage[]> {
    return Promise.resolve(passages)
  }
}

const providers: Record<'web', ScriptureProvider> = {
  web: new LocalWebProvider(),
}

export function getScriptureProvider(id: 'web'): ScriptureProvider {
  return providers[id]
}
