import type { Cell } from '../types';

const BEATS: Array<{ label: string; pick: (c: Cell) => string }> = [
  { label: 'you asked', pick: (c) => c.whatTheUserDid },
  { label: 'system did', pick: (c) => c.whatTheSystemDid },
  { label: 'model did', pick: (c) => c.whatTheModelDid },
  { label: 'you got', pick: (c) => c.whatCameBack },
];

/** Fixed four-line strip — same position every cell, readable down a column. */
export default function FourBeats({ cell }: { cell: Cell }) {
  return (
    <dl className="mt-6 border-t border-wash">
      {BEATS.map(({ label, pick }) => (
        <div
          key={label}
          className="grid grid-cols-[92px_1fr] items-baseline gap-4 border-b border-wash py-2.5"
        >
          <dt className="font-mono text-xs text-slate-dim">{label}</dt>
          <dd className="m-0 text-sm text-ink">{pick(cell)}</dd>
        </div>
      ))}
    </dl>
  );
}
