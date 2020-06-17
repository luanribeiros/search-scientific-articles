import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <S.BgContainerHeader>
        <S.ContainerHeader>
          <Link to="/">
            <S.Title>Researching Scientific Articles</S.Title>
          </Link>
          <S.Nav>
            <S.Ul>
              <S.Li>
                <Link to="/favorites" style={{ textDecoration: 'none' }}>
                  <S.A as="" href="">
                    Favorites
                  </S.A>
                </Link>
              </S.Li>
            </S.Ul>
          </S.Nav>
        </S.ContainerHeader>
      </S.BgContainerHeader>
      <S.Content>{children}</S.Content>
    </>
  );
};

export default Layout;
