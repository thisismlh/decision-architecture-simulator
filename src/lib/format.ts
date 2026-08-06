export function formatTokens(n: number): string {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `${m >= 10 ? Math.round(m) : m.toFixed(2).replace(/0$/, '')}M`;
  }
  if (n >= 10_000) return `${Math.round(n / 1000)}k`;
  return n.toLocaleString('en-US');
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s === 0 ? `${m}m` : `${m}m ${s.toString().padStart(2, '0')}s`;
}

export function formatUsd(n: number): string {
  return `$${n.toFixed(2)}`;
}

export function formatHumanMinutes(minutes: number): string {
  if (minutes < 60) return `+${minutes} min yours`;
  const h = minutes / 60;
  return `+${h % 1 === 0 ? h : h.toFixed(1)} hrs yours`;
}
