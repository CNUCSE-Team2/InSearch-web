import React, { useEffect, useState } from 'react';
import * as Style from './styled';

interface SummarizedPostType {
  id: string;
  title: string;
}

interface MainProps {
  postList: SummarizedPostType[];
  clickPost: (id: string) => void;
  handleSearch: (text: string) => void;
}

function Main({ postList, clickPost, handleSearch }: MainProps) {
  const [text, setText] = useState('');

  return (
    <Style.Container>
      <Style.SearchBox>
        <Style.Search value={text} onChange={(event) => setText(event.target.value)} />
        <Style.SearchButton onClick={() => handleSearch(text)}>검색</Style.SearchButton>
      </Style.SearchBox>
      <Style.PostList>
        {postList.map((post) => (
          <Style.PostItem key={post.id} onClick={() => clickPost(post.id)}>
            <Style.PostTitle>{post.title}</Style.PostTitle>
          </Style.PostItem>
        ))}
      </Style.PostList>
    </Style.Container>
  );
}

export default Main;
