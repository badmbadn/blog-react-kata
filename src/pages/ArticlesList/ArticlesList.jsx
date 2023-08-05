import { useEffect } from 'react';
import { Pagination } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import ArticleInfo from '../../components/ArticleInfo/ArticleInfo';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';
import { getArticlesList, setCurrentPage } from '../../store';

import { List, ListItem, Article } from './ArticleListStyles';

function ArticlesList() {
  const dispatch = useDispatch();

  const totalPages = useSelector((state) => Math.ceil(state.articlesList.totalArticles));
  const currentPage = useSelector((state) => state.articlesList.currentPage);
  const userName = useSelector((state) => state.authorization.userName);
  const token = useSelector((state) => state.authorization.token);
  const articles = useSelector((state) => state.articlesList.articles);
  const error = useSelector((state) => state.articlesList.error);

  console.log(articles);

  useEffect(() => {
    const data = {
      token,
      pageNumber: currentPage,
    };
    dispatch(getArticlesList(data));
  }, [userName, dispatch, currentPage]);

  if (!articles) return <Spinner />;

  if (error) return <ErrorMessage />;

  return (
    <>
      <List>
        {articles.map((article) => (
          <ListItem key={article.slug}>
            <Article>
              <ArticleInfo data={article} mod={'list'} />
            </Article>
          </ListItem>
        ))}
      </List>
      <Pagination
        current={currentPage}
        pageSize={5}
        onChange={(page) => dispatch(setCurrentPage(page))}
        showSizeChanger={false}
        total={totalPages}
        className="pagination"
      />
    </>
  );
}

export default ArticlesList;
