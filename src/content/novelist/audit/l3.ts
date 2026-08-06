import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'audit',
  level: 3,
  fit: 'workable',
  whatTheUserDid: 'Uploaded forty chapters into a two-stage pipeline someone had built for long documents.',
  whatTheSystemDid: 'Summarized each chapter in its own call, then sent the forty summaries to a final call to audit.',
  whatTheModelDid: 'Compared summaries against summaries, so it could only see what the summaries kept.',
  whatCameBack: 'A tidy four-finding report with an appendix of chapter summaries.',
  artifact: {
    kind: 'report',
    label: 'audit report (via chapter summaries)',
    body: [
      { id: 'a3-h1', kind: 'heading', text: 'Continuity audit — Under the Seam' },
      {
        id: 'a3-intro',
        kind: 'para',
        text: 'Each chapter was summarized and the summaries were checked against one another for contradictions. Four continuity errors were found, all at the level of plot and timeline. Chapter summaries are appended for reference.',
      },
      {
        id: 'a3-f1',
        kind: 'entry',
        term: 'Eleazar Watkins dies, then reappears — ch 9 vs ch 24',
        text: 'The minister dies of pleurisy in chapter 9, but in chapter 24 "Eleazar Watkins spoke over the coffin" at the funeral of the two men killed in the fall. A dead man delivers a eulogy.',
      },
      {
        id: 'a3-f2',
        kind: 'entry',
        term: 'Length of the strike — ch 15 vs ch 19',
        text: 'Chapter 15 fixes the strike at "six weeks, the lodge said, and not a day more"; chapter 19 refers to "the ninth week of the strike". The strike\'s length is a plot point and should be settled one way.',
      },
      {
        id: 'a3-f3',
        kind: 'entry',
        term: "Tegwen's age — ch 1 vs ch 20",
        text: 'Tegwen is "sixteen that spring" in chapter 1 but "barely fourteen and already in service" in chapter 20. The two-year gap changes how her leaving service reads.',
      },
      {
        id: 'a3-f4',
        kind: 'entry',
        term: "Baby Gwen's timeline — ch 28 vs ch 36",
        text: 'Chapter 28 has "Gwen was born in March, with the thaw"; chapter 36 places the christening "that January, weeks after her birth". A March birth cannot be followed weeks later by a January christening in the same year.',
      },
      {
        id: 'a3-file',
        kind: 'file',
        name: 'appendix: chapter summaries (40)',
        meta: 'stage 1 output — 3 of 40 shown',
        body: [
          {
            id: 'a3-sum2',
            kind: 'note',
            text: 'ch 2 — Domestic interior at the Prosser house, the end of the terrace. Angharad keeps the ledger while Gwilym washes off the shift; their marriage sketched through routine. Establishes the household economy and the terrace itself.',
          },
          {
            id: 'a3-sum15',
            kind: 'note',
            text: 'ch 15 — The lodge votes to strike after the roof fall inquiry. The strike is set at six weeks. Isaac Meredith argues for the ballot; the chapel men abstain. The village splits.',
          },
          {
            id: 'a3-sum24',
            kind: 'note',
            text: 'ch 24 — Funeral of the two men killed in the fall. Eleazar Watkins delivers the eulogy at the graveside. The procession passes the shut pit gates.',
          },
          {
            id: 'a3-coverage',
            kind: 'note',
            text: 'coverage: all 40 chapters reviewed. No further contradictions found across the summary set.',
          },
        ],
      },
    ],
  },
  telemetry: {
    modelCalls: 41,
    tokensIn: 195000,
    tokensOut: 26000,
    wallClockSeconds: 180,
    usdEstimate: 0.98,
    humanMinutesAfter: 45,
  },
  defect: {
    summary:
      'The summaries dropped every sentence-level detail — eye colour, the pony\'s name, which hand, the chapel\'s name, an arrival date, the terrace, the pub — so the audit stage never saw seven of the eleven errors, while the coverage note claims all forty chapters were reviewed.',
    locations: ['a3-sum2', 'a3-coverage'],
    category: 'drift',
  },
};

export default cell;
