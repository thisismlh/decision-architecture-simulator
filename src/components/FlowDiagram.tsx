import type { Level } from '../types';
import { LEVEL_NAMES } from '../types';

/**
 * Animated call graph for the selected level: who talks to whom, and who
 * decides what happens next. Pulses are model calls in flight. Structure only —
 * no cost, no quality; the swarm and the artifact carry those.
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

function Wire({ d, dashed = false }: { d: string; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={DIM}
      strokeWidth={1}
      strokeDasharray={dashed ? '3 3' : undefined}
      markerEnd="url(#flow-arr)"
    />
  );
}

function Pulse({ path, dur, begin = 0 }: { path: string; dur: number; begin?: number }) {
  return (
    <circle className="flow-pulse" r={2.4} fill={INK}>
      <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} />
    </circle>
  );
}

function DiagramL1() {
  return (
    <>
      <Wire d="M 92 68 H 532" />
      <Wire d="M 536 82 H 96" />
      <Pulse path="M 92 68 H 532" dur={1.8} />
      <Pulse path="M 536 82 H 96" dur={1.8} begin={0.9} />
      <Node x={30} y={62} w={58} label="you" />
      <Node x={536} y={62} w={72} label="model" />
    </>
  );
}

function DiagramL3() {
  const xs = [116, 240, 364, 488];
  const out = 'M 90 75 H 552';
  const back = 'M 524 90 C 524 122, 88 122, 60 90';
  return (
    <>
      <path d={out} fill="none" stroke={DIM} strokeWidth={1} />
      <Wire d={back} dashed />
      <Pulse path={out} dur={2.6} />
      <Pulse path={back} dur={1.2} begin={1.6} />
      <Node x={30} y={62} w={58} label="you" />
      {xs.map((x, i) => (
        <Node key={x} x={x} y={62} w={64} label={`model ${i + 1}`} />
      ))}
    </>
  );
}

function DiagramL4() {
  return (
    <>
      <Wire d="M 92 68 H 228" />
      <Wire d="M 306 68 H 460" />
      <Wire d="M 266 92 C 230 122, 90 118, 62 90" dashed />
      <Pulse path="M 92 68 H 300 H 460" dur={1.8} />
      <Pulse path="M 266 92 C 230 122, 90 118, 62 90" dur={1.1} begin={1.2} />
      <Node x={30} y={62} w={58} label="you" />
      <Node x={230} y={62} w={72} label="model" />
      <Node x={464} y={62} w={90} label="files/" dashed />
    </>
  );
}

function DiagramL5() {
  const loop =
    'M 326 62 H 470 C 486 62, 486 88, 470 88 H 330 C 314 88, 314 62, 326 62';
  return (
    <>
      <Wire d="M 92 70 H 246" />
      <path d={loop} fill="none" stroke={DIM} strokeWidth={1} markerEnd="url(#flow-arr)" />
      <Wire d="M 276 94 C 240 124, 90 120, 62 92" dashed />
      <Pulse path={loop} dur={1.7} />
      <Pulse path={loop} dur={1.7} begin={0.85} />
      <Pulse path="M 92 70 H 246" dur={1.0} />
      <Pulse path="M 276 94 C 240 124, 90 120, 62 92" dur={1.2} begin={1.1} />
      <Node x={30} y={62} w={58} label="you" />
      <Node x={250} y={62} w={72} label="model" />
      <Node x={434} y={62} w={80} label="draft" dashed />
      <text x={392} y={46} textAnchor="middle" fontSize={10} fontFamily="var(--font-mono)" fill={DIM}>
        write · reread · revise
      </text>
    </>
  );
}

function DiagramL6() {
  const rows = [10, 46, 82, 118];
  return (
    <>
      {rows.map((y, i) => {
        const lane = `M 90 75 C 160 75, 160 ${y + 13}, 226 ${y + 13} H 322 C 396 ${y + 13}, 396 75, 462 75`;
        return (
          <g key={y}>
            <path d={lane} fill="none" stroke={DIM} strokeWidth={1} />
            <Pulse path={lane} dur={2.2} begin={i * 0.06} />
          </g>
        );
      })}
      <Wire d="M 496 92 C 470 130, 92 128, 60 92" dashed />
      <Pulse path="M 496 92 C 470 130, 92 128, 60 92" dur={1.2} begin={1.5} />
      <Node x={32} y={62} w={58} label="you" />
      {rows.map((y, i) => (
        <Node key={y} x={228} y={y} w={92} label={`model ${String.fromCharCode(97 + i)}`} />
      ))}
      <Node x={466} y={62} w={64} label="merge" />
    </>
  );
}

function DiagramL7() {
  const rows = [10, 62, 114];
  return (
    <>
      <Wire d="M 92 70 H 216" />
      {rows.map((y, i) => {
        const out = `M 322 70 C 392 70, 392 ${y + 9}, 452 ${y + 9}`;
        const back = `M 452 ${y + 17} C 392 ${y + 17}, 392 82, 322 82`;
        return (
          <g key={y}>
            <Wire d={out} />
            <Wire d={back} />
            <Pulse path={out} dur={0.9} begin={i * 0.35} />
            <Pulse path={back} dur={0.9} begin={i * 0.35 + 1.1} />
          </g>
        );
      })}
      <Wire d="M 258 94 C 220 126, 92 122, 62 92" dashed />
      <Pulse path="M 92 70 H 216" dur={0.9} />
      <Pulse path="M 258 94 C 220 126, 92 122, 62 92" dur={1.2} begin={2.2} />
      <Node x={30} y={62} w={58} label="you" />
      <Node x={220} y={62} w={102} label="orchestrator" />
      {rows.map((y, i) => (
        <Node key={y} x={452} y={y} w={92} label={`model ${String.fromCharCode(97 + i)}`} />
      ))}
    </>
  );
}

const DIAGRAMS: Record<Level, () => React.ReactNode> = {
  1: DiagramL1,
  3: DiagramL3,
  4: DiagramL4,
  5: DiagramL5,
  6: DiagramL6,
  7: DiagramL7,
};

export default function FlowDiagram({ level }: { level: Level }) {
  const Diagram = DIAGRAMS[level];
  return (
    <figure className="m-0 border border-wash bg-wash/40 px-4 pb-3 pt-3">
      <figcaption className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-xs text-slate-dim">
          how it ran · L{level} {LEVEL_NAMES[level]}
        </span>
      </figcaption>
      <svg
        viewBox="0 0 640 150"
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
        <Diagram />
      </svg>
      <p className="mt-1 font-mono text-xs text-slate-dim">{CAPTIONS[level]}</p>
    </figure>
  );
}
