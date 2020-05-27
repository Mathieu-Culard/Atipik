import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userMiddleware from 'src/middlewares/userMiddleware';

import reducer from 'src/reducers';

const enhancer = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancer,
);

export default store;
