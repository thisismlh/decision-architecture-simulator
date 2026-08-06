import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'novel',
  level: 5,
  fit: 'best',
  whatTheUserDid: 'Handed the outline to an agent and left it alone for the better part of an hour.',
  whatTheSystemDid: 'Ran a loop in which the model could write files, re-read them, revise them, and keep its own notes on disk.',
  whatTheModelDid: 'Drafted in order, re-read what it had written, kept a continuity file, and went back to earlier chapters when later ones improved.',
  whatCameBack: 'A manuscript/ folder with 40 chapter files and the notes the agent used to keep them consistent.',
  artifact: {
    kind: 'files',
    label: 'manuscript/ (40 files + notes)',
    body: [
      {
        id: 'v5-intro',
        kind: 'para',
        text: 'The manuscript is complete in manuscript/ (ch-01.md through ch-40.md, 118,200 words), with working notes in notes/. Chapters were drafted in order, re-read against the continuity file after each act, and six earlier chapters were revised where later ones earned it. Two chapters and the continuity file are shown here.',
      },
      {
        id: 'v5-f-ch01',
        kind: 'file',
        name: 'manuscript/ch-01.md',
        meta: '2,980 words · revised twice',
        body: [
          {
            id: 'v5-ex-ch01',
            kind: 'excerpt',
            text: 'Gwilym Prosser left the house before the lamps in the windows had any work to do, the dark still whole on the hill and the frost giving the road a voice. Below him other boots were on the cinder path, unseen, a slow knocking that gathered as it went down, door after door giving up its man, and he knew each of them by stride long before daylight would have shown him a face. At the pithead the lamp-room window stood yellow as butter. The men filed past it one by one to be given their small allowance of light, and carried it down into a place that had never once, in all its long life, seen morning.',
          },
        ],
      },
      {
        id: 'v5-f-ch23',
        kind: 'file',
        name: 'manuscript/ch-23.md',
        meta: '3,040 words',
        body: [
          {
            id: 'v5-ex-ch23',
            kind: 'excerpt',
            text: 'The vestry met by candle because the chapel’s oil was pledged to the soup kitchen, and the economy showed in every face at the table. Isaac Meredith laid out the fund as it stood — plainly, in shillings — and let the plainness do its arguing. Then the schoolroom rent fell due in the same breath as the widows’ coal, and the table divided along its grain. Gwilym spoke last, as a deacon should. He said that a chapel that fed its own men against its own masters would answer for it, one way or the other, and that he was for answering. No one wrote the vote in the book. But the candle was out before nine, and the coal went to the widows.',
          },
        ],
      },
      {
        id: 'v5-f-notes',
        kind: 'file',
        name: 'notes/continuity.md',
        meta: 'working file, updated 31 times',
        body: [
          {
            id: 'v5-n1',
            kind: 'note',
            text: 'cast: Gwilym Prosser — hewer, deacon; wife Angharad, GREY eyes (est. ch 2). Dai Llewellyn — haulier, 19; pony is SEREN, one name throughout.',
          },
          {
            id: 'v5-n2',
            kind: 'note',
            text: 'places: chapel is BETHANIA, everywhere. public house is the COLLIERS ARMS. Prossers’ house = end of the terrace (ch 2, reused ch 33 — checked).',
          },
          {
            id: 'v5-n3',
            kind: 'note',
            text: 'dead by ch 24: Eleazar Watkins (pleurisy, ch 9); roof fall ch 12 kills two — names fixed in this file, do not resurrect.',
          },
          {
            id: 'v5-n4',
            kind: 'note',
            text: 'strike: SIX weeks, ch 15–20. every later reference audited on the act-3 re-read pass.',
          },
          {
            id: 'v5-n5',
            kind: 'note',
            text: 'ch-06 revised: planted the brass lamp Gwilym gives Dai, pays off ch-31.',
          },
        ],
      },
    ],
  },
  telemetry: {
    modelCalls: 88,
    tokensIn: 695000,
    tokensOut: 262000,
    wallClockSeconds: 2520,
    usdEstimate: 6.02,
    humanMinutesAfter: 120,
  },
};

export default cell;
