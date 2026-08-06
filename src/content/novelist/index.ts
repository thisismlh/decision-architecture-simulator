import type { RoleContent } from '../../types';
import { cellKey } from '../../types';

import names1 from './names/l1';
import names3 from './names/l3';
import names4 from './names/l4';
import names5 from './names/l5';
import names6 from './names/l6';
import names7 from './names/l7';
import audit1 from './audit/l1';
import audit3 from './audit/l3';
import audit4 from './audit/l4';
import audit5 from './audit/l5';
import audit6 from './audit/l6';
import audit7 from './audit/l7';
import novel1 from './novel/l1';
import novel3 from './novel/l3';
import novel4 from './novel/l4';
import novel5 from './novel/l5';
import novel6 from './novel/l6';
import novel7 from './novel/l7';

const allCells = [
  names1, names3, names4, names5, names6, names7,
  audit1, audit3, audit4, audit5, audit6, audit7,
  novel1, novel3, novel4, novel5, novel6, novel7,
];

const novelist: RoleContent = {
  id: 'novelist',
  label: 'Novelist',
  requests: [
    {
      id: 'names',
      label: 'names',
      prompt: 'Give me twelve character names for an 1890s Welsh mining village, with a line on who each one is.',
    },
    {
      id: 'audit',
      label: 'continuity audit',
      prompt: 'Here are all 40 chapters of Under the Seam. Find every continuity error before it goes to my editor.',
    },
    {
      id: 'novel',
      label: 'draft the novel',
      prompt: 'Draft Under the Seam from my three-page outline.',
    },
  ],
  cells: Object.fromEntries(allCells.map((c) => [cellKey(c.requestId, c.level), c])),
};

export default novelist;
