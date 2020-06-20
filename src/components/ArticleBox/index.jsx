import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './styles';

const url =
  'https://core.ac.uk:443/api-v2/articles/search/search?page=1&pageSize=10&metadata=true&fulltext=true&citations=true&similar=true&duplicate=false&urls=true&faithfulMetadata=true&apiKey=zR8viEFqhpncQmJdYAMCuyXgO7IPboVr';

const ArticleBox = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setArticles(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  return (
    <>
      {articles.map((item) => (
        <S.ContainerArticleBox key={item.id}>
          <S.Authors>Author(s): {item.authors.map((author) => author)}</S.Authors>
          <S.Title> Title: {item.title} </S.Title>
          <S.Type> Types: {item.types.map((types) => types)} </S.Type>
          <S.Description>
            <strong>Description:</strong> {item.description ? item.description : 'Sem Description'}{' '}
          </S.Description>
          Url links:
          <S.Urls>
            {item.fulltextUrls.map((item) => (
              <S.A as="a" href={item}>
                links
              </S.A>
            ))}
          </S.Urls>
          <S.ContainerButton>
            <S.Button>Add Favorites</S.Button>
            <S.Button>Remove Favorites</S.Button>
          </S.ContainerButton>
        </S.ContainerArticleBox>
      ))}
    </>
  );
};

export default ArticleBox;
