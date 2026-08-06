import type { RequestMeta } from '../types';

interface Props {
  requests: RequestMeta[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function RequestTabs({ requests, selected, onSelect }: Props) {
  return (
    <div className="border-y border-wash">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 py-3">
        <span className="mr-3 font-mono text-xs text-slate-dim">request</span>
        {requests.map((r) => {
          const active = r.id === selected;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => onSelect(r.id)}
              aria-current={active ? 'true' : undefined}
              className={`cursor-pointer rounded-sm border px-3 py-1 text-sm transition-colors ${
                active
                  ? 'border-slate bg-slate text-bone'
                  : 'border-slate/25 text-slate hover:border-slate'
              }`}
            >
              {r.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
