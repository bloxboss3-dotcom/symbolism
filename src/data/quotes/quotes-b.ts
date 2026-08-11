/**
 * Quotations, batch B: a Spanish mystic in Longfellow's English, the
 * Reformation, the Victorian pulpit, and devotional poetry.
 *
 * Every publishable entry below was verified verbatim against the archive
 * named in `verification.verifiedAgainst`, fetched live at the `url` given.
 * Where an archive's wording differs from the commonly quoted form, the
 * archive wins. The final entry is a schema demonstration for in-copyright
 * sources and is not publishable.
 */
import type { VerifiedQuote } from '../../schemas'

export const quotes: VerifiedQuote[] = [
  {
    id: 'teresa-let-nothing-disturb-thee',
    speaker: 'Teresa of Ávila',
    text: 'Let nothing disturb thee, / Nothing affright thee; / All things are passing; / God never changeth; / Patient endurance / Attaineth to all things; / Who God possesseth / In nothing is wanting; / Alone God sufficeth.',
    work: "Santa Teresa's Book-Mark",
    edition:
      'The Complete Poetical Works of Henry Wadsworth Longfellow (Project Gutenberg eBook #1365)',
    translator: 'Henry Wadsworth Longfellow',
    locator: 'Translations, From the Spanish',
    url: 'https://www.gutenberg.org/files/1365/1365-0.txt',
    license: 'public-domain',
    verification: {
      status: 'verified',
      verifiedOn: '2026-08-11',
      verifiedAgainst:
        'The Complete Poetical Works of Henry Wadsworth Longfellow, Project Gutenberg eBook #1365',
      notes:
        "Longfellow's rendering of the lines Teresa kept in her breviary (Letrilla que llevaba por registro en su breviario). Line breaks in the nine-line original are rendered as ' / '. Confirmed byte-for-byte against the Gutenberg plain-text file, and against the HTML edition of the same ebook.",
    },
    publishable: true,
  },
  {
    id: 'calvin-knowledge-of-god-and-ourselves',
    speaker: 'John Calvin',
    text: 'Our wisdom, in so far as it ought to be deemed true and solid Wisdom, consists almost entirely of two parts: the knowledge of God and of ourselves.',
    work: 'Institutes of the Christian Religion',
    edition: 'Christian Classics Ethereal Library edition',
    translator: 'Henry Beveridge',
    locator: 'Book I, ch. 1, sec. 1',
    url: 'https://ccel.org/ccel/calvin/institutes/institutes.iii.ii.html',
    year: '1845',
    license: 'public-domain',
    verification: {
      status: 'verified',
      verifiedOn: '2026-08-11',
      verifiedAgainst:
        'Institutes of the Christian Religion, tr. Henry Beveridge, Christian Classics Ethereal Library',
      notes:
        'The CCEL text reads "true and solid Wisdom" with a capital W; that rendering is kept over the commonly quoted lowercase form. Confirmed verbatim via WebFetch and a raw fetch of the CCEL page.',
    },
    publishable: true,
  },
  {
    id: 'spurgeon-very-present-help',
    speaker: 'Charles H. Spurgeon',
    text: 'What we need is help,—help powerful, efficient, constant: we need a very present help in trouble. What a mercy that we have it in our God.',
    work: 'The Treasury of David',
    edition: 'The Spurgeon Archive online edition',
    locator: 'Psalm 121:2, exposition',
    url: 'https://archive.spurgeon.org/treasury/ps121.php',
    year: '1869-85',
    license: 'public-domain',
    verification: {
      status: 'verified',
      verifiedOn: '2026-08-11',
      verifiedAgainst:
        'The Treasury of David, exposition of Psalm 121:2, The Spurgeon Archive (archive.spurgeon.org)',
      notes:
        'From Spurgeon\'s own exposition of verse 2, not the appended notes by other authors. The comma followed by an em dash after the first "help" reproduces the archive text, which encodes the dash as &#151;. Confirmed verbatim via WebFetch and a raw fetch of the page.',
    },
    publishable: true,
  },
  {
    id: 'rossetti-none-other-lamb',
    speaker: 'Christina Rossetti',
    text: 'None other Lamb, none other Name, / None other Hope in heaven or earth or sea, / None other Hiding-place from guilt and shame, / None beside Thee.',
    work: 'Verses',
    edition: 'New York: E. & J. B. Young & Co., 1894 (Project Gutenberg eBook #77809)',
    locator: 'Section "Christ our All in All"',
    url: 'https://www.gutenberg.org/cache/epub/77809/pg77809.txt',
    year: '1894',
    license: 'public-domain',
    verification: {
      status: 'verified',
      verifiedOn: '2026-08-11',
      verifiedAgainst:
        'Verses (New York: E. & J. B. Young & Co., 1894), Project Gutenberg eBook #77809',
      notes:
        'Opening quatrain of the poem beginning "None other Lamb, none other Name". Capitalization ("Hope", "Hiding-place", lowercase "heaven") and the closing period follow the Gutenberg text; line breaks are rendered as " / ". Confirmed byte-for-byte against the plain-text file.',
    },
    publishable: true,
  },
  {
    id: 'lewis-mere-christianity-placeholder',
    speaker: 'C. S. Lewis',
    text: '[Quotation pending verification against a licensed edition]',
    work: 'Mere Christianity',
    year: '1952',
    license: 'fair-use-short',
    verification: {
      status: 'placeholder',
      notes:
        'Mere Christianity remains in copyright and cannot be checked against a free archive, so no quoted words are included. This entry demonstrates the schema shape for in-copyright sources: the text field is a bracketed placeholder, and the entry must remain unpublishable until the wording is verified against a licensed edition.',
    },
    publishable: false,
  },
]
