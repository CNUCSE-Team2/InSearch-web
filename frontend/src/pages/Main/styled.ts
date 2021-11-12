import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  width: 800px;
`;

export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
`;

export const Header = styled.header``;

export const SearchBox = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export const SearchButton = styled.button`
  font-size: 2rem;
`;

export const Search = styled.input`
  font-size: 2rem;
  outline: none;
`;

export const PostList = styled.ul`
  margin: 0;
  margin-top: 5rem;
  padding: 0;
`;

export const PostItem = styled.li`
  text-align: center;
  border-bottom: 1px solid #d0d0d0;
  cursor: pointer;

  &:last-child {
    border: none;
  }

  &:hover {
    color: #ff6f61;
  }
`;

export const ControlButton = styled.button``;

export const PostTitle = styled.h2`
  font-size: 3rem;
`;
