import React from 'react';
import * as S from './styles';

const SearchArticle = () => {
  return (
    <S.SectionSearch>
      <S.Form>
        <S.Label>
          Search <br />
          <S.Input
            onChange={(e) => console.log(e.target.value)}
            type="search"
            id="search"
            name="search"
            placeholder="Type your Search ..."
          />
        </S.Label>
      </S.Form>
    </S.SectionSearch>
  );
};

export default SearchArticle;
