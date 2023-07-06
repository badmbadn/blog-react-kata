import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 16px 22px 13px;
  margin-bottom: 20px;
  background-color: #ffffff !important;
  font-size: 18px;
  line-height: 28px;
`;

const HomeLink = styled(Link)`
  margin: 0;
  margin-right: auto;
  border: none;
  text-decoration: none;
  align-self: center;
  color: rgba(0, 0, 0, 0.85);
`;

const ButtonCreate = styled.button`
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  font-family: 'Inter Regular', sans-serif;
  font-size: inherit;
  border: 1px solid #52c41a;
  color: #52c41a;
  padding: 6px 10px;
  font-size: 14px;
  line-height: 20px;
  &:hover {
    background-color: #52c41a;
    color: #fff;
  }
`;

const LinkProfile = styled(Link)`
  margin-left: 27px;
  padding: 0;
  color: rgba(0, 0, 0, 0.75);
`;

const Avatar = styled.img`
  display: inline-block;
  margin-left: 13px;
  height: 46px;
  width: 46px;
  border-radius: 50%;
  vertical-align: middle;
`;

const ButtonLogOut = styled.button`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 18px;
  margin-left: 27px;
  font-family: 'Inter Regular', sans-serif;
  border: 1px solid #000000bf;
  &:hover {
    background-color: #000000bf;
    color: #fff;
  }
`;

const ButtonSignIn = styled.button`
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #fff;
  padding: 10px 18px;
`;

const ButtonSignUp = styled.button`
  font-size: 16px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #52c41a;
  padding: 10px 18px;
  border-color: #52c41a;
  color: #52c41a;
  &:hover {
    background-color: #52c41a;
    color: #fff;
  }
`;

export { Header, HomeLink, ButtonCreate, LinkProfile, Avatar, ButtonLogOut, ButtonSignIn, ButtonSignUp };
