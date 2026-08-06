import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'audit',
  level: 1,
  fit: 'broken',
  whatTheUserDid: 'Pasted all forty chapters into one prompt and asked for every continuity error.',
  whatTheSystemDid: 'Sent the whole manuscript to the model in a single call.',
  whatTheModelDid: 'Attended closely to the first twenty-eight chapters or so and skimmed the rest without saying so.',
  whatCameBack: 'A confident nine-finding report, delivered in under a minute.',
  artifact: {
    kind: 'report',
    label: 'continuity report',
    body: [
      { id: 'a1-h1', kind: 'heading', text: 'Continuity report — Under the Seam' },
      {
        id: 'a1-intro',
        kind: 'para',
        text: 'I read the full manuscript against itself and found nine continuity errors. Each is listed with the chapters involved and the conflicting passages. None require structural revision; all can be fixed with a line edit.',
      },
      {
        id: 'a1-f1',
        kind: 'entry',
        term: "Angharad's eyes — ch 2 vs ch 31",
        text: 'In chapter 2 Angharad has "her grey eyes steady on the fire"; in chapter 31 "her brown eyes went to the door". Grey is established first and used at a character-defining moment; chapter 31 should change.',
      },
      {
        id: 'a1-f2',
        kind: 'entry',
        term: "Dai's pony — ch 4 vs ch 26",
        text: 'The pit pony is named in chapter 4 — "Seren stood patient in the traces" — but in chapter 26 "he pressed his face to Bel\'s neck". Same animal, two names.',
      },
      {
        id: 'a1-f3',
        kind: 'entry',
        term: "Cledwyn's hand — ch 5 vs ch 18",
        text: 'Chapter 5 gives him "the two stumps on his left hand", from the accident of \'84. Chapter 18 has him favouring "his bandaged right hand" in a scene that clearly refers to the old injury.',
      },
      {
        id: 'a1-f4',
        kind: 'entry',
        term: 'The chapel — ch 3 vs ch 22',
        text: 'The chapel is Bethania in chapter 3 ("the long walk up to Bethania") and Bethesda in chapter 22 ("the deacons of Bethesda"). Only one chapel exists in the village.',
      },
      {
        id: 'a1-f5',
        kind: 'entry',
        term: 'Length of the strike — ch 15 vs ch 19',
        text: 'Chapter 15 fixes the strike at "six weeks, the lodge said, and not a day more"; chapter 19 refers to "the ninth week of the strike". The strike\'s length is a plot point and should be settled one way.',
      },
      {
        id: 'a1-f6',
        kind: 'entry',
        term: "Tegwen's age — ch 1 vs ch 20",
        text: 'Tegwen is "sixteen that spring" in chapter 1 but "barely fourteen and already in service" in chapter 20. The two-year gap changes how her leaving service reads.',
      },
      {
        id: 'a1-f7',
        kind: 'entry',
        term: "Bronwen's late husband — ch 11 vs ch 19",
        text: 'In chapter 11 Bronwen refers to her late husband as Iolo; in chapter 19 she calls him Huw. One name should be chosen and carried through.',
      },
      {
        id: 'a1-f8',
        kind: 'entry',
        term: "Emrys Bevan's wife — ch 13 vs ch 27",
        text: 'Chapter 13 names the fireman\'s wife Catrin; chapter 27 has him speak of "Sioned" in a way that can only mean his wife. The manuscript never reconciles the two.',
      },
      {
        id: 'a1-f9',
        kind: 'entry',
        term: "Nerys Vaughan's relation to Cledwyn — ch 10 vs ch 23",
        text: 'Chapter 10 describes the midwife as Cledwyn\'s aunt; chapter 23 calls her "his mother\'s cousin". The kinship matters in the birth scene and should be fixed.',
      },
      {
        id: 'a1-close',
        kind: 'para',
        text: 'Everything else holds together well — dates, the geography of the village, and the sequence of the disaster and its aftermath are consistent throughout.',
      },
    ],
  },
  telemetry: {
    modelCalls: 1,
    tokensIn: 178000,
    tokensOut: 2400,
    wallClockSeconds: 52,
    usdEstimate: 0.57,
    humanMinutesAfter: 90,
  },
  defect: {
    summary:
      'Three of the nine findings cite scenes that do not exist in the manuscript, and the report silently missed every error after chapter 28 — the manuscript was longer than what the model actually attended to, and it never said so.',
    locations: ['a1-f7', 'a1-f8', 'a1-f9'],
    category: 'fabrication',
  },
};

export default cell;
