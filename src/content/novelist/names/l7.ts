import type { Cell } from '../../../types';

const cell: Cell = {
  requestId: 'names',
  level: 7,
  fit: 'wasteful',
  whatTheUserDid: 'Typed one sentence into a system with a full orchestration stack behind it.',
  whatTheSystemDid: 'An orchestrator engaged a planner, two researchers, a critic, and a synthesizer, passing the request through five handoffs.',
  whatTheModelDid: 'The planner compressed the brief for handoff, the researchers worked from the compressed version, and the synthesizer polished whatever arrived.',
  whatCameBack: 'A packaged deliverable with an executive summary, the twelve names, and the planning documents, four minutes later.',
  artifact: {
    kind: 'report',
    label: 'deliverable package',
    body: [
      { id: 'n7-h1', kind: 'heading', text: 'Character Naming Deliverable: Welsh Mining Village Setting' },
      {
        id: 'n7-sum',
        kind: 'para',
        text: 'This deliverable presents twelve period-appropriate character names developed for the client’s Welsh mining village setting. Candidate names were sourced by two independent research tracks, reviewed against genre and regional conventions by a dedicated critique pass, and consolidated into the final slate below. Each entry pairs a full name with a one-line character role to support immediate integration into the manuscript.',
      },
      { id: 'n7-h2', kind: 'heading', text: 'Final slate' },
      { id: 'n7-e1', kind: 'entry', term: 'Gwilym Prosser', text: 'hewer, 44 — thirty years underground, deacon at the chapel' },
      { id: 'n7-e2', kind: 'entry', term: 'Dai Llewellyn', text: 'haulier, 19 — drives the ponies on the east level' },
      { id: 'n7-e3', kind: 'entry', term: 'Emrys Bevan', text: 'fireman, 51 — checks the workings for gas before each shift' },
      { id: 'n7-e4', kind: 'entry', term: 'Glenys Harris', text: 'grocer’s wife, 38 — runs the shop and the credit book behind it' },
      { id: 'n7-e5', kind: 'entry', term: 'Isaac Meredith', text: 'checkweighman, 47 — elected by the men to watch the scales' },
      { id: 'n7-e6', kind: 'entry', term: 'Hywel Rhys', text: 'landlord of the Colliers Arms, 49 — extends credit against pay day' },
      { id: 'n7-e7', kind: 'entry', term: 'Angharad Prosser', text: 'Gwilym’s wife, 41 — takes in washing, keeps the family ledger' },
      { id: 'n7-e8', kind: 'entry', term: 'Doreen Prosser', text: 'Gwilym’s niece, 18 — helps with the washing, wants the schoolroom instead' },
      { id: 'n7-e9', kind: 'entry', term: 'Mari Probert', text: 'schoolmistress, 29 — teaches in English, dreams in Welsh' },
      { id: 'n7-e10', kind: 'entry', term: 'Colin Watkins', text: 'minister’s nephew, 22 — clerks at the colliery office' },
      { id: 'n7-e11', kind: 'entry', term: 'Tegwen Bevan', text: 'Emrys’s daughter, 16 — in service at the manager’s house' },
      { id: 'n7-e12', kind: 'entry', term: 'Nerys Vaughan', text: 'midwife, 60 — delivered half the village, buried too many of them' },
      {
        id: 'n7-f-plan',
        kind: 'file',
        name: 'plan/handoff-summary.md',
        meta: '0.6 KB',
        body: [
          { id: 'n7-ph1', kind: 'heading', text: 'Planner brief — research handoff' },
          {
            id: 'n7-pp1',
            kind: 'note',
            text: 'Task: 12 character names for a Welsh mining village setting. Constraints: period-appropriate, Welsh regional character, one-line role per name. Split: track A given names, track B surnames + occupations. Critic to review for genre fit.',
          },
          {
            id: 'n7-pp2',
            kind: 'note',
            text: 'Deliverable: executive summary + final slate of 12, packaged by synthesizer.',
          },
        ],
      },
    ],
  },
  telemetry: {
    modelCalls: 23,
    tokensIn: 248000,
    tokensOut: 32000,
    wallClockSeconds: 260,
    usdEstimate: 1.22,
    humanMinutesAfter: 15,
  },
  defect: {
    summary:
      'The planner’s handoff compressed "1890s" to "period-appropriate", and the date never reached the researchers. Three names — Glenys, Doreen, Colin — are mid-twentieth-century Welsh, decades out of period, and the critic had no date to check them against.',
    locations: ['n7-e4', 'n7-e8', 'n7-e10', 'n7-pp1'],
    category: 'drift',
  },
};

export default cell;
