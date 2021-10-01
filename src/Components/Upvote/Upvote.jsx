import React from 'react';

// import { Container } from './styles';

function Upvote(activeUserLikedIt, likes) {
  const userLiked = activeUserLikedIt;

  if (userLiked.activeUserLikedIt === 1 && userLiked.likes >= 2) {
    return (
      <h6>
        {'Você e '}
        {userLiked.likes - 1}
        {' pessoas gostaram deste conteúdo'}
      </h6>
    );
  }

  if (userLiked.likes === 0) {
    // eslint-disable-next-line prettier/prettier
    return (
      <h6>
        Seja o primeiro a curtir esse conteudo
      </h6>
    );
  }

  if (userLiked.likes === 1 && userLiked.activeUserLikedIt === 1) {
    // eslint-disable-next-line prettier/prettier
    return (
      <h6>
        Você gostou desse conteudo
      </h6>
    );
  }

  return (
    <h6>
      {userLiked.likes}
      {'  pessoas gostaram deste conteúdo'}
    </h6>
  );
}

export default Upvote;
