import type { Translation } from '../schemas'

/**
 * The World English Bible is in the public domain — the only kind of
 * translation this demo will commit to a public repository. Licensed
 * translations arrive later through the ScriptureProvider seam.
 */
export const webTranslation: Translation = {
  id: 'web',
  name: 'World English Bible',
  abbreviation: 'WEB',
  license:
    'Public domain. The World English Bible is dedicated to the public domain by its editors; "World English Bible" is a trademark of eBible.org, used here for unmodified text.',
  attribution: 'Scripture quotations are from the World English Bible (WEB), public domain.',
  sourceUrl: 'https://ebible.org/web/',
}
