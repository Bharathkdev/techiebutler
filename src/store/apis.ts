import {PostListTypes} from '../types/commonTypes';
import {mainAxios} from './services';

export const fetchPostsListAPI = async ({
  limit,
  page,
}: {
  limit: number;
  page: number;
}): Promise<PostListTypes> => {
  // Sending limit and page values for pagination
  const {data} = await mainAxios.get(`/posts?_page=${page}&_limit=${limit}`);

  return data;
};

export const fetchPostsByIdAPI = async (
  postId: number,
): Promise<PostListTypes> => {
  const {data} = await mainAxios.get(`/posts/${postId}`);

  return data;
};
