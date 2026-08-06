export type Level = 1 | 3 | 4 | 5 | 6 | 7;

export type Fit = 'best' | 'workable' | 'wasteful' | 'broken';

export type ArtifactBlock =
  | { id: string; kind: 'heading'; text: string }
  | { id: string; kind: 'para'; text: string }
  | { id: string; kind: 'entry'; term: string; text: string }
  | { id: string; kind: 'excerpt'; text: string }
  | { id: string; kind: 'note'; text: string }
  | { id: string; kind: 'file'; name: string; meta?: string; body: ArtifactBlock[] };

export interface Artifact {
  kind: 'chat' | 'files' | 'deployed' | 'report';
  label: string;
  body: ArtifactBlock[];
}

export interface Telemetry {
  modelCalls: number;
  tokensIn: number;
  tokensOut: number;
  wallClockSeconds: number;
  usdEstimate: number;
  humanMinutesAfter: number;
}

export type DefectCategory =
  | 'fabrication'
  | 'drift'
  | 'wrong-shape'
  | 'unrecoverable'
  | 'unreviewed';

export interface Defect {
  summary: string;
  locations: string[];
  category: DefectCategory;
}

export interface Cell {
  requestId: string;
  level: Level;
  fit: Fit;
  whatTheUserDid: string;
  whatTheSystemDid: string;
  whatTheModelDid: string;
  whatCameBack: string;
  artifact: Artifact;
  telemetry: Telemetry;
  defect?: Defect;
}

export interface RequestMeta {
  id: string;
  label: string;
  prompt: string;
}

export interface RoleContent {
  id: string;
  label: string;
  requests: RequestMeta[];
  cells: Record<string, Cell>; // key: `${requestId}:${level}`
}

export const LEVELS: Level[] = [1, 3, 4, 5, 6, 7];

export const LEVEL_NAMES: Record<Level, string> = {
  1: 'single call',
  3: 'fixed workflow',
  4: 'tool use',
  5: 'agent loop',
  6: 'parallel',
  7: 'orchestration',
};

export const cellKey = (requestId: string, level: Level) => `${requestId}:${level}`;
