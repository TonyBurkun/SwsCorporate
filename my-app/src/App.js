import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.scss';
import smoothscroll from 'smoothscroll-polyfill';

import MainPageComponent from './components/mainPage/main.component';
import ClientComponent from "./components/clients/clients.component";
import WorksComponent from "./components/works/works.component";
import OneWorkComponent from './components/oneWork/oneWork.component';
import OneServiceComponent from './components/oneService/OneService.component';
import NotFound from './components/NotFound';
import CareerComponent from "./components/career/Career.component";
import OneCareerComponent from "./components/oneCareer/OneCareer.component";
import PrivacyPolicyComponent from "./components/privacyPolicy/privacyPolicy.component";
import TermsOfUseComponent from "./components/termsOfUse/TermsOfUse.component";
import TechnologiesComponent from "./patterns/technologies/technologies.component";
import ExpertiseComponent from "./patterns/expertise/expertise.component";

class App extends Component {
    constructor(props){
        super(props);

        this.state={

            gotServices: false,
            gotClientsReuse: false,
            gotWorksReuse: false,
            gotAboutHome: false,

        };

        smoothscroll.polyfill();

    }


    mainPageGotData = (stateItem, value) => {

        this.setState({

            [stateItem]: value,

        });

    };

    render() {

        return (
            <Router>
                <Fragment>
                    <Switch>


                        <Route path="/" exact render={() => (<MainPageComponent dataStatus={this.state} updateData={this.mainPageGotData}/>)}/>
                        <Route path="/clients" exact component={ClientComponent}/>
                        <Route path="/case-studies" exact component={WorksComponent}/>
                        <Route path="/work/:name" exact component={OneWorkComponent}/>
                        <Route path="/services/:name" exact component={OneServiceComponent}/>
                        <Route path="/career" exact component={CareerComponent}/>
                        <Route path="/career/:id" exact component={OneCareerComponent}/>
                        <Route path="/privacy-policy" exact component={PrivacyPolicyComponent}/>
                        <Route path="/terms-of-use" exact component={TermsOfUseComponent}/>
                        <Route path={"/technologies-*"} exact component={TechnologiesComponent} />
                        <Route path={"/expertise-*"} exact component={ExpertiseComponent} />

                        <Route path="*" component={NotFound} />

                    </Switch>

                </Fragment>
            </Router>
        );

    }
}

export default App;
