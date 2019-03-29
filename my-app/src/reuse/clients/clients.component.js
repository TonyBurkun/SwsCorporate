import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import TinySlider from "tiny-slider-react";

const settings = {
    slideByPage: false,
    loop: true,
    keyboard: true,
    controlsText: ['', ''],
};

class ClientsReuse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: [],
            reviews: [],
            slug: null
        };

        this.getClientsList();


    }
    getClientsList() {
        fetch('http://cp.stairwaysoft.com/api/wp/v2/pages?slug=clients')
            .then(response => response.json())
            .then(data => {
                let reviews = [];
                this.setState({clients: data[0].data.client});
                this.setState({slug: data[0].slug});
                data[0].data.client.forEach((val, key) => {
                    if(val.is_client_has_review){
                        val.review.thumbnail = val.thumbnail;
                        reviews.push(val.review);
                    }
                });
                this.setState({reviews: reviews});
            });
    }
    render() {
        let slug;
        let button;
        let clients = this.state.clients.slice(0,9);
        if(this.state.slug) {
           slug = this.state.slug;
        }
        let reviews = this.state.reviews;
        if(slug){
           button = <div className="clients-list__item clients-list-block">
                    <Link  to={slug} className="clients-list-block__more-btn">More clients</Link >
                    </div>
        }
        return (
            <Fragment>
                <section className="section-bg bottom-padding-70">
                    <h2 className="section-title">Our clients</h2>
                    <div className="container">
                        <div className="clients-list">
                            {clients.map(client =>
                                <div key={client.title} className="clients-list__item clients-list-block">
                                    <img src={client.thumbnail} alt="pdf filler logo" />
                                </div>
                            )}
                            {button}
                        </div>
                        <TinySlider className="slider" settings={settings}>
                            {reviews.map(review =>
                                <div key={Math.random()} className="one-slide">
                                    <img src={review.thumbnail} className="one-slide__client-logo" alt="" />
                                    <div className="one-slide__content">
                                        <div className="one-slide__feedback" dangerouslySetInnerHTML={{__html: review.description}}>
                                        </div>
                                        <div className="one-slide__name">
                                            {review.name}
                                        </div>
                                        <span className="one-slide__position">{review.position}</span>
                                    </div>
                                </div>
                            )}
                        </TinySlider>
                    </div>
                </section>
            </Fragment>
        );
    }
}
export default ClientsReuse;
