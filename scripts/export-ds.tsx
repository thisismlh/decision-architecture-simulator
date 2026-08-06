/**
 * Exports the simulator's design language as a bundle of self-contained
 * preview cards for a claude.ai/design design-system project.
 * Run: npx tsx scripts/export-ds.tsx <outDir>
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import FlowDiagram from '../src/components/FlowDiagram';
import { LEVELS, LEVEL_NAMES, type Level } from '../src/types';
import novel1 from '../src/content/novelist/novel/l1';
import novel3 from '../src/content/novelist/novel/l3';
import novel4 from '../src/content/novelist/novel/l4';
import novel5 from '../src/content/novelist/novel/l5';
import novel6 from '../src/content/novelist/novel/l6';
import novel7 from '../src/content/novelist/novel/l7';

const outDir = process.argv[2];
if (!outDir) throw new Error('usage: tsx scripts/export-ds.tsx <outDir>');

const cells = { 1: novel1, 3: novel3, 4: novel4, 5: novel5, 6: novel6, 7: novel7 };

const SHELL_CSS = `
:root {
  --color-bone: #f2f3f0; --color-ink: #111418; --color-slate: #2a3b4d;
  --color-slate-dim: #7a8087; --color-pine: #1e6b5a; --color-signal: #b4243d;
  --color-wash: #e7e9e4;
  --font-serif: 'Newsreader', georgia, serif;
  --font-sans: 'Inter Tight', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--color-bone); color: var(--color-ink);
  font-family: var(--font-sans); font-size: 15px; line-height: 1.55;
  -webkit-font-smoothing: antialiased; padding: 24px; }
.mono { font-family: var(--font-mono); font-size: 13px; color: var(--color-slate-dim); }
`;

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=Inter+Tight:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap" rel="stylesheet">`;

function page(opts: {
  path: string;
  group: string;
  name: string;
  title: string;
  extraCss?: string;
  body: string;
  script?: string;
}) {
  const html = `<!-- @dsCard group="${opts.group}" name="${opts.name}" -->
<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${opts.title}</title>${FONTS}<style>${SHELL_CSS}${opts.extraCss ?? ''}</style></head>
<body>${opts.body}${opts.script ? `<script>${opts.script}</script>` : ''}</body></html>`;
  const full = join(outDir, opts.path);
  mkdirSync(join(full, '..'), { recursive: true });
  writeFileSync(full, html);
  console.log('wrote', opts.path);
}

/* ---- motion: the six call graphs, rendered from the real component ---- */
for (const level of LEVELS) {
  const t = cells[level].telemetry;
  const figure = renderToStaticMarkup(createElement(FlowDiagram, { level, telemetry: t }));
  page({
    path: `motion/flow-l${level}.html`,
    group: 'Motion · call graphs',
    name: `L${level} ${LEVEL_NAMES[level]}`,
    title: `Call graph — L${level} ${LEVEL_NAMES[level]}`,
    extraCss: `
figure { margin: 0; border: 1px solid var(--color-wash); background: rgba(231,233,228,.4); padding: 12px 16px; }
figcaption { display: flex; justify-content: space-between; gap: 16px; font-family: var(--font-mono); font-size: 13px; color: var(--color-slate-dim); }
figure svg { display: block; width: 100%; max-width: 680px; margin-top: 4px; }
figure p { margin: 4px 0 0; font-family: var(--font-mono); font-size: 13px; color: var(--color-slate-dim); }
@media (prefers-reduced-motion: reduce) { .flow-pulse { display: none; } }`,
    body: figure,
  });
}

/* ---- foundations ---- */
const swatches: Array<[string, string, string]> = [
  ['bone', '#F2F3F0', 'ground'],
  ['ink', '#111418', 'primary text'],
  ['slate', '#2A3B4D', 'structure · rail · headers'],
  ['slate-dim', '#7A8087', 'secondary · inactive marks'],
  ['pine', '#1E6B5A', 'fit: best — sparing, never decorative'],
  ['signal', '#B4243D', 'reserved: top cost tier + defect markers only'],
  ['wash', '#E7E9E4', 'artifact page surface · hairlines'],
];
page({
  path: 'foundations/palette.html',
  group: 'Colors',
  name: 'Palette',
  title: 'Palette — cool bone, ink-blue structure, one reserved signal',
  extraCss: `
.row { display: flex; align-items: center; gap: 14px; padding: 8px 0; border-bottom: 1px solid var(--color-wash); }
.chip { width: 56px; height: 32px; border: 1px solid rgba(17,20,24,.08); flex: none; }
.name { font-family: var(--font-mono); font-size: 13px; width: 90px; }
.hex { font-family: var(--font-mono); font-size: 13px; color: var(--color-slate-dim); width: 80px; }
.use { font-size: 13px; color: var(--color-slate-dim); }`,
  body: swatches
    .map(
      ([n, hex, use]) =>
        `<div class="row"><span class="chip" style="background:${hex}"></span><span class="name">${n}</span><span class="hex">${hex}</span><span class="use">${use}</span></div>`,
    )
    .join(''),
});

page({
  path: 'foundations/type.html',
  group: 'Type',
  name: 'Three type systems',
  title: 'Type — serif means the model made it, mono means we measured it',
  extraCss: `
.role { border-bottom: 1px solid var(--color-wash); padding: 14px 0; }
.tag { font-family: var(--font-mono); font-size: 13px; color: var(--color-slate-dim); display: block; margin-bottom: 6px; }
.serif { font-family: var(--font-serif); font-size: 18px; font-optical-sizing: auto; }
.sans { font-family: var(--font-sans); font-size: 15px; }
.monoBig { font-family: var(--font-mono); font-size: 15px; }`,
  body: `
<div class="role"><span class="tag">artifact · Newsreader 400/500 · anything the model "wrote"</span>
<p class="serif" style="margin:0">Gwilym Prosser left the house before the lamps in the windows had any work to do, the dark still whole on the hill.</p></div>
<div class="role"><span class="tag">interface · Inter Tight 400/500 · labels, beats, controls</span>
<p class="sans" style="margin:0">Handed over the manuscript folder and asked for every continuity error.</p></div>
<div class="role"><span class="tag">telemetry · IBM Plex Mono 400 · every number, no exceptions</span>
<p class="monoBig" style="margin:0">61 calls · 1.74M tok · 55m · $10.45 · +6 hrs yours</p></div>`,
});

/* ---- motion: token swarm ---- */
page({
  path: 'motion/token-swarm.html',
  group: 'Motion',
  name: 'Token swarm',
  title: 'Token swarm — one mark per ~1,400 tokens, colored only by cost tier',
  extraCss: `
.field { display: flex; flex-wrap: wrap-reverse; align-content: flex-start; gap: 1px; margin: 6px 0 18px; max-width: 420px; }
.mark { width: 2px; height: 2px; flex: none; opacity: 0; animation: mark-in 100ms linear forwards; }
@keyframes mark-in { to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) { .mark { opacity: 1; animation: none; } }`,
  body: `
<span class="mono">L1 single call · 9,000 tok</span><div class="field" data-n="6" data-c="var(--color-slate-dim)"></div>
<span class="mono">L5 agent loop · 957k tok</span><div class="field" data-n="684" data-c="var(--color-slate)"></div>
<span class="mono">L7 orchestration · 1.74M tok</span><div class="field" data-n="1240" data-c="var(--color-signal)"></div>
<span class="mono">4ms stagger, capped at 600ms — a wave, not per-mark easing. Replays every 5s.</span>`,
  script: `
function fill(){document.querySelectorAll('.field').forEach(f=>{f.innerHTML='';const n=+f.dataset.n,step=Math.min(4,600/n);
for(let i=0;i<n;i++){const m=document.createElement('span');m.className='mark';m.style.background=f.dataset.c;m.style.animationDelay=(i*step)+'ms';f.appendChild(m);}});}
fill();setInterval(fill,5000);`,
});

/* ---- motion: typing prompt ---- */
page({
  path: 'motion/typing-prompt.html',
  group: 'Motion',
  name: 'Prompt typing',
  title: 'Prompt line — the request types itself, then the response arrives',
  extraCss: `
.line { border: 1px solid var(--color-wash); background: rgba(255,255,255,.5); padding: 14px 20px; display: flex; gap: 12px; align-items: baseline; }
.text { font-family: var(--font-serif); font-size: 18px; min-height: 28px; }
.caret { display: inline-block; width: 7px; height: 1em; margin-left: 1px; vertical-align: text-bottom; background: var(--color-ink); animation: blink 900ms step-end infinite; }
@keyframes blink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
.note { margin-top: 14px; }`,
  body: `
<div class="line"><span class="mono">you ›</span><span class="text"><span id="t"></span><span class="caret" id="c"></span></span></div>
<p class="mono note">16ms per character. Retypes only on request switch — level switches keep the prompt and just re-deliver. Reduced motion: instant.</p>`,
  script: `
const msg='Draft Under the Seam from my three-page outline.';const t=document.getElementById('t');const c=document.getElementById('c');
function run(){t.textContent='';c.style.display='inline-block';let i=0;const iv=setInterval(()=>{t.textContent=msg.slice(0,++i);
if(i>=msg.length){clearInterval(iv);setTimeout(()=>c.style.display='none',900);setTimeout(run,3200);}},16);}
if(matchMedia('(prefers-reduced-motion: reduce)').matches){t.textContent=msg;c.style.display='none';}else run();`,
});

/* ---- components ---- */
page({
  path: 'components/ledger.html',
  group: 'Components',
  name: 'Ledger',
  title: 'Ledger — the instrument readout',
  extraCss: `
.ledger { border-top: 1px solid var(--color-wash); background: var(--color-bone); padding: 12px 0; display: flex; gap: 16px; align-items: baseline; font-family: var(--font-mono); font-size: 13px; }
.ledger .k { color: var(--color-slate-dim); } .ledger b { font-weight: 500; } .dot { color: var(--color-slate-dim); }`,
  body: `
<div class="ledger"><span class="k">ledger</span><span>61 calls</span><span class="dot">·</span><span>1.74M tok</span><span class="dot">·</span><span>55m</span><span class="dot">·</span><span>$10.45</span><span class="dot">·</span><b>+6 hrs yours</b></div>
<div class="ledger"><span class="k">ledger</span><span>1 call</span><span class="dot">·</span><span>850 tok</span><span class="dot">·</span><span>6s</span><span class="dot">·</span><span>$0.01</span><span class="dot">·</span><b>+2 min yours</b></div>
<p class="mono" style="margin-top:12px">humanMinutesAfter is the hidden cost: the $0.13 novel costs +30 hours of yours.</p>`,
});

page({
  path: 'components/four-beats.html',
  group: 'Components',
  name: 'Four beats',
  title: 'Four beats — fixed strip, readable down a column',
  extraCss: `
dl { margin: 0; border-top: 1px solid var(--color-wash); }
.beat { display: grid; grid-template-columns: 92px 1fr; gap: 16px; align-items: baseline; border-bottom: 1px solid var(--color-wash); padding: 10px 0; }
dt { font-family: var(--font-mono); font-size: 13px; color: var(--color-slate-dim); } dd { margin: 0; font-size: 15px; }`,
  body: `<dl>
<div class="beat"><dt>you asked</dt><dd>Pasted the three-page outline into the chat and asked for the whole novel.</dd></div>
<div class="beat"><dt>system did</dt><dd>Sent the outline to the model in one request and streamed back one response.</dd></div>
<div class="beat"><dt>model did</dt><dd>Held the whole arc in mind at once and rendered it at the only length one response allows.</dd></div>
<div class="beat"><dt>you got</dt><dd>About 6,000 well-written words in the chat, covering all forty chapters.</dd></div>
</dl>`,
});

page({
  path: 'components/defect-reveal.html',
  group: 'Components',
  name: 'Defect reveal',
  title: 'Defect reveal — signal appears only here and on the top cost tier',
  extraCss: `
.pagebg { background: var(--color-wash); padding: 28px; }
blockquote { margin: 0; border-left: 1px solid rgba(17,20,24,.15); padding: 2px 0 2px 20px; font-family: var(--font-serif); font-size: 18px; }
.hit { box-shadow: inset 3px 0 0 0 var(--color-signal); background: color-mix(in srgb, var(--color-signal) 6%, transparent); }
.strip { margin-top: 12px; border-left: 2px solid var(--color-signal); background: rgba(255,255,255,.5); padding: 10px 16px; }
.strip .cat { font-family: var(--font-mono); font-size: 13px; color: var(--color-signal); } .strip p { margin: 4px 0 0; font-size: 15px; }`,
  body: `
<div class="pagebg"><blockquote class="hit">The vestry met over the strike fund with the candles down to thumbs. Emrys Bevan spoke first, for caution: a fund was a rope, he said, and a rope was for lowering men gently…</blockquote></div>
<div class="strip"><span class="cat">defect · drift</span><p>Two writers worked from two revisions of the bible; a man dead in chapter 12 argues in chapter 23, and no one was positioned to notice.</p></div>`,
});

/* ---- specs: motion brief ---- */
page({
  path: 'specs/motion-brief.html',
  group: 'Specs',
  name: 'Motion brief',
  title: 'Motion brief — rules the animations must obey',
  extraCss: `
h2 { font-family: var(--font-sans); font-size: 15px; font-weight: 500; margin: 22px 0 6px; }
p, li { font-size: 14px; color: var(--color-ink); } ul { padding-left: 18px; margin: 6px 0; }
.rule { font-family: var(--font-mono); font-size: 13px; color: var(--color-slate-dim); }`,
  body: `
<p class="rule">Decision Architecture Simulator — motion language. Everything animated must argue the thesis: cost is not proportional to value, and failures are silent.</p>
<h2>1 · One journey per cycle (call graphs)</h2>
<ul>
<li>A single mark is "the work". It leaves <em>you</em>, dwells hidden under a node while that stage thinks, and returns on the dashed wire. Dwell = computation; travel = handoff.</li>
<li>Levels differ only in who draws the arrows: L1 has none to draw, L3's are drawn before the run, L5's are drawn by each reply, L6 splits the mark, L7 delegates the drawing.</li>
<li>L4's mark stays in files/ — only a receipt returns. Never animate a return from files; the whole point is nothing re-read them.</li>
<li>Marks are 2.6px circles in slate. Wires 1px slate-dim; returns dashed. No easing curves — linear keyPoints choreography with holds.</li>
</ul>
<h2>2 · The swarm wave</h2>
<ul>
<li>One mark ≈ N tokens, scale set per request so the densest level fills the rail. 4ms stagger, 600ms cap, bottom-up fill.</li>
<li>Color encodes cost tier only. Signal red = top tier. Never selection, never quality.</li>
</ul>
<h2>3 · Chat rhythm</h2>
<ul>
<li>Prompt types at 16ms/char with a block caret; response blocks rise 6px over 260ms with 70ms stagger.</li>
<li>Level switches inside a request skip the retype — the reader is comparing machinery, not re-asking.</li>
</ul>
<h2>4 · Restraint</h2>
<ul>
<li>prefers-reduced-motion kills every animation, instantly complete, nothing lost but the choreography.</li>
<li>No parallax, no springs, no bounce. This is a lab bench with a novel on it; the only drama allowed is the data's.</li>
</ul>`,
});

console.log('done');
