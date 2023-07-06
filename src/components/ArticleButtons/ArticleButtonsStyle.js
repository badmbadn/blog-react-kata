import styled from 'styled-components';

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

export { Buttons, ButtonDelete, ButtonEditTag };
