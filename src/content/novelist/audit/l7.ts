import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'audit',
  level: 7,
  fit: 'wasteful',
  whatTheUserDid: 'Handed over the manuscript folder and asked for every continuity error.',
  whatTheSystemDid: 'A planner spawned a bible-builder, eight auditors, a verifier, a style-checker, and a report-writer, then assembled their output into one package.',
  whatTheModelDid: 'The auditors found the errors; the verifier and style-checker reworked and padded the findings on the way to the final document.',
  whatCameBack: 'A nine-section audit package reporting ten findings, plus style and pacing commentary nobody asked for.',
  artifact: {
    kind: 'report',
    label: 'audit package (9 sections)',
    body: [
      { id: 'a7-h1', kind: 'heading', text: '1. Executive summary' },
      {
        id: 'a7-exec',
        kind: 'para',
        text: 'A full continuity audit of Under the Seam identified ten verified inconsistencies: four at plot level and six at detail level. All are line-editable; none require structural revision. Findings were cross-checked by an independent verification pass and deduplicated before reporting. Sections 7 and 8 record stylistic and pacing observations made in the course of the audit.',
      },
      { id: 'a7-h2', kind: 'heading', text: '2. Severity matrix' },
      {
        id: 'a7-matrix',
        kind: 'note',
        text: 'severity: HIGH (reader-visible plot break) — findings 1–4 | MEDIUM (recurring detail) — findings 5, 10 | LOW (single-instance detail) — findings 6–9. All ten: fix effort minimal, one to three lines each.',
      },
      { id: 'a7-h3', kind: 'heading', text: '3. Methodology' },
      {
        id: 'a7-method',
        kind: 'para',
        text: 'A fact bible was compiled from the complete manuscript. Eight auditors each checked five chapters against it; a verifier reviewed and consolidated their raw findings, merging duplicates; a style-checker reviewed prose consistency; a report-writer produced this package.',
      },
      { id: 'a7-h4', kind: 'heading', text: '4. Findings — plot level' },
      {
        id: 'a7-f1',
        kind: 'entry',
        term: 'Eleazar Watkins dies, then reappears — ch 9 vs ch 24',
        text: 'The minister dies of pleurisy in chapter 9, but in chapter 24 "Eleazar Watkins spoke over the coffin" at the funeral of the two men killed in the fall. A dead man delivers a eulogy.',
      },
      {
        id: 'a7-f2',
        kind: 'entry',
        term: "Tegwen's age — ch 1 vs ch 20",
        text: 'Tegwen is "sixteen that spring" in chapter 1 but "barely fourteen and already in service" in chapter 20. The two-year gap changes how her leaving service reads.',
      },
      {
        id: 'a7-f3',
        kind: 'entry',
        term: "Baby Gwen's timeline — ch 28 vs ch 36",
        text: 'Chapter 28 has "Gwen was born in March, with the thaw"; chapter 36 places the christening "that January, weeks after her birth". A March birth cannot be followed weeks later by a January christening in the same year.',
      },
      {
        id: 'a7-f4',
        kind: 'entry',
        term: 'Length of the strike — ch 15 vs ch 19',
        text: 'Chapter 15 fixes the strike at "six weeks, the lodge said, and not a day more"; chapter 19 refers to "the ninth week of the strike". The strike\'s length is a plot point and should be settled one way.',
      },
      { id: 'a7-h5', kind: 'heading', text: '5. Findings — detail level' },
      {
        id: 'a7-f5',
        kind: 'entry',
        term: 'Establishment naming inconsistent across the manuscript',
        text: 'Named establishments drift: the chapel appears as Bethania (ch 3, "the long walk up to Bethania") and Bethesda (ch 22), and the public house as the Colliers Arms (ch 8) and "the Miners Arms" (ch 35). Verification consolidated these reports into a single naming-consistency finding; a global pass on establishment names will resolve it.',
      },
      {
        id: 'a7-f6',
        kind: 'entry',
        term: "Angharad's eyes — ch 2 vs ch 31",
        text: 'In chapter 2 Angharad has "her grey eyes steady on the fire"; in chapter 31 "her brown eyes went to the door". Grey is established first and used at a character-defining moment; chapter 31 should change.',
      },
      {
        id: 'a7-f7',
        kind: 'entry',
        term: "Dai's pony — ch 4 vs ch 26",
        text: 'The pit pony is named in chapter 4 — "Seren stood patient in the traces" — but in chapter 26 "he pressed his face to Bel\'s neck". Same animal, two names.',
      },
      {
        id: 'a7-f8',
        kind: 'entry',
        term: "Cledwyn's hand — ch 5 vs ch 18",
        text: 'Chapter 5 gives him "the two stumps on his left hand", from the accident of \'84. Chapter 18 has him favouring "his bandaged right hand" in a scene that clearly refers to the old injury.',
      },
      {
        id: 'a7-f9',
        kind: 'entry',
        term: "Mari Probert's arrival — ch 6 vs ch 29",
        text: 'Chapter 6 has her arriving "three years ago" — 1888, with the story set in 1891. Chapter 29 dates it to "the autumn of \'85, when Miss Probert first came". Three years apart.',
      },
      {
        id: 'a7-f10',
        kind: 'entry',
        term: "The Prossers' house — ch 2 vs ch 33",
        text: 'Chapter 2 places the family in "the end house of the terrace"; chapter 33 gives them "neighbours on both sides of the wall". An end house has one party wall, not two.',
      },
      { id: 'a7-h6', kind: 'heading', text: '6. Verification log' },
      {
        id: 'a7-verify',
        kind: 'note',
        text: 'verifier: 12 raw findings received from auditors; 2 merged as duplicates (establishment naming); 0 rejected; 10 confirmed against source passages. Confidence: high on all.',
      },
      { id: 'a7-h7', kind: 'heading', text: '7. Stylistic observations' },
      {
        id: 'a7-style1',
        kind: 'para',
        text: 'The manuscript is disciplined about dialect: Welsh appears in address and endearment but never in narration, which keeps the register consistent. A handful of chapters (11, 17, 30) open on weather where the surrounding chapters open on a person; unifying the pattern would tighten the book\'s rhythm.',
      },
      {
        id: 'a7-style2',
        kind: 'para',
        text: 'Sentence length compresses effectively in the disaster chapters and relaxes afterwards. One recurring tic: "the pit breathed" appears four times across chapters 12–27, and the image loses force by the third use.',
      },
      { id: 'a7-h8', kind: 'heading', text: '8. Pacing notes' },
      {
        id: 'a7-pace1',
        kind: 'para',
        text: 'Chapters 1–14 build steadily; the roof fall lands at the right point. The strike chapters (15–21) run slightly long relative to their forward movement — chapter 17 in particular revisits ground chapter 16 has already covered.',
      },
      {
        id: 'a7-pace2',
        kind: 'para',
        text: 'The final movement (34–40) earns its quiet, though the gap between the reopening of the pit and the christening might be bridged with a shorter interval chapter than the current chapter 35.',
      },
      { id: 'a7-h9', kind: 'heading', text: '9. Recommended next steps' },
      {
        id: 'a7-next',
        kind: 'para',
        text: 'Fix the four plot-level findings first, then sweep the detail-level items in a single line-edit pass. The stylistic and pacing observations are offered for consideration and can be set aside without affecting continuity.',
      },
    ],
  },
  telemetry: {
    modelCalls: 29,
    tokensIn: 545000,
    tokensOut: 43000,
    wallClockSeconds: 360,
    usdEstimate: 2.28,
    humanMinutesAfter: 25,
  },
  defect: {
    summary:
      'The verifier "deduplicated" two genuinely distinct errors — the chapel\'s name and the pub\'s name — into one merged finding, so the package reports ten findings where eleven exist, and the loss is easy to miss under nine sections of material, two of them never asked for.',
    locations: ['a7-f5', 'a7-h7'],
    category: 'drift',
  },
};

export default cell;
