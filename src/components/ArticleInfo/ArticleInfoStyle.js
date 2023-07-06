import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderInfo = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  justify-self: left;
  display: flex;
  align-items: center;
`;

const TitleLink = styled(Link)`
  margin: 0 13px 0 0;
  margin-block: 0;
  padding: 0;
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
  color: #1890ff;
  text-decoration: none;
  overflow-wrap: anywhere;
  &_list {
    overflow: hidden;
    max-height: 28px;
  }
`;
const LikeButton = styled.button`
  margin: 0;
  padding: 0;
  padding-left: 21px;
  border: none;
  font-size: 12px;
  line-height: 22px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  gap: 5px;
  background: {
    color: rgba(255, 255, 255, 0);
    repeat: no-repeat;
    position: left;
  }
`;

const UserName = styled.section`
  grid-area: 1 / 2 / 2 / 3;
  justify-self: right;
  font-size: 18px;
  line-height: 28px;
  max-height: 28px;
  color: rgba(0, 0, 0, 0.85);
  overflow: hidden;
  overflow-wrap: anywhere;
`;

const UserImg = styled.img`
  grid-area: 1 / 3 / 3 / 4;
  margin-left: 12px;
  height: 46px;
  width: 46px;
  border-radius: 50%;
`;

const List = styled.ul`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  flex-wrap: wrap;
  margin-block: 0;
  padding: 0;
  & .tag {
    display: block;
    padding: 2px 5px 3px;
    margin-right: 8px;
    border: 1px solid;
    border-radius: 2px;
    font-size: 12px;
    line-height: 15px;
    &_list {
      color: rgba(0, 0, 0, 0.75);
      border-color: rgba(0, 0, 0, 0.75);
    }
    &_opened {
      color: rgba(0, 0, 0, 0.5);
      border-color: rgba(0, 0, 0, 0.5);
    }
  }
  list-style: none;
  &_list {
    overflow: hidden;
    height: 22px;
  }
`;

const ListItem = styled.li`
  display: block;
  padding: 2px 5px 3px;
  margin-right: 8px;
  border: 1px solid;
  border-radius: 2px;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.75);
  border-color: rgba(0, 0, 0, 0.75);
`;

const SectionCreated = styled.section`
  grid-area: 2 / 2 / 3 / 3;
  justify-self: right;
  margin-top: -8px;
  font-size: 12px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.5);
  white-space: nowrap;
`;

const SectionDescription = styled.section`
  grid-area: 3 / 1 / 4 / 2;
  justify-self: left;
  overflow-wrap: anywhere;
  max-height: 40px;
  overflow: hidden;
`;

export { HeaderInfo, TitleLink, LikeButton, UserName, UserImg, List, ListItem, SectionCreated, SectionDescription };
