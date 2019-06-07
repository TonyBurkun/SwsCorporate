import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import TinySlider from "tiny-slider-react";

const settings = {
    slideByPage: false,
    loop: true,
    keyboard: true,
    controls: false,
    controlsText: ['', '']
};

class WorksComponent extends Component {
    constructor(props){
        super(props);
        window.scrollTo(0,0);

        this.state = {
            works : []
        };
        this.getWorksList();
    }

    getWorksList() {
        fetch('http://cp.stairwaysoft.com/api/wp/v2/posts?filter[category_name]=portfolio')
            .then(response => response.json())
            .then(data => this.setState({works: data}));
    }

    render() {
        let works = this.state.works;
        return (
            <Fragment>
                <section>
                    <div className="img-slider">
                        <TinySlider className="img-slider__init" settings={settings}>
                            <div className="img-slide">
                                <img src="img/services/slide_bg.jpg" className="img-slide__img-bg" alt="" />
                                <div className="img-slide__container">
                                    <div className="img-slide__text-wrapper">
                                        <div className="img-slide__short-text">Top case study</div>
                                        <h2 className="img-slide__slide-title">INSTANT DEDICATED SERVERS</h2>
                                        <div className="img-slide__text">
                                            <p>
                                                GLOBALTELEHOST Corp. was founded in 2012. Our leading
                                                specialists have more
                                                than twenty years of experience in the sphere of network
                                                technologies.
                                            </p>
                                        </div>
                                        {/*<div className="btn btn--upper img-slide__btn">read more</div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="img-slide">
                                <img src="img/services/slide_bg.jpg" className="img-slide__img-bg" alt="" />
                                <div className="img-slide__container">
                                    <div className="img-slide__text-wrapper">
                                        <div className="img-slide__short-text">Top case study</div>
                                        <h2 className="img-slide__slide-title">INSTANT DEDICATED SERVERS --
                                            2</h2>
                                        <div className="img-slide__text">
                                            <p>
                                                GLOBALTELEHOST Corp. was founded in 2012. Our leading
                                                specialists have more
                                                than twenty years of experience in the sphere of network
                                                technologies.
                                            </p>
                                        </div>
                                        {/*<div className="btn btn--upper img-slide__btn">read more</div>*/}
                                    </div>
                                </div>
                            </div>
                        </TinySlider>
                    </div>
                </section>
                <section className="section-bg bottom-padding-70">
                    <h2 className="section-title">Our case studies</h2>

                    <div className="container">
                        <div className="tab-wrapper">
                            {/*<div className="tabs">*/}
                            {/*    <button className="tablinks">All</button>*/}
                            {/*    <button className="tablinks">Web</button>*/}
                            {/*    <button className="tablinks">Mobile</button>*/}
                            {/*    <button className="tablinks">Game</button>*/}
                            {/*</div>*/}

                            <div className="tabcontent">
                                {works.map(work =>
                                    <Link to={'/work/' + work.slug} key={work.slug} className="tabcontent__item bottom-hover-block">
                                        <img src={work.featured_image_url} className="bottom-hover-block__img" alt=''/>
                                        <div className="bottom-hover-block__desc">
                                            <div className="bottom-hover-block__title-block">
                                                {work.title}
                                                <span className="bottom-hover-block__date">2 may 2018</span>
                                            </div>
                                            <div className="bottom-hover-block__text">
                                                {work.data.short_description}
                                            </div>

                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>


                    {/*<div className="btn-block btn-block--center">*/}
                    {/*    <div className="btn btn--upper">view more</div>*/}
                    {/*</div>*/}
                </section>
            </Fragment>
        );
    }
}

export default WorksComponent;
