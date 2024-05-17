import {createAction} from '@reduxjs/toolkit';

export const fetchPostsListAction = createAction<{
  limit: number;
}>('FETCH_POSTS_LIST');

export const fetchPostsByIdAction = createAction<number>('FETCH_POSTS_BY_ID');
