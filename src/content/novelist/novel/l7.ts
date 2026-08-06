import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'novel',
  level: 7,
  fit: 'wasteful',
  whatTheUserDid: 'Asked a full writing studio to deliver the novel with editing and reports included.',
  whatTheSystemDid: 'A showrunner briefed a bible-keeper, four writers, two editors, and a continuity checker, and every handoff between them travelled as a summary.',
  whatTheModelDid: 'Each role did its own job well on the summary it received, and no role ever read the manuscript whole.',
  whatCameBack: 'A polished delivery package — manuscript, reports, and plans — after fifty-five minutes.',
  artifact: {
    kind: 'files',
    label: 'delivery package (manuscript + reports)',
    body: [
      {
        id: 'v7-intro',
        kind: 'para',
        text: 'Delivery package for Under the Seam, complete. Contents: manuscript/ (40 chapters, 118,600 words), reports/ (continuity check, style audit, two editorial passes), and plan/ (story bible v4, act handoffs, chapter briefs). Every chapter cleared both editorial reviews, and the continuity checker reports no unresolved threads. The package is ready for your read-through.',
      },
      {
        id: 'v7-f-ch38',
        kind: 'file',
        name: 'manuscript/ch-38.md',
        meta: '2,900 words · writer 4, edited twice',
        body: [
          {
            id: 'v7-ex-ch38',
            kind: 'excerpt',
            text: 'On the morning the pit reopened, the village walked down together for the first time since the funerals, and the walking was its own kind of service. Gwilym went at the front with the deacons, Dai led Seren from the stable with her winter coat brushed to a shine, and Mr. Harden stood at the lamp-room door and gave out the lamps himself, which no manager had done in living memory. Angharad watched from the end of the terrace with the other wives, counting the men down the hill the old way, in strides. Whatever the village had lost — and it had lost past counting — it had kept the thing that walks men down a hill together. The cage dropped, the wheel turned, and smoke stood up from the chimneys as straight as Sunday.',
          },
        ],
      },
      {
        id: 'v7-f-check',
        kind: 'file',
        name: 'reports/continuity-check.md',
        meta: 'continuity checker · final pass',
        body: [
          {
            id: 'v7-n-check1',
            kind: 'note',
            text: 'checked all 40 chapter summaries against story bible v4: cast, dates, and place names consistent throughout.',
          },
          {
            id: 'v7-n-check2',
            kind: 'note',
            text: 'act boundaries verified: act-1 (ch 1–13), act-2 (ch 14–26), act-3 (ch 27–40). each act-handoff summary matches its act’s chapter summaries.',
          },
          {
            id: 'v7-n-check3',
            kind: 'note',
            text: 'sign-off: no unresolved threads. all named characters accounted for at close or listed among the losses.',
          },
        ],
      },
      {
        id: 'v7-f-handoff',
        kind: 'file',
        name: 'plan/act-3-handoff.md',
        meta: 'bible-keeper → writers 3 & 4',
        body: [
          {
            id: 'v7-n-handoff',
            kind: 'note',
            text: 'ACT 2 → ACT 3 HANDOFF\ncarry forward: the reopening under Harden; the widows’ fund; Gwilym’s standing in chapel restored; Dai keeps Seren.\nresolved in act 2, no further action: the Watkins succession; the schoolroom rent; domestic subplots resolved.\ntone: elegiac, forward-looking. target 34,000 words.',
          },
        ],
      },
    ],
  },
  telemetry: {
    modelCalls: 61,
    tokensIn: 1420000,
    tokensOut: 315000,
    wallClockSeconds: 3300,
    usdEstimate: 10.45,
    humanMinutesAfter: 360,
  },
  defect: {
    summary: 'The Tegwen subplot ran through two acts and evaporates in the third; each handoff summarized it smaller until the act-three writers never received it, and the checker checked summaries against summaries.',
    locations: ['v7-n-handoff', 'v7-n-check3'],
    category: 'drift',
  },
};

export default cell;
