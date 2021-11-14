import React, { useState } from 'react';
import * as Style from './styled';

export interface PostType {
  id: string;
  title: string;
  description: string;
}

export interface PostProps {
  post?: PostType;
  createPost: (title: string, description: string) => void;
  updatePost: (id: string, title: string, description: string) => void;
  deletePost: (id: string) => void;
}

function Post({ post, createPost, updatePost, deletePost }: PostProps) {
  const [title, setTitle] = useState(post?.title || '');
  const [description, setContent] = useState(post?.description || '');

  return (
    <Style.Container>
      <Style.Title value={title} onChange={(event) => setTitle(event.target.value)} />
      <Style.Content value={description} onChange={(event) => setContent(event.target.value)} />
      {post?.id ? (
        <>
          <Style.Button onClick={() => updatePost(post.id, title, description)}>글 수정</Style.Button>
          <Style.Button onClick={() => deletePost(post.id)}>글 삭제</Style.Button>
        </>
      ) : (
        <Style.Button onClick={() => createPost(title, description)}>글 생성</Style.Button>
      )}
    </Style.Container>
  );
}

export default Post;
