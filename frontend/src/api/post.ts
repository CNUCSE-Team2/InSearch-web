import axios from '../utils/axios';
import { SummarizedPostType } from '../App';
import { PostType } from '../pages/Post';

interface GetPostRequest {
  id: string;
}

interface SearchPostRequest {
  query: string;
}

interface CreatePostRequest {
  title: string;
  description: string;
}

interface UpdatePostRequest {
  id: string;
  title: string;
  description: string;
}

interface DeletePostRequest {
  id: string;
}

export const getPostsAPI = async () => {
  try {
    const posts = await axios({
      method: 'GET',
      url: `/contents`,
    });
    return posts as unknown as SummarizedPostType[];
  } catch (error) {
    alert('error');
    return false;
  }
};

export const getPostAPI = async ({ id }: GetPostRequest) => {
  try {
    const post = await axios({
      method: 'GET',
      url: `/contents/${id}`,
    });
    return post as unknown as PostType;
  } catch (error) {
    alert('error');
    return false;
  }
};

export const searchPostAPI = async ({ query }: SearchPostRequest) => {
  try {
    const posts = await axios({
      method: 'POST',
      url: `/search`,
      data: {
        query,
      },
    });
    return posts as unknown as SummarizedPostType[];
  } catch (error) {
    alert('error');
    return false;
  }
};

export const createPostAPI = async ({ title, description }: CreatePostRequest) => {
  try {
    await axios({
      method: 'POST',
      url: `/contents`,
      data: {
        title,
        description,
      },
    });
    return true;
  } catch (error) {
    alert('error');
    return false;
  }
};

export const updatePostAPI = async ({ id, title, description }: UpdatePostRequest) => {
  try {
    await axios({
      method: 'PUT',
      url: `/contents/${id}`,
      data: {
        title,
        description,
      },
    });
    return true;
  } catch (error) {
    alert('error');
    return false;
  }
};

export const deletePostAPI = async ({ id }: DeletePostRequest) => {
  try {
    await axios({
      method: 'DELETE',
      url: `/contents/${id}`,
    });
    return true;
  } catch (error) {
    alert('error');
    return false;
  }
};
