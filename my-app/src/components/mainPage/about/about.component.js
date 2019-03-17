import React, {Component, Fragment} from "react";

class AboutHomeComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            about: []
        };

        this.getClientsList();
    }

    getClientsList() {
        fetch('http://sws.local/api/wp/v2/pages?slug=about')
            .then(response => response.json())
            .then(data => {
                this.setState({about: data[0]});
            });
    }
    render() {
        let about = this.state.about;
        return (
            <Fragment>
                <section>
                    <div className="container">
                        <div className="company-facts">
                            {about.data && about.data.info_list.years && (
                                <div className="company-facts__item fact-block">
                                    <img className="fact-block__icon" src="img/svg_icons/years.svg" alt="" />
                                    <div className="fact-block__desc">
                                        <div className="fact-block__value">{about.data.info_list.years}</div>
                                        <div className="fact-block__sub">years on marketplace</div>
                                    </div>
                                </div>
                            )}
                            {about.data && about.data.info_list.project && (
                                <div className="company-facts__item fact-block">
                                    <img className="fact-block__icon" src="img/svg_icons/projects.svg" alt="" />
                                    <div className="fact-block__desc">
                                        <div className="fact-block__value">{about.data.info_list.project}</div>
                                        <div className="fact-block__sub">project implemented</div>
                                    </div>
                                </div>
                            )}
                            {about.data && about.data.info_list.specialists && (
                                <div className="company-facts__item fact-block">
                                    <img className="fact-block__icon" src="img/svg_icons/prof.svg" alt="" />
                                    <div className="fact-block__desc">
                                        <div className="fact-block__value">{about.data.info_list.specialists}</div>
                                        <div className="fact-block__sub">professional specialists</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="bottom-padding-70">
                    <div className="container">
                        <div className="about-block">
                            <div className="about-block__text">
                                <h2 className="section-title section-title--left about-block__title">{about.title}</h2>
                                {about.data && about.data.description && (
                                    <div dangerouslySetInnerHTML={{__html: about.data.description}}>
                                    </div>
                                )}
                            </div>
                            <div className="about-block__img world-map-block">
                                <div className="world-map-block__inner">
                                    <div className="odessa-pin">
                                        <div className="odessa-pin__icon"></div>
                                        <div className="odessa-pin__text">Odessa, UA</div>

                                    </div>
                                    <div className="tel-aviv-pin">
                                        <div className="tel-aviv-pin__icon"></div>
                                        <div className="tel-aviv-pin__text">Tel Aviv, IL</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default AboutHomeComponent;
