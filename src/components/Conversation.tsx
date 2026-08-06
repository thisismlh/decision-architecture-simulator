import { useEffect, useRef, useState } from 'react';
import type { Cell, RequestMeta } from '../types';
import FlowDiagram from './FlowDiagram';
import ArtifactPanel from './ArtifactPanel';
import FourBeats from './FourBeats';

type Phase = 'typing' | 'working' | 'delivered';

interface Props {
  request: RequestMeta;
  cell: Cell;
  cellId: string;
  revealed: boolean;
  onReveal: () => void;
}

const TYPE_MS = 16; // per character
const WORK_MS = 750; // pause between prompt and delivery
const WORK_MS_SAME_REQUEST = 550;

/**
 * The chat spine of a cell: the request types itself into the prompt line,
 * the call graph runs, then the artifact arrives. Switching levels within a
 * request skips the retype — same message, different machinery — so a column
 * stays fast to read.
 */
export default function Conversation({ request, cell, cellId, revealed, onReveal }: Props) {
  const [phase, setPhase] = useState<Phase>('typing');
  const [chars, setChars] = useState(0);
  const prevRequest = useRef<string | null>(null);
  const prompt = request.prompt;

  useEffect(() => {
    const isNewRequest = prevRequest.current !== request.id;
    prevRequest.current = request.id;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setChars(prompt.length);
      setPhase('delivered');
      return;
    }

    const timers: number[] = [];
    if (isNewRequest) {
      setPhase('typing');
      setChars(0);
      const iv = window.setInterval(() => {
        setChars((c) => {
          if (c >= prompt.length) {
            window.clearInterval(iv);
            setPhase('working');
            timers.push(window.setTimeout(() => setPhase('delivered'), WORK_MS));
            return c;
          }
          return c + 1;
        });
      }, TYPE_MS);
      timers.push(iv);
      return () => timers.forEach(window.clearInterval);
    }

    setChars(prompt.length);
    setPhase('working');
    timers.push(window.setTimeout(() => setPhase('delivered'), WORK_MS_SAME_REQUEST));
    return () => timers.forEach(window.clearTimeout);
  }, [cellId, request.id, prompt]);

  return (
    <div className="flex flex-col gap-5">
      <div className="border border-wash bg-white/50 px-5 py-3.5">
        <p className="m-0 flex items-baseline gap-3">
          <span className="font-mono text-xs text-slate-dim">you ›</span>
          <span className="font-serif text-base text-ink">
            {prompt.slice(0, chars)}
            {phase === 'typing' && <span className="caret" aria-hidden="true" />}
          </span>
        </p>
      </div>

      <FlowDiagram level={cell.level} />

      {phase === 'delivered' ? (
        <div className="block-in">
          <ArtifactPanel cell={cell} cellId={cellId} revealed={revealed} onReveal={onReveal} />
          <FourBeats cell={cell} />
        </div>
      ) : (
        <div
          className="flex min-h-[180px] items-center justify-center bg-wash"
          role="status"
          aria-label="Waiting for the response"
        >
          <span className="working-dots font-mono text-xs text-slate-dim">
            {phase === 'typing' ? ' ' : '· · ·'}
          </span>
        </div>
      )}
    </div>
  );
}
