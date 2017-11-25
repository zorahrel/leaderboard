export type shipColor = 'cyan' | 'orange' | 'green' | 'purple' | 'yellow' | 'red';

export type leagueDifficulty = 'advanced' | 'intermediate' | 'beginner' | 'novice';

export type Ship = {
  id: number,
  name: string,
  shipColor: shipColor,
  difficulty: leagueDifficulty,
  score: number,
  lastScore: number,
  modules: number,
  box: boolean,
  kills: number,
  immunity: number,
  avgRound: number
};

export type IState = {
  isFetching: boolean,
  items: Ship[] | undefined
};