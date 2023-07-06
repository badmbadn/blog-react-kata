import { useState } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import apiService from '../../service/apiService';
import placeholder from '../../assets/images/author-dummy.png';
import likeActive from '../../assets/images/like-active.svg';
import likes from '../../assets/images/likes.svg';

import {
  HeaderInfo,
  TitleLink,
  LikeButton,
  UserName,
  UserImg,
  List,
  ListItem,
  SectionCreated,
  SectionDescription,
} from './ArticleInfoStyle';

function ArticleInfo({ data }) {
  const { slug, title, favoritesCount, favorited, author, tagList, createdAt, description } = data;
  const [_favoritesCount, setFavoritesCount] = useState(favoritesCount);
  const [_favorited, setFavorited] = useState(favorited);

  const userName = !!useSelector((state) => state.authorization.userName);
  const token = useSelector((state) => state.authorization.token);

  const tagListDisplay = tagList.map((tag, i) => <ListItem key={i}>{tag}</ListItem>);

  const createdAtPost = format(new Date(createdAt), 'MMMM d, yyyy');

  const like = async () => {
    try {
      const res = await apiService.favoriteArticle(slug, token, _favorited);
      if (res.ok) {
        setFavoritesCount(_favoritesCount + (_favorited ? -1 : 1));
        setFavorited(!_favorited);
      }
    } catch {
      return;
    }
  };

  return (
    <>
      <HeaderInfo>
        <TitleLink to={`/articles/${data.slug}`}>{title}</TitleLink>
        <LikeButton onClick={userName ? like : undefined}>
          <img src={!_favorited ? likes : likeActive} />
          <span>{_favoritesCount}</span>
        </LikeButton>
      </HeaderInfo>

      <UserName>{author.username}</UserName>

      <UserImg src={author.image || null} alt="author avatar" onError={(e) => (e.target.src = placeholder)} />

      <List>{tagListDisplay}</List>

      <SectionCreated>{createdAtPost}</SectionCreated>
      <SectionDescription>{description}</SectionDescription>
    </>
  );
}

export default ArticleInfo;
