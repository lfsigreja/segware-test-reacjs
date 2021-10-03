/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Checkbox } from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import Header from '../../Components/Header/header';
import Upvote from '../../Components/Upvote/Upvote';

import { Container, Article } from './style';
import getContent from '../../services/getContent';
import postReaction from '../../services/postReaction';
import tokenOnStorageValidade from '../../services/tokenOnStorageValidate';

function Home() {
  // Hooks
  const [data, setData] = useState();
  const [favorite, setFavorite] = useState(false);
  // Validação se o usuário está logado + serviço de redirecionamento
  const token = sessionStorage.getItem('@segwareServiceToken');
  tokenOnStorageValidade();
  // Props do Material UI
  const label = { inputProps: { 'aria-label': 'favorite buton' } };

  // Chamada para renderizar a tela da primeira vez
  useEffect(() => {
    if (token) {
      getContent(setData);
    }
  }, []);

  // Chamada para renderizar a tela depois de um like
  useEffect(
    (e) => {
      if (favorite) {
        postReaction(favorite, { onSuccess: setData });
      }
    },
    [favorite]
  );

  return (
    <>
      <Header />
      <Container>
        {data?.map((el) => (
          <Article key={el.id}>
            <p>{el.content}</p>
            <div>
              <h1>
                {'Autor: '}
                {el.author.username}
              </h1>
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                // eslint-disable-next-line prettier/prettier
                onChange={(e) => setFavorite({ feedId: el.id, like: !el.activeUserLikedIt, love: !el.activeUserLovedIt })}
                checked={el.activeUserLikedIt}
              />
              <Upvote
                activeUserLikedIt={el.activeUserLikedIt}
                likes={el.likes}
              />
            </div>
          </Article>
        ))}
      </Container>
    </>
  );
}

export default Home;
