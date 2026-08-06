import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'names',
  level: 3,
  fit: 'workable',
  whatTheUserDid: 'Typed the same sentence into a form that feeds a four-stage pipeline.',
  whatTheSystemDid: 'Chained four model calls — generate, historical vetting, dedupe, format — each stage reading the last one’s output.',
  whatTheModelDid: 'Drafted freely in stage one, then second-guessed its own list in stage two and revised what it was told to revise.',
  whatCameBack: 'A formatted list of twelve names with a stage log appended, twenty-four seconds later.',
  artifact: {
    kind: 'chat',
    label: 'workflow output',
    body: [
      { id: 'n3-h1', kind: 'heading', text: 'Twelve characters — 1890s Welsh mining village' },
      { id: 'n3-e1', kind: 'entry', term: 'Gwilym Prosser', text: 'hewer, 44 — thirty years at the coalface, deacon at the chapel' },
      { id: 'n3-e2', kind: 'entry', term: 'Dai Llewellyn', text: 'haulier, 19 — drives the pit ponies on the east level' },
      { id: 'n3-e3', kind: 'entry', term: 'Emrys Bevan', text: 'fireman, 51 — tests the workings for gas before every shift' },
      { id: 'n3-e4', kind: 'entry', term: 'Thomas Vaughan', text: 'banksman, 38 — runs the cage at the pit head, short two fingers since ’84' },
      { id: 'n3-e5', kind: 'entry', term: 'Isaac Meredith', text: 'checkweighman, 47 — the men’s man at the weighbridge' },
      { id: 'n3-e6', kind: 'entry', term: 'Hywel Rhys', text: 'landlord of the Colliers Arms, 49 — keeps a slate for half the village' },
      { id: 'n3-e7', kind: 'entry', term: 'Angharad Prosser', text: 'Gwilym’s wife, 41 — takes in washing, minds the family purse' },
      { id: 'n3-e8', kind: 'entry', term: 'Mari Probert', text: 'schoolmistress, 29 — three years in the village, still an incomer' },
      { id: 'n3-e9', kind: 'entry', term: 'Margaret Bevan', text: 'Emrys’s daughter, 16 — in service at the manager’s house' },
      { id: 'n3-e10', kind: 'entry', term: 'Eleazar Watkins', text: 'minister, 56 — preaches temperance from the Bethania pulpit' },
      { id: 'n3-e11', kind: 'entry', term: 'Bronwen Llewellyn', text: 'Dai’s mother, 45 — widowed by the pit, sells sweets from her front window' },
      { id: 'n3-e12', kind: 'entry', term: 'Nerys Vaughan', text: 'midwife, 60 — first hands to touch most of the village' },
      { id: 'n3-log-1', kind: 'note', text: 'stage 1/4 generate: 12 candidates produced' },
      { id: 'n3-log-2', kind: 'note', text: 'stage 2/4 historical-vetting: 2 substitutions — "Tegwen", "Cledwyn" not attested before 1910; replaced with period-safe forms' },
      { id: 'n3-log-3', kind: 'note', text: 'stage 3/4 dedupe: 0 collisions' },
      { id: 'n3-log-4', kind: 'note', text: 'stage 4/4 format: 12 entries rendered' },
    ],
  },
  telemetry: {
    modelCalls: 4,
    tokensIn: 4100,
    tokensOut: 2600,
    wallClockSeconds: 24,
    usdEstimate: 0.05,
    humanMinutesAfter: 5,
  },
  defect: {
    summary:
      'The vetting stage flagged Tegwen and Cledwyn — both genuinely attested in 1890s Wales — as anachronistic and swapped them for Margaret and Thomas, logging a false justification. The list is still correct; it is just flatter than the draft it replaced.',
    locations: ['n3-e4', 'n3-e9', 'n3-log-2'],
    category: 'fabrication',
  },
};

export default cell;
