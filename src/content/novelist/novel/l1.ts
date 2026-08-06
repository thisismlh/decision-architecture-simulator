import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'novel',
  level: 1,
  fit: 'broken',
  whatTheUserDid: 'Pasted the three-page outline into the chat and asked for the whole novel.',
  whatTheSystemDid: 'Sent the outline to the model in one request and streamed back one response.',
  whatTheModelDid: 'Held the whole arc in mind at once and rendered it at the only length one response allows.',
  whatCameBack: 'About 6,000 well-written words in the chat, covering all forty chapters.',
  artifact: {
    kind: 'chat',
    label: 'chat response (~6,000 words)',
    body: [
      {
        id: 'v1-intro',
        kind: 'para',
        text: 'Here is a draft of Under the Seam, following your outline from Gwilym’s first walk down to the pit through to the reopening under the new manager. It runs to about 6,000 words. I’m happy to expand any section, adjust the pacing, or take a different way into the material.',
      },
      {
        id: 'v1-ex1',
        kind: 'excerpt',
        text: 'Gwilym Prosser left the house before the lamps in the windows had any work to do, the dark still whole on the hill and the frost making a sound of the road. Below him other boots were on the cinder path, unseen, a slow knocking that gathered as it went down, door after door giving up its man. He knew each of them by stride before he could have named a face. At the pithead the lamp-room window stood yellow against the black, and the men filed past it one by one to be given their small allowance of light, and carried it down into a place that had never seen morning.',
      },
      {
        id: 'v1-ex2',
        kind: 'excerpt',
        text: 'Emrys Bevan found the gas on a Tuesday, in the east level, where the air had a sweetness that did not belong underground. He said nothing at the face; a fireman learns to carry a thing level until he can set it down in the right office. But the manager’s door was shut to him that day, and the next, and by Friday the sweetness had a name among the men, and the name was passed along the stalls the way a lamp is passed, hand to hand, without comment.',
      },
      {
        id: 'v1-ex3',
        kind: 'excerpt',
        text: 'In the weeks that followed, the village learned what it thought of itself. Angharad kept her ledger; Mari Probert kept her school; the chapel filled and the Colliers Arms filled, and the two congregations began to know one another for rivals. Emrys Bevan warned, and was not heard, and warned again. Dai Llewellyn grew up that spring in the manner of boys who are given a man’s fear before a man’s wage. By May the east level was a word women used to each other over washing lines, and the pit went on.',
      },
      {
        id: 'v1-ex4',
        kind: 'excerpt',
        text: 'Tegwen Bevan stood at the long window of the manager’s house with a cloth in her hand and watched the men come up at the end of the shift, small and black and slow on the hill, and could not tell her father from the rest of them. It was the not telling that decided her, though she would not have called it a decision, then or after. She folded the cloth. In the kitchen the cook was singing something chapel in a public-house voice, and the bell for the drawing room went, and Tegwen answered it, for now.',
      },
      {
        id: 'v1-ex5',
        kind: 'excerpt',
        text: 'The roof came down in October and took two men, and the strike that followed took six weeks and something less easily counted. The village divided, endured, and knitted itself together again around its losses, as such places do. When the pit reopened under Mr. Harden the men went back down in the same dark, past the same lamp-room window, and if the hill remembered the two it had taken, it kept its counsel. By spring there was coal on the trams again, and washing on the lines, and the seam ran on under the houses, under the chapel, under everything.',
      },
    ],
  },
  telemetry: {
    modelCalls: 1,
    tokensIn: 1100,
    tokensOut: 7900,
    wallClockSeconds: 70,
    usdEstimate: 0.13,
    humanMinutesAfter: 1800,
  },
  defect: {
    summary: 'It summarizes where a novel dramatizes; there are no scenes here to revise into chapters, only descriptions of where scenes would go.',
    locations: ['v1-ex3', 'v1-ex5'],
    category: 'wrong-shape',
  },
};

export default cell;
