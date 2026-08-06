import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'novel',
  level: 3,
  fit: 'broken',
  whatTheUserDid: 'Pasted the outline into a chapter-drafting pipeline someone had built and pressed run.',
  whatTheSystemDid: 'Split the outline into 40 chapter briefs and sent each to the model in fixed order, forwarding only the brief each time.',
  whatTheModelDid: 'Wrote each chapter well from its slice of the outline, without seeing any chapter written before it.',
  whatCameBack: 'One enormous response holding 40 chapter drafts, assembled in order.',
  artifact: {
    kind: 'chat',
    label: 'workflow output (40 chapter drafts)',
    body: [
      {
        id: 'v3-intro',
        kind: 'para',
        text: 'Pipeline complete. All 40 chapters were drafted in sequence from the outline and assembled below in order — about 118,000 words in total. Each chapter was generated from its own section of the outline; the full stage log follows.',
      },
      {
        id: 'v3-log',
        kind: 'note',
        text: 'stage 01/41: outline parsed → 40 chapter briefs\nstage 04/41: ch-03 drafted from outline §1.4\nstage 12/41: ch-11 drafted from outline §2.3\nstage 13/41: ch-12 drafted from outline §2.4\nstage 41/41: assembly complete — 40 chapters, 118,400 words',
      },
      { id: 'v3-h-ch3', kind: 'heading', text: 'from chapter 3' },
      {
        id: 'v3-ex-ch3',
        kind: 'excerpt',
        text: 'The lodger came up on the Aberdare carrier’s cart with one box and a concertina he never played. Ifor Daniels, he said, from Trecynon, and looked at his boots while he said it. Angharad put him in the spare room over the scullery, and set a sixth plate that first evening as if the table had always been laid short. Gwilym watched him across the mutton and made his judgment slowly, the way he cut coal: a man who ate quietly, said grace as if he meant it, and left the best of the loaf untouched. By the second week the plate was not counted. It was simply there, as Ifor was there, in the room over the scullery.',
      },
      { id: 'v3-h-ch12', kind: 'heading', text: 'from chapter 12' },
      {
        id: 'v3-ex-ch12',
        kind: 'excerpt',
        text: 'Angharad went up to the spare room over the scullery, which had stood empty since the children left, and opened the window to air a place no one had breathed in for a year or more. Dust lay on the sill in an even grey felt. She stood a while with her hand on the iron bedstead, cold as a chapel railing, and thought that a house does its remembering in its empty rooms. Below in the street the first shift was going down, boots on the cobbles, and the sound came up through the floor of the still room as if through water. She left the window on the latch and went down to the wash.',
      },
    ],
  },
  telemetry: {
    modelCalls: 44,
    tokensIn: 132000,
    tokensOut: 96000,
    wallClockSeconds: 540,
    usdEstimate: 1.86,
    humanMinutesAfter: 900,
  },
  defect: {
    summary: 'A fixed pipeline cannot look back; anything a chapter invents is invisible to every later chapter.',
    locations: ['v3-ex-ch12'],
    category: 'wrong-shape',
  },
};

export default cell;
