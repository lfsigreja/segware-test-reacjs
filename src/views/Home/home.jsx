import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import Post from '../../Components/Post/Post';
import { api } from '../../services/api';
import { Container, Article } from './style';

function Home() {
  const [data, setData] = useState();
  const token = sessionStorage.getItem('@segwareServiceToken');
  const history = useHistory();

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

  console.log(data);

  return (
    <Container>
      {data?.map((el) => (
        <Article>
          <article>
            <h1>{el.author.username}</h1>
            <p>{el.content}</p>
          </article>
        </Article>
      ))}
    </Container>
  );
}

export default Home;
