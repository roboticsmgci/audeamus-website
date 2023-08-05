type MatchAlliance = {
  score: number,
  team_keys: string[],
  surrogate_team_keys?: string[],
  dq_team_keys?: string[],
}

export type MatchSimple = {
  key: string,
  comp_level: 'qm' | 'ef' | 'qf' | 'sf' | 'f',
  set_number: number,
  match_number: number,
  alliances?: {
    red: MatchAlliance,
    blue: MatchAlliance,
  },
  winning_alliance?: 'red' | 'blue' | '',
  event_key: string,
  time?: number,
  predicted_time?: number,
  actual_time?: number,
}
