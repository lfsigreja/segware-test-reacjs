/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Checkbox } from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import Header from '../../Components/Header/header';
import Upvote from '../../Components/Upvote/Upvote';

import { api } from '../../services/api';
import { Container, Article } from './style';

function Home() {
  // Hooks
  const [data, setData] = useState();
  const [favorite, setFavorite] = useState(false);
  const [load, setLoad] = useState(false);
  // Validação se o usuário está logado + hook de redirecionamento
  const history = useHistory();
  const token = sessionStorage.getItem('@segwareServiceToken');
  if (!token) {
    history.push('/signin');
  }

  // validação botão favoritar
  const label = { inputProps: { 'aria-label': 'checkbox demo' } };

  useEffect(
    (e) => {
      if (favorite) {
        const tokenSub = token.replaceAll('"', '');
        console.log(favorite);
        api
          .post('/reaction', favorite, {
            headers: {
              Authorization: `Bearer ${tokenSub}`
            }
          })
          .finally(() => {
            setLoad(!load);
          });
      }
    },
    [favorite]
  );

  useEffect(() => {
    if (token) {
      const tokenSub = token.replaceAll('"', '');
      api
        .get('/feeds', {
          headers: {
            Authorization: `Bearer ${tokenSub}`
          }
        })
        .then((response) => {
          setData(response.data);
        });
    }
  }, [load]);

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
