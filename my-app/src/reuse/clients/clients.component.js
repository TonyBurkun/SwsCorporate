import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import TinySlider from "tiny-slider-react";

const settings = {

    slideByPage             : false,
    loop                    : true,
    keyboard                : true,
    controlsText            : ['', ''],
    autoplayButtonOutput    : false,
    mouseDrag               : true,
    autoplay                : true,
    autoplayTimeout         : 8000,

};

class ClientsReuse extends Component {
    constructor(props) {
        super(props);

        this.state = {

            clients: [],
            reviews: [],
            slug: null,
            dataOfOutside: '',

        };

        this.getClientsList();

    }

    getClientsList() {

        fetch('https://panel.stairwaysoft.com/api/wp/v2/pages?slug=clients')
            .then(response => response.json())
            .then(data => {

                let reviews = [];

                this.setState({

                    clients: data[0].data.client,
                    slug: data[0].slug,
                    dataOfOutside: data,

                });

                data[0].data.client.forEach((val, key) => {

                    if (val.is_client_has_review) {

                        val.review.thumbnail = val.thumbnail;
                        reviews.push(val.review);

                    }

                });

                this.setState({

                    reviews: reviews

                });

                //set data of outside
                if (this.props.updateData.pageData) {

                    this.setState({

                        clients: this.props.updateData.clients,
                        reviews: this.props.updateData.reviews,
                        dataOfOutside: this.props.updateData.mainTitle__clients,

                    })

                }

                if (this.props.updateData.gotClientsReuse === true) {

                    this.props.updateData('gotClientsReuse', true);

                }

            });

    }

    componentWillUnmount() {

        if (this.props.updateData.gotClientsReuse === false) {

            this.props.updateData('gotClientsReuse', false);

        }

    }

    render() {

        let slug;
        let button;
        let clients = this.state.clients.slice(0, 9);
        let mainTitle__clients = this.props.updateData.mainTitle__clients || "Our clients";

        if (this.state.slug) {

            slug = this.state.slug;

        }

        let reviews = this.state.reviews;

        if (slug) {

            button = <div className="clients-list__item clients-list-block">
                <Link to={slug} className="clients-list-block__more-btn">More clients</Link>
            </div>

        }
        return (

            <Fragment>
                <section className="section-bg bottom-padding-70">

                    <h2 className="section-title">{mainTitle__clients}</h2>

                    <div className="container">

                        <div className="clients-list">

                            {clients.map(client =>

                                <div key={client.title} className="clients-list__item clients-list-block">
                                    <img src={client.thumbnail || client.url} alt="pdf filler logo"/>
                                </div>
                            )}

                            {button}

                        </div>

                        <TinySlider className="slider" settings={settings}>
                            {reviews.map(review =>
                                <div key={Math.random()} className="one-slide">
                                    <img src={review.thumbnail || review.image} className="one-slide__client-logo"
                                         alt=""/>
                                    <div className="one-slide__content">
                                        <div className="one-slide__feedback"
                                             dangerouslySetInnerHTML={{__html: review.description}}>
                                        </div>
                                        <div className="one-slide__name">
                                            {review.name}
                                        </div>
                                        <span className="one-slide__position">

                                            {review.position}

                                        </span>
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

