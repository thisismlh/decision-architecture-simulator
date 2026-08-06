import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'novel',
  level: 4,
  fit: 'workable',
  whatTheUserDid: 'Gave the outline to a model with file tools and asked for the manuscript as one file per chapter.',
  whatTheSystemDid: 'Let the model create and write files in a manuscript/ folder as it went.',
  whatTheModelDid: 'Wrote forty chapters into forty files in one long pass and never opened a file it had finished.',
  whatCameBack: 'A manuscript/ folder holding 40 chapter files, about 118,000 words on disk.',
  artifact: {
    kind: 'files',
    label: 'manuscript/ (40 files)',
    body: [
      {
        id: 'v4-intro',
        kind: 'para',
        text: 'The full manuscript is written to manuscript/ as ch-01.md through ch-40.md, one chapter per file, drafted in order from the outline. Four files are shown here as a sample of the whole.',
      },
      {
        id: 'v4-f-ch01',
        kind: 'file',
        name: 'manuscript/ch-01.md',
        meta: '2,940 words',
        body: [
          {
            id: 'v4-ex-ch01',
            kind: 'excerpt',
            text: 'Gwilym Prosser went out into the dark before the first shift, the frost giving the road a voice and the hill still black above the terrace. Behind him other doors gave up their men, one after another, and the boots gathered on the cinder path into a slow knocking that went down before him like water finding its level. He knew every stride without turning. At the pithead the lamp-room window burned yellow, and the men filed past it to take their small allowance of light, and carried it down into a place that had never seen morning.',
          },
        ],
      },
      {
        id: 'v4-f-ch19',
        kind: 'file',
        name: 'manuscript/ch-19.md',
        meta: '3,110 words',
        body: [
          {
            id: 'v4-ex-ch19',
            kind: 'excerpt',
            text: 'Gwylim came up from the meeting at Bethania with his collar loosened and his answer still unspoken. The vestry had wanted a word from him, deacon and hewer both, a man with a foot on each side of the dispute, and he had given them scripture instead, which satisfied nobody and committed him to nothing. Angharad was waiting up with the lamp turned low. She did not ask. She set the teapot on the hob and watched her husband take his chair like a man lowering himself into cold water, and when Gwylim spoke at last it was not of the vestry at all, but of the east level, and the sweetness in the air there that would not go away.',
          },
        ],
      },
      {
        id: 'v4-f-ch27',
        kind: 'file',
        name: 'manuscript/ch-27.md',
        meta: '1,870 words',
        body: [
          {
            id: 'v4-ex-ch27',
            kind: 'excerpt',
            text: 'The sixth week of the strike came in with rain off the mountain, and the soup kitchen at the schoolroom went to half rations without anyone saying the word aloud. Mari Probert kept her register as she kept it in term time, name by name, and if a family did not come she walked up after and stood in doorways with a basket, learning what pride costs by the pound. On the Friday the union men met at the Colliers Arms and the chapel men met at Bethania, and between the two buildings the street lay empty in the rain, and Isaac Meredith walked from the one to the other carrying',
          },
        ],
      },
      {
        id: 'v4-f-ch40',
        kind: 'file',
        name: 'manuscript/ch-40.md',
        meta: '2,750 words',
        body: [
          {
            id: 'v4-ex-ch40',
            kind: 'excerpt',
            text: 'They went down again in the last week of March, under Mr. Harden, past a lamp-room with a new clerk in it and the same yellow window. Gwylim was among the first, as was proper for a deacon and expected of a hewer, and if his boots made the old sound on the cinder path there were two strides missing from the music of it, and every man on the hill heard the absence. The cage dropped. The dark came up around them like a tide they had bathed in all their lives. Above, the village turned to its morning, and the washing went out on the lines, and under it all the seam ran on, quiet, patient, holding what it held.',
          },
        ],
      },
    ],
  },
  telemetry: {
    modelCalls: 31,
    tokensIn: 214000,
    tokensOut: 119000,
    wallClockSeconds: 840,
    usdEstimate: 2.43,
    humanMinutesAfter: 240,
  },
  defect: {
    summary: 'One re-read would have caught both; nothing ever looked at what was written.',
    locations: ['v4-ex-ch19', 'v4-ex-ch27'],
    category: 'unreviewed',
  },
};

export default cell;
