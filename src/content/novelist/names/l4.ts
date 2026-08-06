import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'names',
  level: 4,
  fit: 'workable',
  whatTheUserDid: 'Typed one sentence into an assistant that can write files to the project folder.',
  whatTheSystemDid: 'Gave the model a file tool; the model wrote two files into characters/ and never read either one back.',
  whatTheModelDid: 'Composed the list and the naming notes in one pass, then handed both straight to the write tool.',
  whatCameBack: 'A characters/ folder with a names file and a notes file, thirty-one seconds later.',
  artifact: {
    kind: 'files',
    label: 'characters/ (2 files)',
    body: [
      {
        id: 'n4-f-names',
        kind: 'file',
        name: 'characters/names.md',
        meta: '2.1 KB',
        body: [
          { id: 'n4-h1', kind: 'heading', text: 'Twelve characters of Cwm-y-glo' },
          { id: 'n4-e1', kind: 'entry', term: 'Gwilym Prosser', text: 'hewer, 44 — thirty years underground, deacon at Bethania chapel' },
          { id: 'n4-e2', kind: 'entry', term: 'Dai Llewellyn', text: 'haulier, 19 — works the ponies on the east level' },
          { id: 'n4-e3', kind: 'entry', term: 'Emrys Bevan', text: 'fireman, 51 — checks for gas before each shift, trusted and ignored' },
          { id: 'n4-e4', kind: 'entry', term: 'Cledwyn Vaughan', text: 'banksman, 38 — lost two fingers to a dram in ’84' },
          { id: 'n4-e5', kind: 'entry', term: 'Isaac Meredith', text: 'checkweighman, 47 — elected by the men to watch the scales' },
          { id: 'n4-e6', kind: 'entry', term: 'Hywel Rhys', text: 'landlord of the Colliers Arms, 49 — credit until pay day, memory like a ledger' },
          { id: 'n4-e7', kind: 'entry', term: 'Angharad Prosser', text: 'Gwilym’s wife, 41 — takes in washing, keeps the family accounts' },
          { id: 'n4-e8', kind: 'entry', term: 'Mari Probert', text: 'schoolmistress, 29 — teaches in English by order, comforts in Welsh by habit' },
          { id: 'n4-e9', kind: 'entry', term: 'Tegwen Bevan', text: 'Emrys’s daughter, 16 — in service at the manager’s house' },
          { id: 'n4-e10', kind: 'entry', term: 'Eleazar Watkins', text: 'minister, 56 — Calvinistic Methodist, preaches temperance to a thin congregation' },
          { id: 'n4-e11', kind: 'entry', term: 'Bronwen Llewellyn', text: 'Dai’s mother, 45 — widowed by the pit, sells sweets from her parlour window' },
        ],
      },
      {
        id: 'n4-f-notes',
        kind: 'file',
        name: 'characters/notes.md',
        meta: '0.8 KB',
        body: [
          { id: 'n4-nh1', kind: 'heading', text: 'Naming conventions' },
          {
            id: 'n4-np1',
            kind: 'para',
            text: 'Surnames in the valleys were drawn from a narrow patronymic stock — Prosser (ap Rosser), Bevan (ab Evan), Probert (ap Robert) — so repetition within a village is realistic, and nicknames did the disambiguating.',
          },
          {
            id: 'n4-np2',
            kind: 'para',
            text: 'First names split between chapel-Biblical (Isaac, Eleazar) and revived Welsh (Gwilym, Angharad, Tegwen). Older characters skew Biblical; the Welsh revival names sit naturally on the under-thirties.',
          },
        ],
      },
    ],
  },
  telemetry: {
    modelCalls: 3,
    tokensIn: 5400,
    tokensOut: 3200,
    wallClockSeconds: 31,
    usdEstimate: 0.07,
    humanMinutesAfter: 6,
  },
  defect: {
    summary:
      'names.md is headed "Twelve characters of Cwm-y-glo" but contains eleven entries; the twelfth was never written. The file went to disk unread, so nothing caught the miscount.',
    locations: ['n4-h1', 'n4-e11'],
    category: 'unreviewed',
  },
};

export default cell;
