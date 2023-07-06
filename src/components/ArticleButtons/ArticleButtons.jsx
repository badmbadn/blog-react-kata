import React from 'react';
import { Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteArticle } from '../../store';

import { Buttons, ButtonDelete, ButtonEditTag } from './ArticleButtonsStyle';

const ArticleButtons = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.authorization.token);
  const slug = useSelector((state) => state.openedArticle.article.slug);

  const navigate = useNavigate();

  const onDelete = () => {
    dispatch(
      deleteArticle({
        token,
        slug,
        data: null,
        cb: () => {
          navigate('/');
        },
      })
    );
  };

  return (
    <Buttons>
      <Popconfirm
        title=""
        description="Are you sure to delete this article?"
        placement="rightTop"
        okText="Yes"
        cancelText="No"
        onConfirm={onDelete}
      >
        <ButtonDelete type="button" />
      </Popconfirm>

      <ButtonEditTag onClick={() => navigate(`/articles/${slug}/edit/`)}>Edit</ButtonEditTag>
    </Buttons>
  );
};

export default ArticleButtons;
