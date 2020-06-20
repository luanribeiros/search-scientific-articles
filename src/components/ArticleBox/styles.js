import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerArticleBox = styled.section`
  border-radius: 4px;
  border: 1px solid #cfcfcf;
  padding: 1rem;
  box-shadow: 1px 2px 5px #d1d1d1;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;
export const Authors = styled.h1`
  padding-bottom: 0.5rem;
`;
export const Title = styled.h2`
  padding-bottom: 0.5rem;
`;
export const Type = styled.h3`
  padding-bottom: 0.5rem;
`;
export const Urls = styled(Link)`
  padding: 0.5rem 0.5rem 0.5rem 0;
`;
export const A = styled.a`
  padding: 0.5rem;
`;
export const Description = styled.p`
  padding-bottom: 0.5rem;
`;
export const ContainerButton = styled.section`
  display: flex;
  margin-top: 10px;
`;
export const Button = styled.button`
  margin-right: 10px;
`;
