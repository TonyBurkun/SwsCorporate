import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";

class ServiceComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            services : []
        };

        this.getServiceList();
    }

    getServiceList() {
        fetch('http://sws.local/api/wp/v2/posts?filter[category_name]=services')
            .then(response => response.json())
            .then(data => this.setState({services: data}));
    }

    render() {
        const { services } = this.state;
        return (
            <Fragment>
                <section className="bottom-padding-70">
                    <h2 className="section-title">Services</h2>
                    <div className="container">
                        <div className="services-blocks">
                            {services.map(service =>
                                <Link key={service.id} to={'/service/' + service.slug} className="services-blocks__item blackout-block blackout-block--hover">
                                    <img src={service.featured_image_url} alt="dedicated engineering teams" />
                                    <div className="blackout-block__inner">
                                        <div className="blackout-block__title" dangerouslySetInnerHTML={{__html: service.title.rendered}}>
                                        </div>
                                        <p className="blackout-block__desc" dangerouslySetInnerHTML={{__html: service.excerpt.rendered}}>
                                        </p>
                                        <div className="blackout-block__arrow"></div>
                                    </div>
                                </Link>
                            )}
                        </div>
                        <div className="btn-block btn-block--center">
                            <div className="btn btn--upper">more services</div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default ServiceComponent;
