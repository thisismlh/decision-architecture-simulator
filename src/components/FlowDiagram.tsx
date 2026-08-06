import type { Level, Telemetry } from '../types';
import { LEVEL_NAMES } from '../types';
import { formatTokens } from '../lib/format';

/**
 * Animated call graph for the selected level. One choreographed journey per
 * cycle: a single mark (the work) leaves you, moves through the machinery,
 * and comes home — dwelling under a box means that stage is thinking.
 * Token figures are approximations derived from the cell's real telemetry.
 */

const CAPTIONS: Record<Level, string> = {
  1: 'one call — there is no next step to decide',
  3: 'the graph is drawn before the run; the model fills boxes, never draws arrows',
  4: 'one pass out through tools; nothing comes back to check',
  5: 'each reply decides the next step; the loop runs until the model is satisfied',
  6: 'branches share a brief, then run blind to each other until the merge',
  7: 'a model draws the arrows for the other models',
};

const INK = 'var(--color-slate)';
const DIM = 'var(--color-slate-dim)';

/* Per-level crop: each diagram gets only the vertical room its shape needs,
   so a single call reads as a short strip and orchestration as a tall one. */
const VIEWBOX: Record<Level, string> = {
  1: '0 44 640 62',
  3: '0 42 640 90',
  4: '0 42 640 88',
  5: '0 38 640 100',
  6: '0 0 640 154',
  7: '0 0 640 146',
};

function Node({
  x,
  y,
  w,
  label,
  dashed = false,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  dashed?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={26}
        rx={2}
        fill="var(--color-bone)"
        stroke={dashed ? DIM : INK}
        strokeWidth={1}
        strokeDasharray={dashed ? '3 3' : undefined}
      />
      <text
        x={x + w / 2}
        y={y + 17}
        textAnchor="middle"
        fontSize={10.5}
        fontFamily="var(--font-mono)"
        fill={dashed ? DIM : INK}
      >
        {label}
      </text>
    </g>
  );
}

function Wire({ d, dashed = false, arrow = true }: { d: string; dashed?: boolean; arrow?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={DIM}
      strokeWidth={1}
      strokeDasharray={dashed ? '3 3' : undefined}
      markerEnd={arrow ? 'url(#flow-arr)' : undefined}
    />
  );
}

/**
 * A mark on a journey. keyPoints/keyTimes choreograph dwells: matching
 * consecutive keyPoints hold the mark in place (tucked under a node) while
 * that stage "works". All marks in a diagram share one cycle duration.
 */
function Mark({
  path,
  dur,
  keyPoints,
  keyTimes,
}: {
  path: string;
  dur: number;
  keyPoints?: string;
  keyTimes?: string;
}) {
  return (
    <circle className="flow-pulse" r={2.6} fill={INK}>
      <animateMotion
        dur={`${dur}s`}
        repeatCount="indefinite"
        path={path}
        calcMode={keyPoints ? 'linear' : undefined}
        keyPoints={keyPoints}
        keyTimes={keyTimes}
      />
    </circle>
  );
}

function TokenLabel({
  x,
  y,
  text,
  anchor = 'middle',
}: {
  x: number;
  y: number;
  text: string;
  anchor?: 'middle' | 'start' | 'end';
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={9.5} fontFamily="var(--font-mono)" fill={DIM}>
      {text}
    </text>
  );
}

interface DiagramProps {
  t: Telemetry;
}

const total = (t: Telemetry) => t.tokensIn + t.tokensOut;
const perCall = (t: Telemetry) => formatTokens(Math.round(total(t) / t.modelCalls));

/* L1 — out, think, back, rest. */
function DiagramL1({ t }: DiagramProps) {
  const journey = 'M 60 68 H 566 L 566 82 H 64';
  return (
    <>
      <Wire d="M 92 68 H 532" />
      <Wire d="M 536 82 H 96" />
      <Mark
        path={journey}
        dur={4}
        keyPoints="0;0.49;0.49;1;1"
        keyTimes="0;0.3;0.55;0.85;1"
      />
      <TokenLabel x={314} y={59} text={`≈${formatTokens(t.tokensIn)} tok →`} />
      <TokenLabel x={314} y={97} text={`← ≈${formatTokens(t.tokensOut)} tok`} />
      <Node x={30} y={62} w={58} label="you" />
      <Node x={536} y={62} w={72} label="model" />
    </>
  );
}

/* L3 — one mark through the whole chain, then home. */
function DiagramL3({ t }: DiagramProps) {
  const xs = [116, 240, 364, 488];
  const journey = 'M 60 75 H 520 C 546 75, 546 90, 520 98 C 520 124, 92 124, 64 86';
  return (
    <>
      <Wire d="M 90 75 H 112" />
      <Wire d="M 182 75 H 236" />
      <Wire d="M 306 75 H 360" />
      <Wire d="M 430 75 H 484" />
      <Wire d="M 524 90 C 524 122, 88 122, 60 90" dashed />
      <Mark path={journey} dur={5.5} keyPoints="0;1;1" keyTimes="0;0.9;1" />
      <Node x={30} y={62} w={58} label="you" />
      {xs.map((x, i) => (
        <Node key={x} x={x} y={62} w={64} label={`model ${i + 1}`} />
      ))}
      {xs.map((x) => (
        <TokenLabel key={x} x={x + 32} y={54} text={`≈${perCall(t)}`} />
      ))}
    </>
  );
}

/* L4 — the work ends up in the files; only a receipt comes back. */
function DiagramL4({ t }: DiagramProps) {
  return (
    <>
      <Wire d="M 92 68 H 226" />
      <Wire d="M 306 68 H 460" />
      <Wire d="M 266 92 C 230 122, 90 118, 62 90" dashed />
      <Mark
        path="M 60 68 H 266 H 500"
        dur={4.5}
        keyPoints="0;0.47;0.47;1;1"
        keyTimes="0;0.22;0.45;0.68;1"
      />
      <Mark
        path="M 266 84 C 232 124, 90 118, 66 86"
        dur={4.5}
        keyPoints="0;0;1;1"
        keyTimes="0;0.72;0.92;1"
      />
      <TokenLabel x={266} y={54} text={`≈${perCall(t)} tok/call`} />
      <TokenLabel x={509} y={54} text={`≈${formatTokens(t.tokensOut)} tok written`} />
      <Node x={30} y={62} w={58} label="you" />
      <Node x={230} y={62} w={72} label="model" />
      <Node x={464} y={62} w={90} label="files/" dashed />
    </>
  );
}

/* L5 — one mark: out, around the loop twice, home. */
function DiagramL5({ t }: DiagramProps) {
  const loopOnce = 'L 300 66 H 466 L 466 84 H 304 ';
  const journey =
    'M 60 70 H 300 ' + loopOnce + loopOnce + 'L 304 86 C 240 124, 90 120, 66 86';
  return (
    <>
      <Wire d="M 92 70 H 246" />
      <Wire d="M 326 66 H 430" />
      <Wire d="M 430 84 H 326" />
      <Wire d="M 276 92 C 240 124, 90 120, 66 88" dashed />
      <Mark path={journey} dur={7} keyPoints="0;1;1" keyTimes="0;0.93;1" />
      <Node x={30} y={62} w={58} label="you" />
      <Node x={250} y={62} w={72} label="model" />
      <Node x={434} y={62} w={80} label="draft" dashed />
      <text x={394} y={50} textAnchor="middle" fontSize={10} fontFamily="var(--font-mono)" fill={DIM}>
        write · reread · revise
      </text>
      <TokenLabel x={394} y={106} text={`×${t.modelCalls} passes · ≈${perCall(t)} tok/pass`} />
    </>
  );
}

/* L6 — the brief fans out, branches run blind, everything meets at merge. */
function DiagramL6({ t }: DiagramProps) {
  const rows = [8, 42, 76, 110];
  const branchTok = formatTokens(Math.round(total(t) * 0.22));
  return (
    <>
      {rows.map((y, i) => {
        const mid = y + 13;
        const lane = `M 60 75 C 160 75, 160 ${mid}, 226 ${mid} H 322 C 396 ${mid}, 396 75, 480 75`;
        return (
          <g key={y}>
            <Wire d={`M 90 75 C 160 75, 160 ${mid}, 222 ${mid}`} />
            <Wire d={`M 322 ${mid} C 396 ${mid}, 396 75, 460 75`} />
            <Mark
              path={lane}
              dur={4.5}
              keyPoints="0;0;1;1"
              keyTimes={`0;${0.04 + i * 0.02};${0.5 + i * 0.02};1`}
            />
          </g>
        );
      })}
      <Wire d="M 496 92 C 470 130, 92 128, 62 92" dashed />
      <Mark
        path="M 490 84 C 470 130, 92 128, 66 86"
        dur={4.5}
        keyPoints="0;0;1;1"
        keyTimes="0;0.72;0.92;1"
      />
      <Node x={32} y={62} w={58} label="you" />
      {rows.map((y, i) => (
        <Node key={y} x={228} y={y} w={92} label={`model ${String.fromCharCode(97 + i)}`} />
      ))}
      <Node x={466} y={62} w={64} label="merge" />
      <TokenLabel x={498} y={54} text={`≈${formatTokens(Math.round(total(t) * 0.12))} tok`} />
      <TokenLabel x={274} y={149} text={`4 branches · ≈${branchTok} tok each`} />
    </>
  );
}

/* L7 — the orchestrator holds every conversation; workers never meet. */
function DiagramL7({ t }: DiagramProps) {
  const rows = [10, 62, 114];
  const workerTok = formatTokens(Math.round(total(t) * 0.28));
  return (
    <>
      <Wire d="M 92 70 H 216" />
      {rows.map((y, i) => {
        const leave = 66 + i * 4;
        const arrive = 78 + i * 4;
        const outWire = `M 322 ${leave} C 392 ${leave}, 392 ${y + 9}, 448 ${y + 9}`;
        const backWire = `M 452 ${y + 17} C 392 ${y + 17}, 392 ${arrive}, 326 ${arrive}`;
        const outLane = `M 300 ${leave} C 392 ${leave}, 392 ${y + 9}, 470 ${y + 9}`;
        const backLane = `M 470 ${y + 17} C 392 ${y + 17}, 392 ${arrive}, 300 ${arrive}`;
        const s = 0.16 + i * 0.2;
        return (
          <g key={y}>
            <Wire d={outWire} />
            <Wire d={backWire} />
            <Mark
              path={outLane}
              dur={7}
              keyPoints="0;0;1;1"
              keyTimes={`0;${s.toFixed(2)};${(s + 0.07).toFixed(2)};1`}
            />
            <Mark
              path={backLane}
              dur={7}
              keyPoints="0;0;1;1"
              keyTimes={`0;${(s + 0.1).toFixed(2)};${(s + 0.17).toFixed(2)};1`}
            />
          </g>
        );
      })}
      <Wire d="M 258 94 C 220 126, 92 122, 62 92" dashed />
      <Mark path="M 60 70 H 270" dur={7} keyPoints="0;1;1" keyTimes="0;0.1;1" />
      <Mark
        path="M 262 86 C 220 126, 92 122, 66 86"
        dur={7}
        keyPoints="0;0;1;1"
        keyTimes="0;0.84;0.95;1"
      />
      <Node x={30} y={62} w={58} label="you" />
      <Node x={220} y={62} w={102} label="orchestrator" />
      {rows.map((y, i) => (
        <Node key={y} x={452} y={y} w={92} label={`model ${String.fromCharCode(97 + i)}`} />
      ))}
      {rows.map((y) => (
        <TokenLabel key={y} x={550} y={y + 17} text={`≈${workerTok}`} anchor="start" />
      ))}
      <TokenLabel x={271} y={54} text={`≈${formatTokens(Math.round(total(t) * 0.15))} tok`} />
    </>
  );
}

const DIAGRAMS: Record<Level, (p: DiagramProps) => React.ReactNode> = {
  1: DiagramL1,
  3: DiagramL3,
  4: DiagramL4,
  5: DiagramL5,
  6: DiagramL6,
  7: DiagramL7,
};

export default function FlowDiagram({ level, telemetry }: { level: Level; telemetry: Telemetry }) {
  const Diagram = DIAGRAMS[level];
  return (
    <figure className="m-0 border border-wash bg-wash/40 px-4 pb-3 pt-3">
      <figcaption className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-xs text-slate-dim">
          how it ran · L{level} {LEVEL_NAMES[level]}
        </span>
        <span className="font-mono text-xs text-slate-dim">
          {telemetry.modelCalls} {telemetry.modelCalls === 1 ? 'call' : 'calls'} · ≈
          {formatTokens(total(telemetry))} tok
        </span>
      </figcaption>
      <svg
        viewBox={VIEWBOX[level]}
        role="img"
        aria-label={`Call structure for level ${level}: ${CAPTIONS[level]}`}
        className="mt-1 block w-full max-w-[680px]"
      >
        <defs>
          <marker
            id="flow-arr"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 8 4 L 0 8 z" fill={DIM} />
          </marker>
        </defs>
        <Diagram t={telemetry} />
      </svg>
      <p className="mt-1 font-mono text-xs text-slate-dim">{CAPTIONS[level]}</p>
    </figure>
  );
}
