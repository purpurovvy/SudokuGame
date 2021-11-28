import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer } from './reducers';

export * from './actions';
export * from './interfaces';

export type IReducer = ReturnType<typeof reducer>;

export const configureStore = (initialState = {}) => {
  const store = createStore(reducer, initialState, devToolsEnhancer({}));
  return store;
};
