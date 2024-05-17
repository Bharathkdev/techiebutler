import {Alert} from 'react-native';
import {call, put, takeLatest, select} from 'redux-saga/effects';

import {fetchPostsListAction, fetchPostsByIdAction} from './actions';
import {fetchPostsListAPI, fetchPostsByIdAPI} from './apis';
import {
  setPostsAction,
  setLoadingStatusAction,
  setPostsEndReachedAction,
  setSelectedPostAction,
} from './reducer';
import {strings} from '../common/strings';
import {PostListTypes, PostTypes} from '../types/commonTypes';

function* fetchPostsListSaga(action: {
  payload: {limit: number};
}): Generator<any, void, PostListTypes> {
  try {
    yield put(setLoadingStatusAction({home: true}));
    // Handled pagination with limit and page
    const limit = action.payload.limit;
    const existingPosts = yield select(state => state.post.posts);
    const page = Math.ceil(existingPosts.length / limit) + 1;

    const data: PostListTypes = yield call(fetchPostsListAPI, {
      limit,
      page,
    });

    /**
     * Combine the existing posts with the newly fetched posts
     to keep the store updated.
    */
    const updatedPosts = existingPosts.concat(data);

    yield put(setPostsAction(updatedPosts));
    if (data.length === 0) {
      yield put(setPostsEndReachedAction(true));
    }
  } catch (error: any) {
    const errorMessage = strings.ErrorHandling.postListError;
    /**
     * Log the error message for debugging purposes. In a production environment,
     specialized error tracking tools like Sentry can be used to gather more
     detailed information about errors.
    */
    console.error('Error in fetchPostsListSaga:', error);
    Alert.alert('Alert', errorMessage);
  } finally {
    yield put(setLoadingStatusAction({home: false}));
  }
}

function* fetchPostsByIdSaga(action: {payload: number}) {
  try {
    const data: PostTypes = yield call(fetchPostsByIdAPI, action.payload);
    yield put(setSelectedPostAction(data));
  } catch (error: any) {
    const errorMessage = strings.ErrorHandling.postsByIdError;
    console.error('Error in fetchPostsByIdSaga:', error);
    Alert.alert('Alert', errorMessage);
  }
}

export function* postSaga() {
  yield takeLatest(fetchPostsListAction, fetchPostsListSaga);
  yield takeLatest(fetchPostsByIdAction, fetchPostsByIdSaga);
}
