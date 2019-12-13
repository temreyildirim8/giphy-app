import * as ActionTypes from "../generics/actionTypes";
import axios from 'axios';

export const dashboardAction = () => {
    return dispatch => {
      axios.post('https://api.giphy.com/v1/gifs/trending?api_key=4cnSFinl6hFBTu2RdXg1NklyAiZIXEsP&limit=25&rating=G')
      .then(response => {
        // let newObj = JSON.parse(JSON.stringify(response.data));
        dispatch({ type: ActionTypes.APP_OPENED, trendingGiphs: response.data });
      })
    }
}