import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';

const enhancer = composeWithDevTools(
  applyMiddleware(
    //TODO
  ),
);

const store = createStore(
  reducer,
  enhancer,
);

export default store;
