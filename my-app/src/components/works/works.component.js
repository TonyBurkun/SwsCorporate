import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import TinySlider from "tiny-slider-react";
import HeaderComponent from '../../reuse/header/header.component';
import FooterComponent from '../../reuse/footer/footer.component';
import LoaderComponent from "../../reuse/loader/Loader.component";

const settings = {

    mode: 'gallery',
    slideByPage: false,
    loop: true,
    keyboard: true,
    controls: false,
    controlsText: ['', ''],
    autoplayButtonOutput: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    mouseDrag: true,
    speed: 820,


};

class WorksComponent extends Component {
    constructor(props){
        super(props);
        window.scrollTo(0,0);

        this.state = {

            works : [],
            showLoader: true,
            sliderData: [],

        };

        this.getTopSliderData();
        this.getWorksList();

    }

    getTopSliderData(){

        fetch('https://panel.stairwaysoft.com/api/acf/v3/options/options')
            .then(response => response.json())
            .then(data => {

                let top_slider_success_stories = data.acf.top_slider_success_stories;

                this.setState({
                    sliderData: top_slider_success_stories
                })

            })

    }

    getWorksList() {
        fetch('https://panel.stairwaysoft.com/api/wp/v2/posts?filter[category_name]=portfolio')
            .then(response => response.json())
            .then(data =>{


                data.sort(function(a, b){
                    return a.data.order-b.data.order
                });

                this.setState({

                    works: data,
                    showLoader: false

                })

            });

    }

    render() {

        let {works, sliderData} = this.state;

        return (

            <Fragment>
                <LoaderComponent visible={this.state.showLoader}/>

                <HeaderComponent/>

                <section className="portfolio_slider" >

                    <div className="img-slider">

                        {sliderData && sliderData.length &&

                        <TinySlider className="img-slider__init" settings={settings}>

                            {sliderData.map((item, index) => {

                                let getLinkOfButoon = item['button_link'];
                                let getArrOfLinkOfButoon = getLinkOfButoon.split('/');
                                let getOfArrValidateLinks = getArrOfLinkOfButoon[getArrOfLinkOfButoon.length - 2];
                                let linkButton ={ url: getOfArrValidateLinks};

                                return (


                                    <div key={index} className="img-slide">

                                        <div className='img-slide__container'>

                                            <img src={item["image"]["url"]} className="img-slide__img-bg"  key={index} alt=""/>

                                            <div className="img-slide__text-wrapper">

                                                <div className="img-slide__text-wrapper__contain">

                                                    <div className="img-slide__short-text"> {item["sub_title"]}</div>

                                                    <h2 className="img-slide__slide-title">{item['title']}</h2>
                                                    <div className="img-slide__text">

                                                        <p>

                                                            {item['description']}

                                                        </p>

                                                    </div>

                                                    <Link to={"/case-studies/"+linkButton.url} className="btn btn--160w btn--upper img-slide__btn ">read more</Link>

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                );



                            })}

                        </TinySlider>
                        }
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
                                    <Link to={'/case-studies/' + work.slug} key={work.slug} className="tabcontent__item bottom-hover-block">
                                        <img src={work.featured_image_url} className="bottom-hover-block__img" alt=''/>
                                        <div className="bottom-hover-block__desc">
                                            <div className="bottom-hover-block__title-block">
                                                {work.title}
                                                {<span className="bottom-hover-block__date"> {work.portfolio_date_short_post}</span>}
                                                <span className="bottom-hover-block__date">{work.data.portfolio_date_short_post}</span>
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
                <FooterComponent/>
            </Fragment>
        );
    }
}

export default WorksComponent;
