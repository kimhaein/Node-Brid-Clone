import { createWrapper } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers'

const configureStore = () => {
  const middleware = []
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middleware))
    : composeWithDevTools(applyMiddleware(...middleware))

  const store = createStore(reducer, enhancer)
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;

// redux : 중앙 데이터 저장소 ex) mobx,apollo,contextAPI
// 리덕스 : 액션을 생성하는 경우 리듀서도 함께 만들어야 함 : 코드량이 많아짐
// 액션들의 히스토리가 기록되기 때문에 에러 찾기 쉽다

// 불변성 유지 -> 항상 새로운 객체를 만들어서 리턴함
// 왜 새로운 객체를 반환하는가? 히스토리를 기반으로 이전 값과 다음 값을 비교하기 위해