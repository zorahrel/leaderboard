import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import { Ship } from './model';
import 'whatwg-fetch';

/**
 * Is Fetching Leaderboard
 * action that sets isFetching to true
 */
export const IS_FETCHING_LEADERBOARD = 'IS_FETCHING_LEADERBOARD';
export const isFetchingLeaderboard = createAction(
  IS_FETCHING_LEADERBOARD
);


/**
 * Request Leaderboard
 * activates isFetching and start the fetchLeaderboard action
 */
export const requestLeaderboard = () => (dispatch: Dispatch<{}>) => {
  dispatch(isFetchingLeaderboard());
  dispatch(fetchLeaderboard());
};


/**
 * Fetch Leaderboard Helper
 * fetches leaderboard and returns it to receive Leaderboard
 * @return {Action}
 */
export const fetchLeaderboard = () => async (dispatch: Dispatch<{}>) => {
  // Requesting local leaderboard from public folder
  const response: Response = await fetch('/leaderboard.json');
  // Parsing JSON
  const json: Ship[] = await response.json();
  // Returning leaderboard to receiveLeaderboard action
  return dispatch(receiveLeaderboard(json));
};


/**
 * Receive Leaderboard
 * returns items to store
 * @return {items}
 */
export const RECEIVE_LEADERBOARD = 'RECEIVE_LEADERBOARD';
export const receiveLeaderboard = createAction<Ship[], Ship[]>(
  RECEIVE_LEADERBOARD,
  (items: Ship[]) => items.sort((a,b) => b.score - a.score)
);