import React, {Component, Fragment} from "react";

class ServiceComponent extends Component {

    render() {
        return (
            <Fragment>
                <section className="bottom-padding-70">
                    <h2 className="section-title">Services</h2>
                    <div className="container">
                        <div className="services-blocks">
                            <a href="/#" className="services-blocks__item blackout-block blackout-block--hover">
                                <img src='/img/main/hello-i-m-nik-582517-unsplash.jpg' alt="dedicated engineering teams" />
                                    <div className="blackout-block__inner">
                                        <div className="blackout-block__title">Dedicated Engineering <br/> Teams</div>
                                        <p className="blackout-block__desc">
                                            Our Team of engineers is assigned
                                            to each partner, following partner's
                                            practices, methodologies, standards and culture. Most of our engineers
                                            have master in computer science.
                                        </p>
                                        <div className="blackout-block__arrow"></div>
                                    </div>
                            </a>
                            <a href="/#" className="services-blocks__item blackout-block blackout-block--hover">
                                <img src="img/main/markus-spiske-507983-unsplash.jpg" alt="cystom software development" />
                                    <div className="blackout-block__inner">
                                        <div className="blackout-block__title">Custom software <br/> Development
                                        </div>
                                        <p className="blackout-block__desc">
                                            Our Team of engineers is assigned
                                            to each partner, following partner's
                                            practices, methodologies, standards and culture. Most of our engineers
                                            have master in computer science.
                                        </p>
                                        <div className="blackout-block__arrow"></div>
                                    </div>
                            </a>
                            <a href="/#" className="services-blocks__item blackout-block blackout-block--hover">
                                <img src="img/main/ipad-820272_1920.jpg" alt="test driven development" />
                                    <div className="blackout-block__inner">
                                        <div className="blackout-block__title">Test Driven <br/> Development</div>
                                        <p className="blackout-block__desc">
                                            Our Team of engineers is assigned
                                            to each partner, following partner's
                                            practices, methodologies, standards and culture. Most of our engineers
                                            have master in computer science.
                                        </p>
                                        <div className="blackout-block__arrow"></div>
                                    </div>
                            </a>
                            <a href="/#" className="services-blocks__item blackout-block blackout-block--hover">
                                <img src="img/main/computer-768608_1920.jpg" alt="prototyping & design" />
                                    <div className="blackout-block__inner">
                                        <div className="blackout-block__title">Prototyping <br/> & design</div>
                                        <p className="blackout-block__desc">
                                            Our Team of engineers is assigned
                                            to each partner, following partner's
                                            practices, methodologies, standards and culture. Most of our engineers
                                            have master in computer science.
                                        </p>
                                        <div className="blackout-block__arrow"></div>
                                    </div>
                            </a>
                            <a href="/#" className="services-blocks__item blackout-block blackout-block--hover">
                                <img src="img/main/ux-787980_1920.jpg" alt="mobile app development" />
                                    <div className="blackout-block__inner">
                                        <div className="blackout-block__title">Mobile app <br/> development</div>
                                        <p className="blackout-block__desc">
                                            Our Team of engineers is assigned
                                            to each partner, following partner's
                                            practices, methodologies, standards and culture. Most of our engineers
                                            have master in computer science.
                                        </p>
                                        <div className="blackout-block__arrow"></div>
                                    </div>
                            </a>
                            <a href="/#" className="services-blocks__item blackout-block blackout-block--hover">
                                <img src="img/main/rawpixel-com-558596-unsplash.jpg" alt="support & protection" />
                                    <div className="blackout-block__inner">
                                        <div className="blackout-block__title">Suppoprt & <br/> protection</div>
                                        <p className="blackout-block__desc">
                                            Our Team of engineers is assigned
                                            to each partner, following partner's
                                            practices, methodologies, standards and culture. Most of our engineers
                                            have master in computer science.
                                        </p>
                                        <div className="blackout-block__arrow"></div>
                                    </div>
                            </a>
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
