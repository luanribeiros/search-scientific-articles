import React from 'react';
import * as S from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <S.BgContainerHeader>
        <S.ContainerHeader>
          <S.Title>Researching Scientific Articles</S.Title>
          <S.Nav>
            <S.Ul>
              <S.Li>
                <S.A as="a" href="">
                  Favorits
                </S.A>
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
