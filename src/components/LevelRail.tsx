import type { Cell, Level } from '../types';
import { LEVELS, LEVEL_NAMES } from '../types';
import TokenSwarm, { type CostTier } from './TokenSwarm';
import { formatTokens } from '../lib/format';

interface Props {
  requestId: string;
  cells: Partial<Record<Level, Cell>>;
  selected: Level;
  onSelect: (level: Level) => void;
}

const totalTokens = (c: Cell) => c.telemetry.tokensIn + c.telemetry.tokensOut;

function tierFor(total: number, max: number): CostTier {
  if (total >= 0.6 * max) return 'high';
  if (total < 0.02 * max) return 'low';
  return 'mid';
}

/**
 * Always-visible rail: one row per level, each with its token swarm scaled
 * relative to the most expensive level for the current request. Switching
 * requests re-scales every field.
 */
export default function LevelRail({ requestId, cells, selected, onSelect }: Props) {
  const totals = LEVELS.map((l) => (cells[l] ? totalTokens(cells[l]!) : 0));
  const max = Math.max(...totals, 1);
  // Tune marks-per-request so the densest field fills the rail without scrolling.
  const tokensPerMark = Math.max(200, Math.ceil(max / 1300 / 100) * 100);

  return (
    <nav aria-label="Architecture level" className="flex flex-col">
      <div className="mb-3 flex items-baseline justify-between border-b border-wash pb-2">
        <span className="font-mono text-xs text-slate-dim">architecture</span>
        <span className="font-mono text-xs text-slate-dim">
          ▪ ≈ {formatTokens(tokensPerMark)} tok
        </span>
      </div>

      {LEVELS.map((level, i) => {
        const cell = cells[level];
        if (!cell) return null;
        const total = totals[i];
        const isSelected = level === selected;
        return (
          <div key={level}>
            {level === 3 && (
              <div className="flex items-baseline gap-3 border-b border-wash py-1.5 pl-2">
                <span className="font-mono text-xs text-slate-dim/70">L2</span>
                <span className="text-xs text-slate-dim/70">—</span>
                <span className="ml-auto text-xs text-slate-dim/70" aria-hidden="true">
                  †
                </span>
              </div>
            )}
            <button
              type="button"
              onClick={() => onSelect(level)}
              aria-label={`Level ${level}: ${LEVEL_NAMES[level]}, ${formatTokens(total)} tokens`}
              aria-current={isSelected ? 'true' : undefined}
              className={`block w-full cursor-pointer border-b border-wash py-2.5 pr-1 pl-2 text-left transition-colors ${
                isSelected ? 'bg-wash/60' : 'hover:bg-wash/40'
              }`}
            >
              <span className="flex items-baseline gap-3">
                <span
                  className={`font-mono text-xs ${isSelected ? 'text-ink' : 'text-slate-dim'}`}
                >
                  L{level}
                </span>
                <span className={`text-xs ${isSelected ? 'font-medium text-ink' : 'text-slate-dim'}`}>
                  {LEVEL_NAMES[level]}
                </span>
                <span className="ml-auto font-mono text-xs text-slate-dim">
                  {formatTokens(total)}
                </span>
              </span>
              <span className="mt-2 block min-h-[6px]">
                <TokenSwarm
                  tokens={total}
                  tokensPerMark={tokensPerMark}
                  tier={tierFor(total, max)}
                  animateKey={requestId}
                />
              </span>
            </button>
          </div>
        );
      })}

      <p className="mt-3 text-xs leading-snug text-slate-dim">
        <span aria-hidden="true">† </span>Level 2 — retrieval — was cut on purpose: it&rsquo;s a
        dial you add to any level, not a rung.
      </p>
    </nav>
  );
}
