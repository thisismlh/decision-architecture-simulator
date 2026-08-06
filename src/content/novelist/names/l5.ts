import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'names',
  level: 5,
  fit: 'wasteful',
  whatTheUserDid: 'Typed one sentence to an agent that decides its own next steps.',
  whatTheSystemDid: 'Ran the model in a loop with search and scratch space until it judged itself finished — nine calls in all.',
  whatTheModelDid: 'Searched period sources, drafted a list, critiqued its own draft twice, redrafted, then wrote up how it had worked.',
  whatCameBack: 'Twelve names plus an unrequested methodology section with citations, ninety-five seconds later.',
  artifact: {
    kind: 'chat',
    label: 'agent transcript + deliverable',
    body: [
      { id: 'n5-t1', kind: 'note', text: 'iteration 1 — search: "welsh given names 1890s glamorgan" — 6 results reviewed' },
      { id: 'n5-t2', kind: 'note', text: 'iteration 2 — draft: 12 candidates written to scratch' },
      { id: 'n5-t3', kind: 'note', text: 'iteration 3 — critique: 2 names flagged as over-familiar; occupations too pit-heavy' },
      { id: 'n5-t4', kind: 'note', text: 'iteration 4 — redraft: replaced 2 names, rebalanced village roles' },
      { id: 'n5-t5', kind: 'note', text: 'iteration 5 — critique: pass; noted sources should be cited' },
      { id: 'n5-t6', kind: 'note', text: 'iteration 6 — finalize: list + methodology assembled' },
      { id: 'n5-h1', kind: 'heading', text: 'Twelve characters — 1890s Welsh mining village' },
      { id: 'n5-e1', kind: 'entry', term: 'Gwilym Prosser', text: 'hewer, 44 — thirty years at the face, deacon at the chapel' },
      { id: 'n5-e2', kind: 'entry', term: 'Dai Llewellyn', text: 'haulier, 19 — minds the ponies on the east level' },
      { id: 'n5-e3', kind: 'entry', term: 'Emrys Bevan', text: 'fireman, 51 — carries the safety lamp ahead of every shift' },
      { id: 'n5-e4', kind: 'entry', term: 'Cledwyn Vaughan', text: 'banksman, 38 — two fingers short since the dram slipped in ’84' },
      { id: 'n5-e5', kind: 'entry', term: 'Isaac Meredith', text: 'checkweighman, 47 — the men’s witness at the weighbridge' },
      { id: 'n5-e6', kind: 'entry', term: 'Hywel Rhys', text: 'landlord of the Colliers Arms, 49 — hears more than the minister does' },
      { id: 'n5-e7', kind: 'entry', term: 'Angharad Prosser', text: 'Gwilym’s wife, 41 — takes in washing, keeps the household solvent' },
      { id: 'n5-e8', kind: 'entry', term: 'Mari Probert', text: 'schoolmistress, 29 — arrived three autumns ago, still counted a newcomer' },
      { id: 'n5-e9', kind: 'entry', term: 'Tegwen Bevan', text: 'Emrys’s daughter, 16 — in service at the manager’s house' },
      { id: 'n5-e10', kind: 'entry', term: 'Eleazar Watkins', text: 'minister, 56 — preaches temperance, buries the consequences' },
      { id: 'n5-e11', kind: 'entry', term: 'Bronwen Llewellyn', text: 'Dai’s mother, 45 — widowed by the pit, sells sweets from her window' },
      { id: 'n5-e12', kind: 'entry', term: 'Nerys Vaughan', text: 'midwife, 60 — delivered half the village and remembers every birth' },
      { id: 'n5-mh', kind: 'heading', text: 'Methodology' },
      {
        id: 'n5-m1',
        kind: 'para',
        text: 'Names were drawn from period-attested stock rather than modern Welsh revival forms. Given names were checked against the distribution patterns of late-Victorian Glamorgan and Monmouthshire, favouring the chapel-Biblical and older Welsh forms current before 1900. Surnames follow the narrow patronymic stock of the coalfield — Prosser, Bevan, Probert, Vaughan — which is why repetition within a single village is deliberate.',
      },
      {
        id: 'n5-m2',
        kind: 'para',
        text: 'Principal sources consulted: the 1891 Census of England and Wales (Glamorgan returns); Merthyr Tydfil Parish Register, 1888 (digitised); T. J. Morgan and Prys Morgan, Welsh Surnames; and E. Davies, Naming Customs of the South Wales Coalfield (1902). Occupational titles follow contemporary colliery usage: hewer, haulier, fireman, banksman, checkweighman.',
      },
    ],
  },
  telemetry: {
    modelCalls: 9,
    tokensIn: 48000,
    tokensOut: 9200,
    wallClockSeconds: 95,
    usdEstimate: 0.28,
    humanMinutesAfter: 9,
  },
  defect: {
    summary:
      'The methodology cites four sources; two do not exist. There is no digitised "Merthyr Tydfil Parish Register, 1888", and Davies’s "Naming Customs of the South Wales Coalfield (1902)" was never written. The names themselves are sound; the scholarly apparatus wrapped around them is invented.',
    locations: ['n5-m2'],
    category: 'fabrication',
  },
};

export default cell;
