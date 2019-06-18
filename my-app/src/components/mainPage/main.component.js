import React, { Component } from 'react';
import ServiceComponent from './services/services.component';
import ClientsReuse from '../../reuse/clients/clients.component';
import WorksReuseComponent from '../../reuse/works/works.component';
import AboutHomeComponent from './about/about.component';
import ConnectComponent from '../../reuse/connect/connect.component';
import HeaderComponent from '../../reuse/header/header.component';
import FooterComponent from '../../reuse/footer/footer.component';
import {scrollToSection} from '../../utils/scrollToSection'


class MainPageComponent extends Component {
    constructor(props){
        super(props);
        window.scrollTo(0,0);
        this.state={
            gotServices: false,
            gotClientsReuse: false,
            gotWorksReuse: false,
            gotAboutHome: false,
        };
    }


    componentWillReceiveProps(nextProps, nextContext) {
        const statusObj = nextProps.dataStatus;
        this.setState({
            gotServices: statusObj.gotServices,
            gotClientsReuse: statusObj.gotClientsReuse,
            gotWorksReuse: statusObj.gotWorksReuse,
            gotAboutHome: statusObj.gotAboutHome,
        })

    }


    render() {
        const {gotServices, gotClientsReuse, gotWorksReuse, gotAboutHome} = this.state;

        if (gotServices && gotClientsReuse && gotWorksReuse && gotAboutHome) {
            const hash = window.location.hash.substring(1);
            scrollToSection(hash);
        }





        return (
            <div className={gotServices && gotClientsReuse && gotWorksReuse && gotAboutHome ? 'fade-in visible' : 'fade-in'}>
                <HeaderComponent/>
                <section className="head-block">
                    <div className="slider-block">
                        <div className="slider-block__item">
                            <div className="slide">
                                <h2 className="slide__title">
                                    Project outsourcing and/or creating your own development team
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
                <section>
                   <ServiceComponent updateData={this.props.updateData}/>
                   <ClientsReuse updateData={this.props.updateData}/>
                   <WorksReuseComponent updateData={this.props.updateData} />
                   <AboutHomeComponent updateData={this.props.updateData}/>
                   <ConnectComponent/>
                   <FooterComponent/>
               </section>
            </div>
        );
    }
}

export default MainPageComponent;
