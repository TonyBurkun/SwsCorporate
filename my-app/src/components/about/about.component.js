import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";

class AboutHomeComponent extends Component {

    render() {
        return (
            <Fragment>
                <section>
                    <div className="container">
                        <div className="company-facts">
                            <div className="company-facts__item fact-block">
                                <img className="fact-block__icon" src="img/svg_icons/years.svg" alt="" />
                                    <div className="fact-block__desc">
                                        <div className="fact-block__value">5+</div>
                                        <div className="fact-block__sub">years on marketplace</div>
                                    </div>
                            </div>
                            <div className="company-facts__item fact-block">
                                <img className="fact-block__icon" src="img/svg_icons/projects.svg" alt="" />
                                    <div className="fact-block__desc">
                                        <div className="fact-block__value">200+</div>
                                        <div className="fact-block__sub">project implemented</div>
                                    </div>
                            </div>
                            <div className="company-facts__item fact-block">
                                <img className="fact-block__icon" src="img/svg_icons/prof.svg" alt="" />
                                    <div className="fact-block__desc">
                                        <div className="fact-block__value">60+</div>
                                        <div className="fact-block__sub">professional specialists</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bottom-padding-70">
                    <div className="container">
                        <div className="about-block">
                            <div className="about-block__text">
                                <h2 className="section-title section-title--left about-block__title">About
                                    StairwaySoft</h2>
                                <p>
                                    StairwaySoft is an Israeli and Ukraine based engineering
                                    provider of innovative software development services with a team
                                    of 60+ expert engineers. We services various businesses globally to create solutions
                                    and help companies achieve their technology goals.
                                    StairwaySoft is an Israeli and Ukraine based engineering provider of innovative
                                    software development services with a team of 60+ expert engineers. We services
                                    various businesses globally to create solutions
                                    and help companies achieve their technology goals.

                                </p>
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
