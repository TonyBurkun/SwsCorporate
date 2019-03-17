import React, { Component, Fragment } from 'react';
import { Route } from "react-router-dom";
import ServiceComponent from './services/services.component';
import ClientsReuse from '../../reuse/clients/clients.component';
import WorksReuseComponent from '../../reuse/works/works.component';
import AboutHomeComponent from './about/about.component';
import ConnectComponent from '../../reuse/connect/connect.component';

class MainPageComponent extends Component {
    constructor(){
        super();
        window.scrollTo(0,0);
    }
    render() {
        return (
            <Fragment>
                <section className="head-block">
                    <div className="slider-block">
                        <div className="slider-block__item">
                            <div className="slide">
                                <h2 className="slide__title">
                                    Project outsourcing and/or creating own development team
                                </h2>
                                <p className="slide__desc">
                                    StairwaySoft is an Israeli and Ukraine based engineering provider
                                    of innovative software development services with a team of expert
                                    engineers. We services various businesses globally to create solutions

                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Route path="/" component={ServiceComponent} />
                <Route path="/" component={ClientsReuse} />
                <Route path="/" component={WorksReuseComponent} />
                <Route path="/" component={AboutHomeComponent} />
                <Route path="/" component={ConnectComponent} />
            </Fragment>
        );
    }
}

export default MainPageComponent;
