import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home/home';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';

import { Page } from '../styles/page';

function routes() {
  return (
    <Page>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Page>
  );
}

export default routes;
