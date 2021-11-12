import styled from '@emotion/styled';

interface NavItemProps {
  selected: boolean;
}

export const Container = styled.div`
  margin: 0 auto;
  width: 800px;
`;

export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
`;

export const Header = styled.header`
  margin-bottom: 4rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.span<NavItemProps>`
  font-size: 2rem;
  cursor: pointer;
  color: ${(props) => (props.selected ? '#ff6f61' : '#000')};
`;
