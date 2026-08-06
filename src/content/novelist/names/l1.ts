import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'names',
  level: 1,
  fit: 'best',
  whatTheUserDid: 'Typed one sentence into a chat box and hit enter.',
  whatTheSystemDid: 'Sent the sentence to the model. Nothing else exists.',
  whatTheModelDid: 'Drew on period naming patterns and answered in one pass.',
  whatCameBack: 'Twelve usable names in the chat, six seconds later.',
  artifact: {
    kind: 'chat',
    label: 'chat response',
    body: [
      {
        id: 'n1-intro',
        kind: 'para',
        text: 'Twelve names for an 1890s Welsh mining village — a mix of colliers, their families, and the people who keep a pit town running. Patronymic surnames were still common, so a few share family names.',
      },
      { id: 'n1-h-men', kind: 'heading', text: 'At the pit' },
      { id: 'n1-e1', kind: 'entry', term: 'Gwilym Prosser', text: 'hewer, 44 — thirty years underground, chapel deacon on Sundays' },
      { id: 'n1-e2', kind: 'entry', term: 'Dai Llewellyn', text: 'haulier, 19 — works the ponies on the east level' },
      { id: 'n1-e3', kind: 'entry', term: 'Emrys Bevan', text: 'fireman, 51 — checks the workings for gas before each shift' },
      { id: 'n1-e4', kind: 'entry', term: 'Cledwyn Vaughan', text: 'banksman, 38 — lost two fingers to a dram in ’84' },
      { id: 'n1-e5', kind: 'entry', term: 'Isaac Meredith', text: 'checkweighman, 47 — elected by the men, distrusted by the office' },
      { id: 'n1-h-town', kind: 'heading', text: 'In the village' },
      { id: 'n1-e6', kind: 'entry', term: 'Angharad Prosser', text: 'Gwilym’s wife, 41 — takes in washing, keeps the family ledger' },
      { id: 'n1-e7', kind: 'entry', term: 'Mari Probert', text: 'schoolmistress, 29 — teaches in English, dreams in Welsh' },
      { id: 'n1-e8', kind: 'entry', term: 'Tegwen Bevan', text: 'Emrys’s daughter, 16 — in service at the manager’s house' },
      { id: 'n1-e9', kind: 'entry', term: 'Eleazar Watkins', text: 'minister, 56 — Calvinistic Methodist, preaches temperance to deaf ears' },
      { id: 'n1-e10', kind: 'entry', term: 'Bronwen Llewellyn', text: 'Dai’s mother, 45 — widowed by the pit, keeps a shop window of sweets' },
      { id: 'n1-e11', kind: 'entry', term: 'Hywel Rhys', text: 'landlord of the Colliers Arms, 49 — extends credit against pay day' },
      { id: 'n1-e12', kind: 'entry', term: 'Nerys Vaughan', text: 'midwife, 60 — delivered half the village, buried too many of them' },
      {
        id: 'n1-close',
        kind: 'para',
        text: 'If you want, I can skew the list younger, add English incomers from the ironworks, or work out which families intermarried.',
      },
    ],
  },
  telemetry: {
    modelCalls: 1,
    tokensIn: 240,
    tokensOut: 610,
    wallClockSeconds: 6,
    usdEstimate: 0.01,
    humanMinutesAfter: 2,
  },
};

export default cell;
