import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import ServiceComponent from './components/services/services.component';
import ClientsComponent from './components/clients/clients.component';
import WorksComponent from './components/works/works.component';
import AboutHomeComponent from './components/about/about.component';
import Header from './reuse/header/header.component';

class App extends Component {
  render() {
    return (
        <Router>
            <Fragment>
                <Header />
                <Route path="/" component={ServiceComponent} />
                <Route path="/" component={ClientsComponent} />
                <Route path="/" component={WorksComponent} />
                <Route path="/" component={AboutHomeComponent} />
            </Fragment>
        </Router>
    );
  }
}

export default App;
