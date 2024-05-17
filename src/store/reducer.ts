import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  PostSliceStateTypes,
  PostTypes,
  LoadingStatusTypes,
} from '../types/commonTypes';

const initialState: PostSliceStateTypes = {
  posts: [],
  loadingStatus: {
    home: false,
  },
  selectedPost: {},
  isPostsEndReached: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostsAction: (state, action: PayloadAction<PostTypes[]>) => {
      state.posts = action.payload;
    },
    setSelectedPostAction: (state, action: PayloadAction<PostTypes>) => {
      state.selectedPost = action.payload;
    },
    clearSelectedPostAction: state => {
      state.selectedPost = {};
    },
    setPostsEndReachedAction: (state, action: PayloadAction<boolean>) => {
      state.isPostsEndReached = action.payload;
    },
    setLoadingStatusAction: (
      state,
      action: PayloadAction<LoadingStatusTypes>,
    ) => {
      state.loadingStatus = action.payload;
    },
  },
});

export const {
  setPostsAction,
  setSelectedPostAction,
  setPostsEndReachedAction,
  setLoadingStatusAction,
  clearSelectedPostAction,
} = postSlice.actions;

export default postSlice.reducer;
