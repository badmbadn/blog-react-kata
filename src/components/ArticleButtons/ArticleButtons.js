import React from 'react';
import styled from 'styled-components';
import { Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteArticle } from '../../store';

const Buttons = styled.div`
  grid-area: 3 / 2 / 4 / 4;
  justify-self: right;
  position: relative;
  & button {
    margin-left: 12px;
    border: 1px solid;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    font: {
      family: inherit;
      size: 14px;
    }
    line-height: 20px;
    padding: 5px 10px;
    &:hover {
      color: #fff;
    }
  }
`;

const ButtonDelete = styled.button`
  color: #52c41a;
  &:before {
    content: 'Delete';
    line-height: 20px;
  }
  color: #f5222d;
  border-color: #f5222d;
  &:hover {
    background-color: #f5222d;
  }
`;

const ButtonEditTag = styled.button`
  color: #52c41a;
  border-color: #52c41a;
  &:hover {
    background-color: #52c41a;
  }
`;

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
