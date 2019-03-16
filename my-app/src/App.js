import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import HeaderComponent from './reuse/header/header.component';
import FooterComponent from './reuse/footer/footer.component';

import MainPageComponent from './components/mainPage/main.component';
import ClientComponent from "./components/clients/clients.component";

class App extends Component {
  render() {
    return (
        <Router>
            <Fragment>
                <HeaderComponent />
                <Switch>
                    <Route path="/" exact component={MainPageComponent} />
                    <Route path="/clients" exact component={ClientComponent} />
                </Switch>
                <FooterComponent />
            </Fragment>
        </Router>
    );
  }
}

export default App;
