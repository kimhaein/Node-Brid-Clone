// 서버사이드 렌더링을 위해 필요
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user'
import post from './post'

// 리듀서
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;