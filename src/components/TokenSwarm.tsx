import { useMemo } from 'react';

export type CostTier = 'low' | 'mid' | 'high';

const TIER_COLOR: Record<CostTier, string> = {
  low: 'var(--color-slate-dim)',
  mid: 'var(--color-slate)',
  high: 'var(--color-signal)',
};

interface Props {
  tokens: number;
  tokensPerMark: number;
  tier: CostTier;
  /** Changing this key replays the entry animation (request switches). */
  animateKey: string;
}

/**
 * The swarm: one 2px mark per ~N tokens, filling bottom-up. Marks encode one
 * variable — cost — and are colored only by cost tier.
 */
export default function TokenSwarm({ tokens, tokensPerMark, tier, animateKey }: Props) {
  const count = Math.max(1, Math.round(tokens / tokensPerMark));
  // 4ms stagger, capped so the whole wave finishes inside 600ms.
  const step = Math.min(4, 600 / count);
  const color = TIER_COLOR[tier];

  const marks = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="mark mark-animate"
          style={{ backgroundColor: color, animationDelay: `${(i * step).toFixed(1)}ms` }}
        />
      )),
    [count, color, step],
  );

  return (
    <div
      key={animateKey}
      aria-hidden="true"
      className="flex flex-wrap-reverse content-start justify-start gap-px"
    >
      {marks}
    </div>
  );
}
