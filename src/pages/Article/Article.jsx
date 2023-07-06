/* eslint-disable react/no-children-prop */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import ArticleButtons from '../../components/ArticleButtons/ArticleButtons';
import ArticleInfo from '../../components/ArticleInfo/ArticleInfo';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';
import { getArticle } from '../../store';

import { ArticleBody, Info, MarkDown } from './ArticleStyles';

function Article() {
  const dispatch = useDispatch();

  const article = useSelector((state) => state.openedArticle.article);
  const error = useSelector((state) => state.openedArticle.error);
  const userName = useSelector((state) => state.authorization.userName);
  const token = useSelector((state) => state.authorization.token);

  const isAllowInteract = article?.author.username === userName;

  const { slug } = useParams();

  useEffect(() => {
    dispatch(getArticle({ slug, token: userName ? token : null }));
  }, [userName]);

  if (!article) return <Spinner />;

  if (error) return <ErrorMessage />;

  return (
    <ArticleBody>
      <Info>
        <ArticleInfo data={article} mod={'opened'} />
        {isAllowInteract && <ArticleButtons />}
      </Info>
      <MarkDown>
        <ReactMarkdown children={article?.body} remarkPlugins={[remarkGfm]} />
      </MarkDown>
    </ArticleBody>
  );
}

export default Article;
