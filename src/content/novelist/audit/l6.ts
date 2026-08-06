import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'audit',
  level: 6,
  fit: 'best',
  whatTheUserDid: 'Handed over the manuscript folder and asked for every continuity error.',
  whatTheSystemDid: 'Built a character-and-fact bible from the whole manuscript, fanned out eight auditors over five chapters each, then merged their findings.',
  whatTheModelDid: 'Each auditor read its five chapters closely against the same bible, so every fixed fact was checked everywhere it appears.',
  whatCameBack: 'All eleven errors, cited and quoted, in two minutes.',
  artifact: {
    kind: 'report',
    label: 'continuity report',
    body: [
      { id: 'a6-h1', kind: 'heading', text: 'Continuity report — Under the Seam' },
      {
        id: 'a6-intro',
        kind: 'para',
        text: 'Eleven continuity errors, each cited with both passages. The first four would be visible to an attentive reader and should be fixed before the manuscript goes out; the remaining seven are detail-level slips a copyeditor might catch. Everything else — the disaster sequence, the village geography, the wider timeline — holds.',
      },
      { id: 'a6-h2', kind: 'heading', text: 'Reader-visible' },
      {
        id: 'a6-f1',
        kind: 'entry',
        term: 'Eleazar Watkins dies, then reappears — ch 9 vs ch 24',
        text: 'The minister dies of pleurisy in chapter 9, but in chapter 24 "Eleazar Watkins spoke over the coffin" at the funeral of the two men killed in the fall. A dead man delivers a eulogy.',
      },
      {
        id: 'a6-f2',
        kind: 'entry',
        term: "Tegwen's age — ch 1 vs ch 20",
        text: 'Tegwen is "sixteen that spring" in chapter 1 but "barely fourteen and already in service" in chapter 20. The two-year gap changes how her leaving service reads.',
      },
      {
        id: 'a6-f3',
        kind: 'entry',
        term: "Baby Gwen's timeline — ch 28 vs ch 36",
        text: 'Chapter 28 has "Gwen was born in March, with the thaw"; chapter 36 places the christening "that January, weeks after her birth". A March birth cannot be followed weeks later by a January christening in the same year.',
      },
      {
        id: 'a6-f4',
        kind: 'entry',
        term: 'Length of the strike — ch 15 vs ch 19',
        text: 'Chapter 15 fixes the strike at "six weeks, the lodge said, and not a day more"; chapter 19 refers to "the ninth week of the strike". The strike\'s length is a plot point and should be settled one way.',
      },
      { id: 'a6-h3', kind: 'heading', text: 'Detail-level' },
      {
        id: 'a6-f5',
        kind: 'entry',
        term: "Angharad's eyes — ch 2 vs ch 31",
        text: 'In chapter 2 Angharad has "her grey eyes steady on the fire"; in chapter 31 "her brown eyes went to the door". Grey is established first and used at a character-defining moment; chapter 31 should change.',
      },
      {
        id: 'a6-f6',
        kind: 'entry',
        term: "Dai's pony — ch 4 vs ch 26",
        text: 'The pit pony is named in chapter 4 — "Seren stood patient in the traces" — but in chapter 26 "he pressed his face to Bel\'s neck". Same animal, two names.',
      },
      {
        id: 'a6-f7',
        kind: 'entry',
        term: "Cledwyn's hand — ch 5 vs ch 18",
        text: 'Chapter 5 gives him "the two stumps on his left hand", from the accident of \'84. Chapter 18 has him favouring "his bandaged right hand" in a scene that clearly refers to the old injury.',
      },
      {
        id: 'a6-f8',
        kind: 'entry',
        term: 'The chapel — ch 3 vs ch 22',
        text: 'The chapel is Bethania in chapter 3 ("the long walk up to Bethania") and Bethesda in chapter 22 ("the deacons of Bethesda"). Only one chapel exists in the village.',
      },
      {
        id: 'a6-f9',
        kind: 'entry',
        term: "Mari Probert's arrival — ch 6 vs ch 29",
        text: 'Chapter 6 has her arriving "three years ago" — 1888, with the story set in 1891. Chapter 29 dates it to "the autumn of \'85, when Miss Probert first came". Three years apart.',
      },
      {
        id: 'a6-f10',
        kind: 'entry',
        term: "The Prossers' house — ch 2 vs ch 33",
        text: 'Chapter 2 places the family in "the end house of the terrace"; chapter 33 gives them "neighbours on both sides of the wall". An end house has one party wall, not two.',
      },
      {
        id: 'a6-f11',
        kind: 'entry',
        term: 'The pub — ch 8 vs ch 35',
        text: 'Chapter 8 has "the lamps of the Colliers Arms"; in chapter 35 "the Miners Arms was full by six". Hywel Rhys keeps one pub, under one name.',
      },
      {
        id: 'a6-method',
        kind: 'note',
        text: 'method — fact bible built from all 40 chapters; 8 auditors checked 5 chapters each against it; findings merged and deduplicated by chapter citation.',
      },
    ],
  },
  telemetry: {
    modelCalls: 11,
    tokensIn: 288000,
    tokensOut: 19000,
    wallClockSeconds: 120,
    usdEstimate: 1.15,
    humanMinutesAfter: 5,
  },
};

export default cell;
