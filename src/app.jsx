import React from 'react';

import Layout from './components/Layout';
import SearchArticle from './components/SearchArticle';
import ArticleBox from './components/ArticleBox';

const App = () => {
  return (
    <Layout>
      <SearchArticle />
      <ArticleBox />
    </Layout>
  );
};

export default App;
