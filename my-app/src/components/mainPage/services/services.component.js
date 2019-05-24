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
        fetch('http://cp.stairwaysoft.com/api/wp/v2/posts?filter[category_name]=services')
            .then(response => response.json())
            .then(data => this.setState({services: data}));
    }

    render() {
        const { services } = this.state;
        return (
            <Fragment>
                <section className="bottom-padding-70" id='services'>
                    <h2 className="section-title" id="services">Services</h2>
                    <div className="container">
                        <div className="services-blocks">
                            {services.map(service =>
                                <Link key={service.id} to={'/services/' + service.slug} className="services-blocks__item blackout-block blackout-block--hover">
                                    <img src={service.featured_image_url} alt="dedicated engineering teams" />
                                    <div className="blackout-block__inner">
                                        <div className="blackout-block__title" dangerouslySetInnerHTML={{__html: service.title}}>
                                        </div>
                                        <p className="blackout-block__desc" dangerouslySetInnerHTML={{__html: service.data.short_description}}>
                                        </p>
                                        <div className="blackout-block__arrow"/>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default ServiceComponent;
