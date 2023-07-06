import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticlesList, logOut, setCurrentPage } from '../../store';
import placeholder from '../../assets/images/author-dummy.png';
import { CREATE, PROFILE, SIGNIN, SIGNUP } from '../../constants/Constants';

import {
  Header,
  HomeLink,
  ButtonCreate,
  LinkProfile,
  Avatar,
  ButtonLogOut,
  ButtonSignIn,
  ButtonSignUp,
} from './LayoutStyles';

function Layout() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((state) => state.authorization);
  const userName = useSelector((state) => state.authorization.userName);

  return (
    <Header>
      <HomeLink
        to="/"
        onClick={() => {
          dispatch(
            getArticlesList({
              pageNumber: 1,
              token: userName ? user.token : null,
            })
          );
          dispatch(setCurrentPage(1));
        }}
      >
        Realworld Blog
      </HomeLink>

      {userName && <ButtonCreate onClick={() => navigate(CREATE)}>Create article</ButtonCreate>}

      {userName && (
        <LinkProfile to={PROFILE}>
          {userName}
          <Avatar
            src={user.image ? user.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'}
            alt="user avatar"
            onError={(e) => (e.target.src = placeholder)}
          />
        </LinkProfile>
      )}

      {userName && (
        <ButtonLogOut
          onClick={() => {
            dispatch(logOut());
            navigate('/');
          }}
        >
          Log Out
        </ButtonLogOut>
      )}

      {!userName && (
        <ButtonSignIn
          onClick={() => {
            navigate(SIGNIN);
          }}
        >
          Sign In
        </ButtonSignIn>
      )}

      {!userName && (
        <ButtonSignUp
          onClick={() => {
            navigate(SIGNUP);
          }}
        >
          Sign Up
        </ButtonSignUp>
      )}
    </Header>
  );
}

export default Layout;
