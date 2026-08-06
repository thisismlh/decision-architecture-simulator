import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'audit',
  level: 5,
  fit: 'wasteful',
  whatTheUserDid: 'Handed the manuscript folder to an agent and asked for every continuity error.',
  whatTheSystemDid: 'Ran one agent in a loop with file access and a scratch notes file it maintained itself.',
  whatTheModelDid: 'Read all forty chapters in order, logging every fixed fact to its notes and checking each new chapter against them.',
  whatCameBack: 'A thorough ten-finding report, eleven minutes later, with the working notes attached.',
  artifact: {
    kind: 'report',
    label: 'continuity report (sequential read)',
    body: [
      { id: 'a5-h1', kind: 'heading', text: 'Continuity report — Under the Seam' },
      {
        id: 'a5-intro',
        kind: 'para',
        text: 'I read the manuscript front to back, keeping a running record of every fixed fact — names, ages, dates, injuries, places — and checking each chapter against the record. Ten continuity errors follow, ordered by how visibly they would break for a reader.',
      },
      {
        id: 'a5-f1',
        kind: 'entry',
        term: 'Eleazar Watkins dies, then reappears — ch 9 vs ch 24',
        text: 'The minister dies of pleurisy in chapter 9, but in chapter 24 "Eleazar Watkins spoke over the coffin" at the funeral of the two men killed in the fall. A dead man delivers a eulogy.',
      },
      {
        id: 'a5-f2',
        kind: 'entry',
        term: "Tegwen's age — ch 1 vs ch 20",
        text: 'Tegwen is "sixteen that spring" in chapter 1 but "barely fourteen and already in service" in chapter 20. The two-year gap changes how her leaving service reads.',
      },
      {
        id: 'a5-f3',
        kind: 'entry',
        term: "Baby Gwen's timeline — ch 28 vs ch 36",
        text: 'Chapter 28 has "Gwen was born in March, with the thaw"; chapter 36 places the christening "that January, weeks after her birth". A March birth cannot be followed weeks later by a January christening in the same year.',
      },
      {
        id: 'a5-f4',
        kind: 'entry',
        term: 'Length of the strike — ch 15 vs ch 19',
        text: 'Chapter 15 fixes the strike at "six weeks, the lodge said, and not a day more"; chapter 19 refers to "the ninth week of the strike". The strike\'s length is a plot point and should be settled one way.',
      },
      {
        id: 'a5-f5',
        kind: 'entry',
        term: "Angharad's eyes — ch 2 vs ch 31",
        text: 'In chapter 2 Angharad has "her grey eyes steady on the fire"; in chapter 31 "her brown eyes went to the door". Grey is established first and used at a character-defining moment; chapter 31 should change.',
      },
      {
        id: 'a5-f6',
        kind: 'entry',
        term: "Dai's pony — ch 4 vs ch 26",
        text: 'The pit pony is named in chapter 4 — "Seren stood patient in the traces" — but in chapter 26 "he pressed his face to Bel\'s neck". Same animal, two names.',
      },
      {
        id: 'a5-f7',
        kind: 'entry',
        term: "Cledwyn's hand — ch 5 vs ch 18",
        text: 'Chapter 5 gives him "the two stumps on his left hand", from the accident of \'84. Chapter 18 has him favouring "his bandaged right hand" in a scene that clearly refers to the old injury.',
      },
      {
        id: 'a5-f8',
        kind: 'entry',
        term: 'The chapel — ch 3 vs ch 22',
        text: 'The chapel is Bethania in chapter 3 ("the long walk up to Bethania") and Bethesda in chapter 22 ("the deacons of Bethesda"). Only one chapel exists in the village.',
      },
      {
        id: 'a5-f9',
        kind: 'entry',
        term: "The Prossers' house — ch 2 vs ch 33",
        text: 'Chapter 2 places the family in "the end house of the terrace"; chapter 33 gives them "neighbours on both sides of the wall". An end house has one party wall, not two.',
      },
      {
        id: 'a5-f10',
        kind: 'entry',
        term: 'The pub — ch 8 vs ch 35',
        text: 'Chapter 8 has "the lamps of the Colliers Arms"; in chapter 35 "the Miners Arms was full by six". Hywel Rhys keeps one pub, under one name.',
      },
      {
        id: 'a5-file',
        kind: 'file',
        name: 'notes/continuity-notes.md',
        meta: 'agent working notes — excerpt',
        body: [
          {
            id: 'a5-n1',
            kind: 'note',
            text: 'ch 6 — Mari Probert: schoolmistress, 29. Says she came "three years ago" (story is 1891, so arrived 1888). Log against any later dating of her arrival.',
          },
          {
            id: 'a5-n2',
            kind: 'note',
            text: 'ch 9 — Eleazar Watkins DIES (pleurisy). Flag any appearance after this chapter.',
          },
          {
            id: 'a5-n3',
            kind: 'note',
            text: '— ch 25 checkpoint: notes over 4,000 words, compacting to key threads — deaths, ages, injuries, place names, strike timeline. Minor one-off details dropped.',
          },
          {
            id: 'a5-n4',
            kind: 'note',
            text: 'ch 29 — Mari Probert scene: no conflicts against current notes. Continue.',
          },
        ],
      },
    ],
  },
  telemetry: {
    modelCalls: 52,
    tokensIn: 315000,
    tokensOut: 22000,
    wallClockSeconds: 660,
    usdEstimate: 1.28,
    humanMinutesAfter: 10,
  },
  defect: {
    summary:
      'At chapter 25 the agent compacted its own notes to stay within budget, and Mari Probert\'s chapter 6 arrival date fell out — so when chapter 29 dated her arrival to "the autumn of \'85", nothing contradicted it, and the eleventh error went unreported.',
    locations: ['a5-n3'],
    category: 'drift',
  },
};

export default cell;
