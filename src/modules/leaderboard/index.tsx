import { handleActions, Action } from 'redux-actions';
import { IState, Ship } from './model';
import { IS_FETCHING_LEADERBOARD, RECEIVE_LEADERBOARD } from './actions';

const initialState: IState = { isFetching: false, items: [] };

export default handleActions<IState, Ship[]>({

  [IS_FETCHING_LEADERBOARD]: (state: IState): IState => {
    return {
      ...state,
      isFetching: true
    };
  },

  [RECEIVE_LEADERBOARD]: (state: IState, action: Action<Ship[]>): IState => {
    return {
      ...state,
      isFetching: false,
      items: action.payload
    };
  }

}, initialState);