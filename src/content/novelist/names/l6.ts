import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'names',
  level: 6,
  fit: 'wasteful',
  whatTheUserDid: 'Typed one sentence into a system that fans requests out to parallel workers.',
  whatTheSystemDid: 'Spawned six generators at once, each producing twelve names in isolation, then a merger call to pick the final twelve.',
  whatTheModelDid: 'Each generator drew on the same period stock without seeing the others; the merger chose line by line from seventy-two candidates.',
  whatCameBack: 'A merged list of twelve names with a merger note, seventy seconds later.',
  artifact: {
    kind: 'chat',
    label: 'merged output (6 generators)',
    body: [
      { id: 'n6-h1', kind: 'heading', text: 'Twelve characters — 1890s Welsh mining village' },
      { id: 'n6-e1', kind: 'entry', term: 'Gwilym Prosser', text: 'hewer, 44 — thirty years at the coalface, chapel deacon' },
      { id: 'n6-e2', kind: 'entry', term: 'Dai Llewellyn', text: 'haulier, 19 — works the ponies on the east level' },
      { id: 'n6-e3', kind: 'entry', term: 'Emrys Bevan', text: 'fireman, 51 — tests for gas ahead of every shift' },
      { id: 'n6-e4', kind: 'entry', term: 'Gwen Probert', text: 'seamstress, 33 — sews pit clothes by day, chapel dresses by lamplight' },
      { id: 'n6-e5', kind: 'entry', term: 'Isaac Meredith', text: 'checkweighman, 47 — watches the scales on the men’s behalf' },
      { id: 'n6-e6', kind: 'entry', term: 'Owen Llywelyn', text: 'ostler, 55 — keeps the pit ponies stabled and shod' },
      { id: 'n6-e7', kind: 'entry', term: 'Gwenllian Watkins', text: 'minister’s niece, 24 — plays the harmonium at Bethania' },
      { id: 'n6-e8', kind: 'entry', term: 'Hywel Rhys', text: 'landlord of the Colliers Arms, 49 — credit against pay day' },
      { id: 'n6-e9', kind: 'entry', term: 'Mari Probert', text: 'schoolmistress, 29 — teaches in English, thinks in Welsh' },
      { id: 'n6-e10', kind: 'entry', term: 'Gwenda Rees', text: 'shopkeeper’s daughter, 21 — keeps the grocery ledger straight' },
      { id: 'n6-e11', kind: 'entry', term: 'Eleazar Watkins', text: 'minister, 56 — preaches temperance from the Bethania pulpit' },
      { id: 'n6-e12', kind: 'entry', term: 'Nerys Vaughan', text: 'midwife, 60 — first and last hands most villagers ever know' },
      {
        id: 'n6-merge',
        kind: 'note',
        text: 'merge: 72 candidates from 6 generators → 12 selected. Criteria: role coverage, period plausibility, surname spread. 41 exact duplicates discarded.',
      },
    ],
  },
  telemetry: {
    modelCalls: 8,
    tokensIn: 92000,
    tokensOut: 15000,
    wallClockSeconds: 70,
    usdEstimate: 0.51,
    humanMinutesAfter: 12,
  },
  defect: {
    summary:
      'The generators never saw each other’s output, and the merger only removed exact duplicates. The final list carries three near-duplicate women — Gwen, Gwenllian, Gwenda — and the same surname spelled two ways, Llewellyn and Llywelyn, in two different entries.',
    locations: ['n6-e4', 'n6-e7', 'n6-e10', 'n6-e2', 'n6-e6'],
    category: 'drift',
  },
};

export default cell;
