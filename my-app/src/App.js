import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import HeaderComponent from './reuse/header/header.component';
import FooterComponent from './reuse/footer/footer.component';

import MainPageComponent from './components/mainPage/main.component';

class App extends Component {
  render() {
    return (
        <Router>
            <Fragment>
                <HeaderComponent />
                <Route path="/" component={MainPageComponent} />
                <FooterComponent />
            </Fragment>
        </Router>
    );
  }
}

export default App;
