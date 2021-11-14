import React, { useState } from 'react';
import * as Style from './styled';
import { startClub, stopClub } from '../../utils/club';

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
  const [club, setClub] = useState(false);
  const [text, setText] = useState('');

  const clubHandler = () => {
    setClub(!club);
    if (club) {
      stopClub();
    } else {
      startClub();
    }
  };

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
      <Style.Club onClick={clubHandler} isClub={club}>
        Club
      </Style.Club>
    </Style.Container>
  );
}

export default Main;
