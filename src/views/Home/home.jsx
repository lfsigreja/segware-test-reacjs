import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Checkbox } from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons';

import { api } from '../../services/api';
import { Container, Article } from './style';

function Home() {
  const [data, setData] = useState();
  const [favorite, setFavorite] = useState(false);
  const token = sessionStorage.getItem('@segwareServiceToken');
  const history = useHistory();
  const label = { inputProps: { 'aria-label': 'checkbox demo' } };

  if (!token) {
    history.push('/signin');
  } else {
    const tokenSub = token.replaceAll('"', '');
    useEffect(() => {
      api
        .get('/feeds', {
          headers: {
            Authorization: `Bearer ${tokenSub}`
          }
        })
        .then((response) => {
          setData(response.data);
        });
    }, [token]);
  }

  const handleFavorite = useEffect(
    (e) => {
      console.log(favorite);
      const tokenSub = token.replaceAll('"', '');
      if (favorite) {
        api.post('/reaction', favorite, {
          headers: {
            Authorization: `Bearer ${tokenSub}`
          }
        });
      }
    },
    [favorite]
  );

  return (
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
              onChange={(e) => setFavorite({ feedId: el.id, like: true, love: true })}
            />
          </div>
        </Article>
      ))}
    </Container>
  );
}

export default Home;
