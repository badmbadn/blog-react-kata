import styled from 'styled-components';

const List = styled.ul`
  margin: 5px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  & + .pagination {
    text-align: center;
  }
`;

const ListItem = styled.li`
  display: block;
  margin-bottom: 26px;
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: 70% calc(30% - 58px) 58px;
  grid-row-gap: 4px;
  padding: 15px 15px 24px;
  border-radius: 5px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15));
`;

export { List, ListItem, Article };
