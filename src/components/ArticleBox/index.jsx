import React from 'react';
import * as S from './styles';

const ArticleBox = () => {
  return (
    <S.ContainerArticleBox>
      <S.Authors> Authors </S.Authors>
      <S.Title> Title </S.Title>
      <S.Type> Type </S.Type>
      <S.Description> description ... </S.Description>
      <S.Urls> Urls ... </S.Urls>
      <S.Button>Add Favorites</S.Button>
    </S.ContainerArticleBox>
  );
};

export default ArticleBox;
