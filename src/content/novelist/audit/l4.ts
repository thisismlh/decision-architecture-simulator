import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'audit',
  level: 4,
  fit: 'workable',
  toolMode: 'read',
  whatTheUserDid: 'Pointed the assistant at the manuscript folder and asked for every continuity error.',
  whatTheSystemDid: 'Gave the model a search tool over the forty chapter files and let it act once.',
  whatTheModelDid: 'Grepped the character and place names, read each set of matching passages once, and reported without a second pass.',
  whatCameBack: 'Six well-cited findings and a note listing exactly which terms were searched.',
  artifact: {
    kind: 'report',
    label: 'continuity report (search-driven)',
    body: [
      { id: 'a4-h1', kind: 'heading', text: 'Continuity report — Under the Seam' },
      {
        id: 'a4-intro',
        kind: 'para',
        text: 'I searched the manuscript for each named character and place, read the matching passages, and compared them. Six continuity errors follow, each with the chapters involved and the conflicting text.',
      },
      {
        id: 'a4-f1',
        kind: 'entry',
        term: 'Eleazar Watkins dies, then reappears — ch 9 vs ch 24',
        text: 'The minister dies of pleurisy in chapter 9, but in chapter 24 "Eleazar Watkins spoke over the coffin" at the funeral of the two men killed in the fall. A dead man delivers a eulogy.',
      },
      {
        id: 'a4-f2',
        kind: 'entry',
        term: "Angharad's eyes — ch 2 vs ch 31",
        text: 'In chapter 2 Angharad has "her grey eyes steady on the fire"; in chapter 31 "her brown eyes went to the door". Grey is established first and used at a character-defining moment; chapter 31 should change.',
      },
      {
        id: 'a4-f3',
        kind: 'entry',
        term: "Dai's pony — ch 4 vs ch 26",
        text: 'The pit pony is named in chapter 4 — "Seren stood patient in the traces" — but in chapter 26 "he pressed his face to Bel\'s neck". Same animal, two names.',
      },
      {
        id: 'a4-f4',
        kind: 'entry',
        term: "Cledwyn's hand — ch 5 vs ch 18",
        text: 'Chapter 5 gives him "the two stumps on his left hand", from the accident of \'84. Chapter 18 has him favouring "his bandaged right hand" in a scene that clearly refers to the old injury.',
      },
      {
        id: 'a4-f5',
        kind: 'entry',
        term: 'The chapel — ch 3 vs ch 22',
        text: 'The chapel is Bethania in chapter 3 ("the long walk up to Bethania") and Bethesda in chapter 22 ("the deacons of Bethesda"). Only one chapel exists in the village.',
      },
      {
        id: 'a4-f6',
        kind: 'entry',
        term: 'The pub — ch 8 vs ch 35',
        text: 'Chapter 8 has "the lamps of the Colliers Arms"; in chapter 35 "the Miners Arms was full by six". Hywel Rhys keeps one pub, under one name.',
      },
      {
        id: 'a4-method',
        kind: 'note',
        text: 'method — searched terms: Gwilym, Angharad, Dai, Seren, Bronwen, Emrys, Tegwen, Cledwyn, Mari Probert, Eleazar Watkins, Hywel Rhys, Isaac Meredith, Nerys, Bethania, Bethesda, Colliers Arms, Miners Arms, Cwm-y-glo. Read all matching passages once; no contradictions found beyond the six above.',
      },
    ],
  },
  telemetry: {
    modelCalls: 12,
    tokensIn: 66000,
    tokensOut: 6100,
    wallClockSeconds: 80,
    usdEstimate: 0.29,
    humanMinutesAfter: 40,
  },
  defect: {
    summary:
      'One pass, no verification: the search terms were all names, so anything a name-search cannot surface — the strike\'s length, Tegwen\'s age, Mari Probert\'s arrival date, the end-of-terrace house, the birth-and-christening timeline — was never checked, and nothing rechecked the six it did find.',
    locations: ['a4-method'],
    category: 'unreviewed',
  },
};

export default cell;
