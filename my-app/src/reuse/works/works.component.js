import React, {Component, Fragment} from "react";

class WorksComponent extends Component {

    render() {
        return (
            <Fragment>
                <section className="bottom-padding-70">
                    <h2 className="section-title">Our works</h2>
                    <div className="container">
                        <div className="works-list">
                            <a href="/#" className="works-list__item one-work-block blackout-block">
                                <img src="img/main/our_works/big_pic1.jpg" alt="example of work" />
                                    <div className="blackout-block__inner blackout-block__inner--bottom">
                                        <div className="blackout-block__title">
                                            Stairwaysoft concept site
                                            <span>Tel Aviv, IS</span>
                                        </div>
                                    </div>
                            </a>
                            <a href="/#" className="works-list__item one-work-block blackout-block">
                                <img src="img/main/our_works/pic2.jpg" alt="example of work" />
                                    <div className="blackout-block__inner blackout-block__inner--bottom">
                                        <div className="blackout-block__title">
                                            Zooltan
                                            <span>Dubai, UAE</span>
                                        </div>
                                    </div>
                            </a>
                            <a href="/#" className="works-list__item one-work-block blackout-block">
                                <img src="img/main/our_works/pic3.jpg" alt="example of work" />
                                    <div className="blackout-block__inner blackout-block__inner--bottom">
                                        <div className="blackout-block__title">
                                            Cristal Works
                                            <span>Los Angeles, US</span>
                                        </div>
                                    </div>
                            </a>
                            <a href="/#" className="works-list__item one-work-block blackout-block">
                                <img src="img/main/our_works/pic4.jpg" alt="example of work" />
                                    <div className="blackout-block__inner blackout-block__inner--bottom">
                                        <div className="blackout-block__title">
                                            mobile Concept
                                            <span>London, UK</span>
                                        </div>
                                    </div>
                            </a>
                            <a href="/#" className="works-list__item one-work-block blackout-block">
                                <img src="img/main/our_works/pic5.jpg" alt="example of work" />
                                    <div className="blackout-block__inner blackout-block__inner--bottom">
                                        <div className="blackout-block__title">
                                            Stairwaysoft mobile
                                            <span>Odessa, UA</span>
                                        </div>
                                    </div>
                            </a>
                            <a href="/#" className="works-list__item one-work-block blackout-block">
                                <img src="img/main/our_works/pic6.jpg" alt="example of work" />
                                    <div className="blackout-block__inner blackout-block__inner--bottom">
                                        <div className="blackout-block__title">
                                            pykhtychovye skazki
                                            <span>Latvia</span>
                                        </div>
                                    </div>
                            </a>
                        </div>

                        <div className="btn-block btn-block--center">
                            <div className="btn btn--upper">more cases</div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default WorksComponent;
