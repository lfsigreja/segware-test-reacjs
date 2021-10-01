import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home/home';
import NewPost from '../views/NewPost/newPost';
import SignIn from '../views/SignIn/signin';
import SignUp from '../views/SignUp/signup';
import Footer from '../Components/Footer/footer';

import { Page } from '../styles/page';

function routes() {
  return (
    <Page>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/newpost" component={NewPost} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Page>
  );
}

export default routes;
