import React, {Component, Fragment} from 'react';
import ServiceComponent from './services/services.component';
import ClientsReuse from '../../reuse/clients/clients.component';
import WorksReuseComponent from '../../reuse/works/works.component';
import AboutHomeComponent from './about/about.component';
import ConnectComponent from '../../reuse/connect/connect.component';
import HeaderComponent from '../../reuse/header/header.component';
import FooterComponent from '../../reuse/footer/footer.component';
import {scrollToSection} from '../../utils/scrollToSection'
import LoaderComponent from "../../reuse/loader/Loader.component";


class MainPageComponent extends Component {

    constructor(props){

        super(props);
        window.scrollTo(0,0);
        this.state={

            gotServices: false,
            gotClientsReuse: false,
            gotWorksReuse: false,
            gotAboutHome: false,
            showLoader: true,

        };

    }


    componentWillReceiveProps(nextProps, nextContext) {

        const statusObj = nextProps.dataStatus;

        console.log(statusObj.gotClientsReuse);

        this.setState({
            gotServices: statusObj.gotServices ,
            gotClientsReuse: statusObj.gotClientsReuse || true,
            gotWorksReuse: statusObj.gotWorksReuse,
            gotAboutHome: statusObj.gotAboutHome,
            showLoader: false,
            data: '',

        });

        fetch('https://panel.stairwaysoft.com/api/wp/v2/pages/1120')
            .then(response => response.json())

            .then(data => {

                this.setState({

                    data: data.data,

                })

            })

            .catch(

                err=>{

                    console.log(err);

                }

            )

    }

    render() {

        const {gotServices, gotClientsReuse, gotWorksReuse, gotAboutHome} = this.state;

        if (gotServices && gotClientsReuse && gotWorksReuse && gotAboutHome) {

            const hash = window.location.hash.substring(1);

            if (hash.length) {
                scrollToSection(hash);
            }

        }
        const data = this.state.data;
        console.log(data);


        return (
            <Fragment>
                <LoaderComponent visible={this.state.showLoader}/>

                <HeaderComponent/>

                <section className="head-block">
                    <div className="slider-block">
                        <div className="slider-block__item">
                            <div className="slide">
                                <h2 className="slide__title">

                                    {data && data.section_header_title}

                                </h2>
                                <p className="slide__desc">

                                    {data && data.section_header_description}

                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>

                   <ServiceComponent updateData={this.props.updateData}/>

                   <section className="slider-animate-v1">

                        <ClientsReuse updateData={this.props.updateData}/>

                    </section>

                   <WorksReuseComponent updateData={this.props.updateData} links={[{caseStudy: this.props.links[0]}]} />
                   <AboutHomeComponent updateData={this.props.updateData}/>
                   <ConnectComponent/>
                   <FooterComponent/>

               </section>

            </Fragment>
        );
    }
}

export default MainPageComponent;
