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
  content: string;
}

interface UpdatePostRequest {
  id: string;
  title: string;
  content: string;
}

interface DeletePostRequest {
  id: string;
}

export const getPostsAPI = async () => {
  try {
    const posts = await axios({
      method: 'GET',
      url: `/`,
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
      url: `/`,
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
      method: 'GET',
      url: `/`,
    });
    return posts as unknown as SummarizedPostType[];
  } catch (error) {
    alert('error');
    return false;
  }
};

export const createPostAPI = async ({ title, content }: CreatePostRequest) => {
  try {
    await axios({
      method: 'POST',
      url: `/`,
      data: {
        title,
        content,
      },
    });
    return true;
  } catch (error) {
    alert('error');
    return false;
  }
};

export const updatePostAPI = async ({ id, title, content }: UpdatePostRequest) => {
  try {
    await axios({
      method: 'PUT',
      url: `/`,
      data: {
        title,
        content,
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
      url: `/`,
    });
    return true;
  } catch (error) {
    alert('error');
    return false;
  }
};
