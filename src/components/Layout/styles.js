import styled from 'styled-components';

export const BgContainerHeader = styled.section`
  width: 100%;
  background: #1f1f1e;
`;
export const ContainerHeader = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
`;
export const Title = styled.h1`
  color: white;
`;

export const Nav = styled.nav`
  margin-left: 50px;
`;
export const Ul = styled.ul`
  display: flex;
`;
export const Li = styled.li`
  text-decoration: none;
`;
export const A = styled.a`
  background: #000000;
  padding: 1rem;
  text-decoration: none;
  transition: 0.2s linear;
  color: white;
  font-weight: bold;
  &:hover {
    background: #b75400;
  }
`;

export const Content = styled.section`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  border: 1px solid grey;
`;
