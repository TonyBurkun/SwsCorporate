import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.scss';
import HeaderComponent from './reuse/header/header.component';
import FooterComponent from './reuse/footer/footer.component';

import MainPageComponent from './components/mainPage/main.component';
import ClientComponent from "./components/clients/clients.component";
import WorksComponent from "./components/works/works.component";
import OneWorkComponent from './components/oneWork/oneWork.component';
import oneServiceComponent from './components/oneService/oneService.component';
import NotFound from './components/NotFound';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={MainPageComponent}/>
                        <Route path="/clients" exact component={ClientComponent}/>
                        <Route path="/portfolio" exact component={WorksComponent}/>
                        <Route path="/work/:name" exact component={OneWorkComponent}/>
                        <Route path="/services/:name" exact component={oneServiceComponent}/>
                        <Route path="*" component={NotFound} />
                    </Switch>
                    <FooterComponent/>
                </Fragment>
            </Router>
        );
    }
}

export default App;
