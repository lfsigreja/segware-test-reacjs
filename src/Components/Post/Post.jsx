import React from 'react';

import { Article } from './style';

function Post(author, content, like, love) {
  return (
    <Article>
      <article>
        <h1>{author}</h1>
        <p>
        {content}
        </p>
      </article>
    </Article>
  );
}

export default Post;
