# Content authoring bible — Decision Architecture Simulator

This governs all cell content files. Read `src/types.ts` and the exemplar
`src/content/novelist/names/l1.ts` before writing anything.

## The product in one line
A teaching tool: pick a request and an architecture level, see the artifact that
came back, what it cost, and — only if you go looking — where it went wrong.

## Non-negotiables (from the PRD)
- Nothing is cartoonishly bad. Every artifact must be genuinely competent prose.
  The failure is structural, never incompetence.
- Defects are findable but not obvious. A reader should need to open a file,
  scroll, or compare two blocks to spot them. If it jumps out in two seconds it
  is too loud.
- Costs are plausible. A practitioner should not catch a fake number.
- Level 3 produces text only — chained model calls, nothing written to disk.
- Level 4 acts once (real files, real folder) and checks nothing. Its defect is
  always something a second look would have caught.
- Defect is ABSENT when fit === 'best'. Present in every other cell.
- Four-beat lines (`whatTheUserDid` etc.) are each ONE sentence, plain voice,
  no jargon, no drama. They describe; the reader concludes.
- Never assert the lesson in copy. No "notice how", no "this shows that".

## Shared universe
One novelist. Their book: **Under the Seam** — a literary novel set in
Cwm-y-glo, a fictional 1890s Welsh mining village. 40 chapters, ~118,000 words,
written from a 3-page outline. All three requests come from this same author and
book, so names recur across requests.

Core cast (reuse these; invent minor names freely in the same register):
- Gwilym Prosser — hewer, 44, chapel deacon; wife Angharad (grey eyes, ch 2)
- Dai Llewellyn — haulier, 19; his pit pony is **Seren**; mother Bronwen
- Emrys Bevan — fireman, 51; daughter Tegwen, 16, in service at the manager's house
- Cledwyn Vaughan — banksman; lost two fingers of his **left** hand in '84
- Mari Probert — schoolmistress, 29, arrived autumn 1888 (story is set 1891)
- Eleazar Watkins — minister, dies of pleurisy in ch 9
- Hywel Rhys — landlord of the **Colliers Arms**
- Isaac Meredith — checkweighman; Nerys Vaughan — midwife
- The chapel is **Bethania**. The Prossers' house is the end of the terrace.
- Plot spine: gas is found in the east level; the fireman's warnings are
  ignored; a roof fall kills two men; a six-week strike follows; the village
  splits between chapel and union; Tegwen leaves service; the pit reopens under
  a new manager and the village absorbs its dead.

## Ground truth for the continuity audit (request `audit`)
The manuscript contains exactly **11 planted continuity errors**. Every audit
cell's report must be consistent with this list — findings are subsets of it
(plus fabrications where specified). Cite chapters as given.

1. Angharad's eyes grey (ch 2) → brown (ch 31)
2. Dai's pony Seren (ch 4) → called Bel (ch 26)
3. Cledwyn's missing fingers: left hand (ch 5) → right hand bandaged (ch 18)
4. Chapel named Bethania (ch 3) → Bethesda (ch 22)
5. Mari Probert arrived "three years ago" (ch 6) vs "the autumn of '85" (ch 29)
6. Eleazar Watkins dies ch 9 → delivers a eulogy ch 24
7. The strike is "six weeks" (ch 15) → "the ninth week of the strike" (ch 19)
8. Tegwen is sixteen (ch 1) → "barely fourteen" (ch 20)
9. Prossers' house: end of terrace (ch 2) → "neighbours on both sides" (ch 33)
10. The Colliers Arms (ch 8) → "the Miners Arms" (ch 35)
11. Baby Gwen born in March (ch 28) → christened "that January, weeks after her
    birth" (ch 36)

## File contract
One file per cell at `src/content/novelist/{requestId}/l{level}.ts`:

```ts
import type { Cell } from '../../../types';

const cell: Cell = { ... };

export default cell;
```

- Must typecheck against `src/types.ts` exactly. No extra fields.
- Block ids: unique within the cell, prefixed per cell (given per cell below).
  Every block needs an id, including blocks nested inside `file` blocks.
- `defect.locations` lists the ids of the blocks that get highlighted when the
  reader clicks "Show me what's wrong". Point at the blocks where the defect
  is *visible*, including blocks nested in files.
- `file` blocks render as expandable files (collapsed by default). Put defect
  evidence inside them when the cell should require opening something.
- `excerpt` blocks are typeset as manuscript prose (serif). Use them for
  passages "from the book". `para` is the model talking. `note` is
  system/log/mono text (workflow stage logs, agent traces, tool output).
  `entry` is a term + description line. `heading` is a section head.
- Write real prose in excerpts — 19th-century Welsh valley register, restrained,
  concrete. 60–160 words per excerpt. It has to be good enough that a reader
  believes a model wrote a competent draft.
- Artifact `label` examples: "chat response", "workflow output",
  "manuscript/ (40 files)", "continuity report".
- Telemetry values are FIXED per cell (tables below). Do not change them.

## Voice for the four beats
- whatTheUserDid: what the human literally did ("Typed one sentence…",
  "Uploaded 40 chapters and asked for…").
- whatTheSystemDid: the machinery — "the office". Plumbing, routing, spawning.
- whatTheModelDid: the cognition — "the writer". What was actually attended to.
- whatCameBack: the deliverable in hand, concretely, with its surface promise.
