# Decision Architecture Simulator

A static, interactive teaching tool. Pick a **request** and an **architecture**,
and see three things: the artifact that came back, what it cost, and — only if
you go looking — where it went wrong.

The thesis: these architectures are not a quality ladder; they are a
match-to-shape problem. A small bounded request run through an orchestrated
system produces a worse result at twenty times the cost. A large coherent
request run through a single call produces a confident artifact that isn't the
thing you asked for. Both failures are silent. The diagonal is the lesson, and
the tool never states it — you find it.

## Running it

```bash
npm install
npm run dev      # dev server on :5173
npm run build    # static build in dist/
```

No backend, no model calls. All 18 cells (3 requests × 6 levels) are authored,
curated, frozen content — variance between runs would undercut a teaching tool.

## Structure

- `src/types.ts` — the data model. Cells are pure typed data; adding a role
  never touches JSX.
- `src/content/novelist/{request}/l{level}.ts` — one file per cell.
- `src/content/AUTHORING.md` — the content bible: shared universe, planted
  continuity errors, voice rules, telemetry tables.
- `src/components/` — the rail (token swarm), artifact panel, four beats,
  ledger.

Levels are numbered 1, 3, 4, 5, 6, 7. There is no level 2 — retrieval is a
dial, not a rung. The gap is preserved deliberately and footnoted in the UI.

## Dev helper

In the browser console:

```js
openDefect('novel:6')   // jump to a cell with its defect revealed
```

Cell ids are `{requestId}:{level}` — e.g. `names:7`, `audit:1`.
