import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import FourOhFour from '../pages/FourOhFour';
import Footer from '../components/Footer';
import Playground from '../pages/Playground';
import PrivateRoute from './PrivateRoute';

const Router = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return props.auth ? <Redirect to="/dashboard" /> : <Landing />;
            }}
          />
          <Route exact path="/contact" component={Contact} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/playground" component={Playground} />
          <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Router);
