import type { Telemetry } from '../types';
import { formatDuration, formatHumanMinutes, formatTokens, formatUsd } from '../lib/format';

/** The instrument readout: every number in mono, separated by hairline dots. */
export default function Ledger({ telemetry }: { telemetry: Telemetry }) {
  const items = [
    `${telemetry.modelCalls} ${telemetry.modelCalls === 1 ? 'call' : 'calls'}`,
    `${formatTokens(telemetry.tokensIn + telemetry.tokensOut)} tok`,
    formatDuration(telemetry.wallClockSeconds),
    formatUsd(telemetry.usdEstimate),
  ];
  return (
    <footer className="sticky bottom-0 border-t border-wash bg-bone">
      <div className="mx-auto flex max-w-[1280px] items-baseline gap-x-4 gap-y-1 overflow-x-auto px-5 py-3 sm:px-8">
        <span className="font-mono text-xs text-slate-dim">ledger</span>
        <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-xs text-ink">
          {items.map((it, i) => (
            <span key={i} className="whitespace-nowrap">
              {i > 0 && <span className="mr-4 text-slate-dim">·</span>}
              {it}
            </span>
          ))}
          <span className="whitespace-nowrap">
            <span className="mr-4 text-slate-dim">·</span>
            <span className="font-medium">{formatHumanMinutes(telemetry.humanMinutesAfter)}</span>
          </span>
        </span>
      </div>
    </footer>
  );
}
