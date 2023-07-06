import styled from 'styled-components';

const FormArticle = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  padding: 48px 32px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  box-shadow: 0px 22px 106px rgba(0, 0, 0, 0.07), 0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198),
    0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275), 0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035),
    0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725), 0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802);
  background-color: #fff;
  color: #262626;
`;

const TitleArticle = styled.h2`
  margin-block-start: 0;
  margin-block-end: 21px;
  font-size: 20px;
  font-family: 'Roboto-Medium', sans-serif;
  line-height: 28px;
  text-align: center;
`;

const Label = styled.label`
  font-size: 14px;
  font-family: 'Roboto-Regular', sans-serif;
  line-height: 22px;
`;

const Input = styled.input`
  padding: 8px 12px;
  margin-bottom: 21px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Roboto-Regular', sans-serif;
  line-height: 24px;
  resize: none;
  &::hover {
    background-color: #1890ff;
  }
  &::placeholder {
    color: #bfbfbf;
  }
  ${(props) => props.requiredField && 'border-color: #f5222d'};
`;

const InputSubmit = styled.input.attrs({ type: 'submit' })`
  padding: 8px 12px;
  margin-bottom: 21px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Roboto-Regular', sans-serif;
  line-height: 24px;
  resize: none;
  &::placeholder {
    color: #bfbfbf;
  }
  &[type='submit'] {
    max-width: 320px;
    margin: 0;
    background-color: #1890ff;
    color: #fff;
    cursor: pointer;
    &:disabled {
      background-color: rgba(24, 144, 255, 0.6);
      cursor: not-allowed;
    }
  }
`;

const TextArea = styled.textarea`
  padding: 8px 12px;
  margin-bottom: 21px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Roboto-Regular', sans-serif;
  line-height: 24px;
  resize: none;
  &::placeholder {
    color: #bfbfbf;
  }
  ${(props) => props.requiredField && 'border-color: #f5222d'};
`;

const List = styled.ul`
  margin: 0;
  margin-block: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  margin: 0;
  margin-block: 0;
`;

const ButtonDelete = styled.button`
  margin-left: 18px;
  background-color: #fff;
  border: 1px solid;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Roboto-Medium', sans-serif;
  padding: 7px 36px;
  color: #f5222d;
  border-color: #f5222d;
`;

const ButtonAdd = styled.button`
  margin-left: 18px;
  background-color: #fff;
  border: 1px solid;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Roboto-Medium', sans-serif;
  padding: 7px 40px;
  color: #1890ff;
  border-color: #1890ff;
`;

const Section = styled.section`
  color: #f5222d;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
`;

export { FormArticle, TitleArticle, Label, Input, InputSubmit, TextArea, List, Item, ButtonDelete, ButtonAdd, Section };
