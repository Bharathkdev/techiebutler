import {NavigationProp} from '@react-navigation/native';

export interface PostTypes {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type LoadingStatusTypes = {
  home: boolean;
};

export interface PostSliceStateTypes {
  posts: PostTypes[];
  selectedPost: any;
  loadingStatus: LoadingStatusTypes;
  isPostsEndReached: boolean;
}

/**
 * An interface that extends another interface using the 'extends' keyword.

 * In this case, it extends 'Array<PostTypes>', which means it represents an array
  with elements of the 'PostTypes' type and also includes 'posts', 'total', 'limit',
  and 'page'
*/
export interface PostListTypes extends Array<PostTypes> {
  posts: PostTypes[];
  total: number;
  limit: number;
  page: number;
}

export type ChildrenTypes = {
  children: React.ReactNode;
};

export type NavigationTypes = {
  navigation: NavigationProp<any, any>;
};
