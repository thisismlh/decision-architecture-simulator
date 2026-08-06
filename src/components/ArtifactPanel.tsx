import { useEffect, useMemo, useRef, useState } from 'react';
import type { ArtifactBlock, Cell } from '../types';

interface Props {
  cell: Cell;
  cellId: string;
  revealed: boolean;
  onReveal: () => void;
}

const KIND_LABEL: Record<Cell['artifact']['kind'], string> = {
  chat: 'chat',
  files: 'files',
  deployed: 'deployed',
  report: 'report',
};

/** ids of file blocks that contain any of the given block ids (searched deep). */
function filesContaining(blocks: ArtifactBlock[], targets: Set<string>): Set<string> {
  const out = new Set<string>();
  const containsTarget = (bs: ArtifactBlock[]): boolean =>
    bs.some((b) => targets.has(b.id) || (b.kind === 'file' && containsTarget(b.body)));
  for (const b of blocks) {
    if (b.kind === 'file' && containsTarget(b.body)) out.add(b.id);
  }
  return out;
}

export default function ArtifactPanel({ cell, cellId, revealed, onReveal }: Props) {
  const { artifact, defect } = cell;
  const [openFiles, setOpenFiles] = useState<Set<string>>(new Set());
  const bodyRef = useRef<HTMLDivElement>(null);

  const defectIds = useMemo(() => new Set(defect?.locations ?? []), [defect]);

  // Reset per cell.
  useEffect(() => {
    setOpenFiles(new Set());
  }, [cellId]);

  // On reveal: open any files hiding a marker, then scroll the first one into view.
  useEffect(() => {
    if (!revealed || !defect) return;
    setOpenFiles((prev) => new Set([...prev, ...filesContaining(artifact.body, defectIds)]));
    const t = window.setTimeout(() => {
      const el = bodyRef.current?.querySelector('[data-defect="true"]');
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 80);
    return () => window.clearTimeout(t);
  }, [revealed, defect, artifact, defectIds]);

  const toggleFile = (id: string) =>
    setOpenFiles((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const renderBlock = (block: ArtifactBlock, depth = 0) => {
    const hit = revealed && defectIds.has(block.id);
    const hitClass = hit ? ' defect-hit' : '';
    const hitProps = hit ? { 'data-defect': 'true' as const } : {};

    switch (block.kind) {
      case 'heading':
        return (
          <h3
            key={block.id}
            {...hitProps}
            className={`font-serif text-lg font-medium leading-tight text-ink [&:not(:first-child)]:mt-8${hitClass}`}
          >
            {block.text}
          </h3>
        );
      case 'para':
        return (
          <p key={block.id} {...hitProps} className={`font-serif text-base text-ink${hitClass}`}>
            {block.text}
          </p>
        );
      case 'entry':
        return (
          <p key={block.id} {...hitProps} className={`font-serif text-base text-ink${hitClass}`}>
            <span className="font-medium">{block.term}</span>
            <span className="text-ink/80"> — {block.text}</span>
          </p>
        );
      case 'excerpt':
        return (
          <blockquote
            key={block.id}
            {...hitProps}
            className={`border-l border-ink/15 py-0.5 pl-5 font-serif text-base text-ink${hitClass}`}
          >
            {block.text}
          </blockquote>
        );
      case 'note':
        return (
          <p
            key={block.id}
            {...hitProps}
            className={`font-mono text-xs leading-relaxed text-slate-dim${hitClass}`}
          >
            {block.text}
          </p>
        );
      case 'file': {
        const open = openFiles.has(block.id);
        return (
          <div key={block.id} className="border border-wash bg-white/40">
            <button
              type="button"
              onClick={() => toggleFile(block.id)}
              aria-label={`${open ? 'Collapse' : 'Expand'} ${block.name}`}
              aria-expanded={open}
              className="flex w-full cursor-pointer items-baseline gap-2 px-4 py-2.5 text-left hover:bg-white/70"
            >
              <span className="font-mono text-xs text-slate" aria-hidden="true">
                {open ? '▾' : '▸'}
              </span>
              <span className="font-mono text-xs text-ink">{block.name}</span>
              {block.meta && <span className="ml-auto font-mono text-xs text-slate-dim">{block.meta}</span>}
            </button>
            {open && (
              <div className="flex flex-col gap-4 border-t border-wash px-5 py-4">
                {block.body.map((b) => renderBlock(b, depth + 1))}
              </div>
            )}
          </div>
        );
      }
    }
  };

  return (
    <section aria-label="Artifact">
      <div className="mb-3 flex items-baseline gap-3">
        <span className="font-mono text-xs text-slate-dim">
          {KIND_LABEL[artifact.kind]} · {artifact.label}
        </span>
        <RevealControl cellId={cellId} revealed={revealed} onReveal={onReveal} />
      </div>

      <div ref={bodyRef} className="bg-wash px-7 py-9 sm:px-12 sm:py-12">
        <div className="mx-auto flex max-w-[620px] flex-col gap-4">
          {artifact.body.map((b) => renderBlock(b))}
        </div>
      </div>

      <div aria-live="polite">
        {revealed && defect && (
          <div className="mt-3 border-l-2 border-signal bg-white/50 px-4 py-3">
            <p className="font-mono text-xs text-signal">defect · {defect.category}</p>
            <p className="mt-1 text-sm text-ink">{defect.summary}</p>
          </div>
        )}
        {revealed && !defect && (
          <div className="mt-3 border-l-2 border-pine bg-white/50 px-4 py-3">
            <p className="font-mono text-xs text-pine">no defect</p>
            <p className="mt-1 text-sm text-ink">
              Nothing planted here. For this request, this architecture is the fit.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function RevealControl({
  cellId,
  revealed,
  onReveal,
}: {
  cellId: string;
  revealed: boolean;
  onReveal: () => void;
}) {
  // The control earns attention after ten seconds; it works on demand from the start.
  const [ripe, setRipe] = useState(false);
  useEffect(() => {
    setRipe(false);
    const t = window.setTimeout(() => setRipe(true), 10_000);
    return () => window.clearTimeout(t);
  }, [cellId]);

  if (revealed) return null;
  return (
    <button
      type="button"
      onClick={onReveal}
      className={`ml-auto cursor-pointer rounded-sm border border-slate/30 px-3 py-1 text-xs transition-colors hover:border-slate hover:text-ink ${
        ripe ? 'text-ink' : 'text-slate-dim'
      }`}
    >
      Show me what&rsquo;s wrong
    </button>
  );
}
