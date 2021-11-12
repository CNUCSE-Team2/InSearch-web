import React, { useState, useEffect } from 'react';
import MainPage from './pages/Main';
import PostPage from './pages/Post';
import * as Style from './styled';
import { getPostsAPI, getPostAPI, createPostAPI, updatePostAPI, deletePostAPI, searchPostAPI } from './api/post';
import { PostType } from './pages/Post/index';

export interface SummarizedPostType {
  id: string;
  title: string;
}

function App() {
  const [tab, setTab] = useState('post');
  const [postList, setPostList] = useState<SummarizedPostType[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostType>();

  const changeTab = (tab: string) => {
    setTab(tab);
  };

  const clickPost = async (id: string) => {
    const post = await getPostAPI({ id });
    if (post) {
      setSelectedPost(post);
    }
  };

  const handleSearch = async (query: string) => {
    const posts = await searchPostAPI({ query });
    if (posts) {
      setPostList(posts);
    }
  };

  const createPost = async (title: string, content: string) => {
    const result = await createPostAPI({ title, content });
    if (result) {
      setTab('list');
    }
  };

  const updatePost = async (id: string, title: string, content: string) => {
    const result = await updatePostAPI({ id, title, content });
    if (result) {
      setTab('list');
    }
  };

  const deletePost = async (id: string) => {
    const result = await deletePostAPI({ id });
    if (result) {
      setTab('list');
    }
  };

  const renderingComponent = () => {
    if (tab === 'list') return <MainPage postList={postList} clickPost={clickPost} handleSearch={handleSearch} />;
    else if (tab === 'post')
      return <PostPage post={selectedPost} createPost={createPost} deletePost={deletePost} updatePost={updatePost} />;
    return <></>;
  };

  const getPost = async () => {
    const posts = await getPostsAPI();
    if (posts) {
      setPostList(posts);
    }
  };

  useEffect(() => {
    // getPost();
  }, [tab]);

  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>InSearch</Style.Title>
        <Style.Nav>
          <Style.NavItem selected={tab === 'list'} onClick={() => changeTab('list')}>
            목록
          </Style.NavItem>
          <Style.NavItem selected={tab === 'post'} onClick={() => changeTab('post')}>
            포스트
          </Style.NavItem>
          <Style.NavItem selected={tab === 'setting'} onClick={() => changeTab('setting')}>
            관리
          </Style.NavItem>
        </Style.Nav>
      </Style.Header>
      {renderingComponent()}
    </Style.Container>
  );
}

export default App;
