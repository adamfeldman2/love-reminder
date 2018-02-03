import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import FourOhFour from '../pages/FourOhFour';
import Footer from '../components/Footer';
import Playground from '../pages/Playground';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/playground" component={Playground} />
          <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
