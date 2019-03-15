import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ServiceComponent from './services/services.component';
import ClientsComponent from './clients/clients.component';
import WorksComponent from '../../reuse/works/works.component';
import AboutHomeComponent from './about/about.component';
import ConnectComponent from '../../reuse/connect/connect.component';

class MainPageComponent extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Route path="/" component={ServiceComponent} />
                    <Route path="/" component={ClientsComponent} />
                    <Route path="/" component={WorksComponent} />
                    <Route path="/" component={AboutHomeComponent} />
                    <Route path="/" component={ConnectComponent} />
                </Fragment>
            </Router>
        );
    }
}

export default MainPageComponent;
