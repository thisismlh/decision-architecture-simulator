import { useEffect, useReducer } from 'react';
import novelist from './content/novelist';
import { cellKey, type Level } from './types';
import RequestTabs from './components/RequestTabs';
import LevelRail from './components/LevelRail';
import ArtifactPanel from './components/ArtifactPanel';
import FourBeats from './components/FourBeats';
import Ledger from './components/Ledger';

interface State {
  requestId: string;
  level: Level;
  revealed: boolean;
}

type Action =
  | { type: 'select-request'; requestId: string }
  | { type: 'select-level'; level: Level }
  | { type: 'reveal' }
  | { type: 'open-cell'; requestId: string; level: Level; revealed: boolean };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'select-request':
      if (action.requestId === state.requestId) return state;
      return { requestId: action.requestId, level: state.level, revealed: false };
    case 'select-level':
      if (action.level === state.level) return state;
      return { ...state, level: action.level, revealed: false };
    case 'reveal':
      return { ...state, revealed: true };
    case 'open-cell':
      return { requestId: action.requestId, level: action.level, revealed: action.revealed };
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    requestId: 'names',
    level: 1,
    revealed: false,
  });

  const id = cellKey(state.requestId, state.level);
  const cell = novelist.cells[id];
  const requestCells = Object.fromEntries(
    Object.values(novelist.cells)
      .filter((c) => c.requestId === state.requestId)
      .map((c) => [c.level, c]),
  );

  // Dev helper: openDefect('audit:6') jumps to a cell with its defect revealed,
  // so content authors can check marker placement without clicking through.
  useEffect(() => {
    (window as unknown as Record<string, unknown>).openDefect = (cellId: string) => {
      const target = novelist.cells[cellId];
      if (!target) {
        console.warn(
          `openDefect: unknown cell "${cellId}". Known: ${Object.keys(novelist.cells).join(', ')}`,
        );
        return;
      }
      dispatch({
        type: 'open-cell',
        requestId: target.requestId,
        level: target.level,
        revealed: true,
      });
    };
  }, []);

  return (
    <div className="flex min-h-dvh flex-col">
      <div className="mx-auto w-full max-w-[1280px] flex-1 px-5 sm:px-8">
        <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-5 pt-8">
          <h1 className="text-lg font-medium leading-tight text-ink">
            Decision architecture simulator
          </h1>
          <p className="text-xs text-slate-dim">
            One novelist, three requests, six ways to run a model. Open what came back.
          </p>
        </header>

        <RequestTabs
          requests={novelist.requests}
          selected={state.requestId}
          onSelect={(requestId) => dispatch({ type: 'select-request', requestId })}
        />

        <main className="grid gap-x-12 gap-y-8 py-8 lg:grid-cols-[224px_minmax(0,1fr)]">
          <div>
            <div className="lg:sticky lg:top-6">
              <LevelRail
                requestId={state.requestId}
                cells={requestCells}
                selected={state.level}
                onSelect={(level) => dispatch({ type: 'select-level', level })}
              />
            </div>
          </div>

          <div className="min-w-0 pb-6">
            {cell ? (
              <>
                <ArtifactPanel
                  key={id}
                  cell={cell}
                  cellId={id}
                  revealed={state.revealed}
                  onReveal={() => dispatch({ type: 'reveal' })}
                />
                <FourBeats cell={cell} />
              </>
            ) : (
              <p className="text-sm text-slate-dim">No content for this cell yet.</p>
            )}
          </div>
        </main>
      </div>

      {cell && <Ledger telemetry={cell.telemetry} />}
    </div>
  );
}
