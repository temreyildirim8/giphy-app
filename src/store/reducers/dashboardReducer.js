import * as ActionTypes from "../generics/actionTypes";
import { updateObject } from "../generics/utility";

const INITIAL_STATE = {
  loading: false,
  trendingGiphs: {}
};

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.APP_OPENED:
      return updateObject(state, INITIAL_STATE, {
        trendingGiphs: action.payload.trendingGiphs
      });
    default:
      return state;
  }
};

export default dashboardReducer;

