import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'novel',
  level: 6,
  fit: 'workable',
  whatTheUserDid: 'Asked for the whole novel quickly and accepted a four-writer split to get it.',
  whatTheSystemDid: 'Gave a shared story bible to four parallel writers — chapters 1–10, 11–20, 21–30, and 31–40 — and had a merger assemble the results.',
  whatTheModelDid: 'Each writer drafted its ten chapters against the bible revision it was handed, without reading any other writer’s work.',
  whatCameBack: 'A manuscript/ folder with 40 chapter files, sixteen minutes after pressing go.',
  artifact: {
    kind: 'files',
    label: 'manuscript/ (40 files, 4 writers)',
    body: [
      {
        id: 'v6-intro',
        kind: 'para',
        text: 'The manuscript is assembled in manuscript/ from four writers working in parallel against the shared story bible: chapters 1–10, 11–20, 21–30, and 31–40. The merger normalized headings and joined the acts. Three files are shown here as a sample.',
      },
      {
        id: 'v6-f-ch12',
        kind: 'file',
        name: 'manuscript/ch-12.md',
        meta: '2,860 words · writer 2',
        body: [
          {
            id: 'v6-ex-ch12',
            kind: 'excerpt',
            text: 'They brought the two of them up on the last dram, under sacking, and the wheel overhead went slow the way it never goes slow. The men stood back from the cage with their caps in their hands and the rain coming on. Cledwyn Vaughan lifted the sacking with his ruined hand, because someone must, and named them for the manager’s book: John Cadwaladr, haulier. Emrys Bevan, fireman. The man who had smelled it coming, taken under the very stone he had condemned. Tegwen was fetched down from the manager’s house in her apron, and no one on that hill could look at her, and no one could look away. The rain filled the empty drams with a small, patient sound.',
          },
        ],
      },
      {
        id: 'v6-f-ch23',
        kind: 'file',
        name: 'manuscript/ch-23.md',
        meta: '2,990 words · writer 3',
        body: [
          {
            id: 'v6-ex-ch23',
            kind: 'excerpt',
            text: 'The vestry met over the strike fund with the candles down to thumbs. Isaac Meredith gave the balance, and it silenced the table better than prayer. Emrys Bevan spoke first, for caution: a fund was a rope, he said, and a rope was for lowering men gently, not for paying it all out at once and standing empty-handed at the top. Gwilym answered that the widows could not eat gently. The argument went round the table twice more, and each time it came to Emrys he said the same thing more quietly, which is how a careful man shouts. In the end they split the fund — half to the widows’ coal, half held against a longer winter — and nobody left satisfied, which Meredith said was the mark of a fair decision.',
          },
        ],
      },
      {
        id: 'v6-f-ch31',
        kind: 'file',
        name: 'manuscript/ch-31.md',
        meta: '2,720 words · writer 4',
        body: [
          {
            id: 'v6-ex-ch31',
            kind: 'excerpt',
            text: 'The new manager came up from Cardiff on the Tuesday train with a gladstone bag and a way of looking at the tips as if they were a column of figures. Mr. Harden walked the yard before he walked the office, which the men noted, and put his hand on the guide ropes of the cage, which they noted too. In the Colliers Arms that evening Hywel Rhys served him a lemonade without being asked twice, and the room studied the back of his coat. He would reopen the east level, it was said, with new timbering and a clerk to keep the gas book. What was not said, anywhere, was whether a village can be reopened by the same men who shut it.',
          },
        ],
      },
    ],
  },
  telemetry: {
    modelCalls: 18,
    tokensIn: 486000,
    tokensOut: 241000,
    wallClockSeconds: 960,
    usdEstimate: 5.08,
    humanMinutesAfter: 300,
  },
  defect: {
    summary: 'Two writers worked from two revisions of the bible; a man dead in chapter 12 argues in chapter 23, and no one was positioned to notice.',
    locations: ['v6-ex-ch23'],
    category: 'drift',
  },
};

export default cell;
