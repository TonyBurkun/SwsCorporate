import React, {Component, Fragment} from 'react';
import WorksReuseComponent from "../../reuse/works/works.component";
import ContactComponent from "../../reuse/contact/contact.component";

class oneServiceComponent extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);

        this.state = {
            oneService: {},
            title: null,
            short_description: null
        };
        this.getServiceData(props.match.params.name);

    }

    componentWillUnmount() {
    }

    getServiceData(slug) {
        fetch('http://cp.stairwaysoft.com/api/wp/v2/posts?slug=' + slug)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    oneService: data[0].data,
                    title: data[0].title,
                    short_description: data[0].data.short_description,
                })
            });

    }


    render() {

        const {oneService, title, short_description} = this.state;

        return (

            <Fragment>
                <section className="top-img-section top-img-section--services">
                    <div className="top-img-section__container">
                        <div className="top-img-section__content-wrapper">
                            <h2 className="section-title section-title--large section-title--left top-img-section__title"
                                dangerouslySetInnerHTML={{__html: title}}>
                            </h2>
                            <div className="top-img-section__text-wrapper"
                                 dangerouslySetInnerHTML={{__html: short_description}}>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-85 bottom-padding-70">
                    <div className="container">
                        <div className="image-text-block">
                            <div className="image-text-block__wrapper">
                                <h2 className="section-title image-text-block__title">
                                    Explore our expertise
                                </h2>
                                {oneService.explore_our_expertise && (
                                    <div
                                        dangerouslySetInnerHTML={{__html: oneService.explore_our_expertise.description}}>
                                    </div>
                                )}
                            </div>
                            {oneService.explore_our_expertise && (
                                <img src={oneService.explore_our_expertise.image} className="image-text-block__img"
                                     alt="explore our expertise"/>
                            )}
                        </div>
                    </div>
                </section>
                <section className="pt-85 section-bg">
                    <div className="container">
                        <div className="three-column-block">
                            {oneService.box_repeater && oneService.box_repeater.map(item =>
                                <div key={item.title} className="three-column-block__col text-column">
                                    <h4 className="h4-title h4-title--purple text-column__title">
                                        {item.title}
                                    </h4>
                                    <div className="text-column__text"
                                         dangerouslySetInnerHTML={{__html: item.description}}>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </section>

                <ContactComponent/>

                <WorksReuseComponent/>

            </Fragment>

        );
    }
}

export default oneServiceComponent;
