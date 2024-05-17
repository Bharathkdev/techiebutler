import createSagaMiddleware from 'redux-saga';
import {configureStore, Tuple} from '@reduxjs/toolkit';
import {postSaga} from './sagas';
import postReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {post: postReducer},
  middleware: () => new Tuple(sagaMiddleware),
});

sagaMiddleware.run(postSaga);
