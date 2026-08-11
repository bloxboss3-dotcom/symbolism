import type { VerifiedQuote } from '../../schemas'

export const quotes: VerifiedQuote[] = [
  {
    id: 'augustine-restless-heart',
    speaker: 'Augustine of Hippo',
    text: 'Thou madest us for Thyself, and our heart is restless, until it repose in Thee.',
    work: 'Confessions',
    edition: 'Project Gutenberg eBook #3296',
    translator: 'E. B. Pusey',
    locator: 'Book I, ch. 1',
    url: 'https://www.gutenberg.org/cache/epub/3296/pg3296.txt',
    year: 'c. 397-400',
    license: 'public-domain',
    verification: {
      status: 'verified',
      verifiedOn: '2026-08-11',
      verifiedAgainst:
        'The Confessions of St. Augustine, tr. E. B. Pusey, Project Gutenberg eBook #3296',
      notes:
        'Often quoted as "Thou hast made us for Thyself"; the Pusey text at Gutenberg reads "Thou madest us for Thyself", so the archive wording is kept. Confirmed byte-for-byte against the plain-text file and via WebFetch of the same URL.',
    },
    publishable: true,
  },
  {
    id: 'julian-all-shall-be-well',
    speaker: 'Julian of Norwich',
    text: 'It behoved that there should be sin; but all shall be well, and all shall be well, and all manner of thing shall be well.',
    work: 'Revelations of Divine Love',
    edition: 'Grace Warrack edition, Methuen, 1901 (Project Gutenberg eBook #52958)',
    locator: 'ch. 27',
    url: 'https://www.gutenberg.org/cache/epub/52958/pg52958.txt',
    year: 'c. 1393',
    license: 'public-domain',
    verification: {
      status: 'verified',
      verifiedOn: '2026-08-11',
      verifiedAgainst:
        'Revelations of Divine Love, ed. Grace Warrack (1901), Project Gutenberg eBook #52958',
      notes:
        'Julian reports these as the words of Jesus in her vision. Confirmed byte-for-byte against the Gutenberg plain text; an editorial footnote marker after "sin;" is omitted. Warrack footnotes the Middle English: "Synne is behovabil, but al shal be wel & al shal be wel & al manner of thyng shal be wele."',
    },
    publishable: true,
  },
  {
    id: 'brother-lawrence-continual-conversation',
    speaker: 'Brother Lawrence',
    text: 'There is not in the world a kind of life more sweet and delightful, than that of a continual conversation with GOD: those only can comprehend it who practise and experience it.',
    work: 'The Practice of the Presence of God',
    edition: 'CCEL public-domain edition ("The Best Rule of Holy Life")',
    locator: 'Fifth Letter',
    url: 'https://ccel.org/ccel/lawrence/practice/practice.iv.v.html',
    year: 'c. 1692',
    license: 'public-domain',
    verification: {
      status: 'verified',
      verifiedOn: '2026-08-11',
      verifiedAgainst:
        'Christian Classics Ethereal Library public-domain edition, The Practice of the Presence of God, Fifth Letter',
      notes:
        'Verified verbatim (WebFetch and raw page fetch) against the CCEL edition, whose appendix states it is public domain; "GOD" in capitals is that edition\'s rendering. In the source the sentence continues with a semicolon ("...experience it; yet I do not advise you..."); the excerpt closes with a period. Project Gutenberg eBook #5657 was not used: it is a modernized edition marked "Copyright (C) 2002 by Lightheart" and is not public domain.',
    },
    publishable: true,
  },
  {
    id: 'wesley-heart-strangely-warmed',
    speaker: 'John Wesley',
    text: 'I felt my heart strangely warmed. I felt I did trust in Christ, Christ alone, for salvation; and an assurance was given me that He had taken away my sins, even mine, and saved me from the law of sin and death.',
    work: 'The Journal of John Wesley',
    edition: 'Christian Classics Ethereal Library edition',
    locator: '24 May 1738',
    url: 'https://ccel.org/ccel/wesley/journal/journal.vi.ii.xvi.html',
    year: '1738',
    license: 'public-domain',
    verification: {
      status: 'verified',
      verifiedOn: '2026-08-11',
      verifiedAgainst:
        'Journal of John Wesley, Christian Classics Ethereal Library, section "I Felt My Heart Strangely Warmed"',
      notes:
        'Aldersgate entry for Wednesday, 24 May 1738. Confirmed verbatim via WebFetch and a raw fetch of the CCEL page. The excerpt opens mid-sentence; the full sentence begins "About a quarter before nine, while he was describing the change which God works in the heart through faith in Christ, ...".',
    },
    publishable: true,
  },
  {
    id: 'athanasius-made-man',
    speaker: 'Athanasius of Alexandria',
    text: 'For He was made man that we might be made God; and He manifested Himself by a body that we might receive the idea of the unseen Father; and He endured the insolence of men that we might inherit immortality.',
    work: 'On the Incarnation of the Word',
    edition: 'Nicene and Post-Nicene Fathers, Second Series, vol. 4 (1892), via New Advent',
    translator: 'Archibald Robertson',
    locator: '§54.3',
    url: 'https://www.newadvent.org/fathers/2802.htm',
    year: 'c. 318',
    license: 'public-domain',
    verification: {
      status: 'verified',
      verifiedOn: '2026-08-11',
      verifiedAgainst:
        'New Advent transcription of NPNF Second Series ("Translated by Archibald Robertson", "Nicene and Post-Nicene Fathers, Second Series" credited on the page), §54',
      notes:
        'Confirmed under the "54." heading, point 3, by a raw fetch of the New Advent page (WebFetch truncated before §54, so the raw fetch of the same URL is the confirmation). A stray space before the first semicolon in the New Advent transcription was collapsed; wording is otherwise byte-for-byte.',
    },
    publishable: true,
  },
]
