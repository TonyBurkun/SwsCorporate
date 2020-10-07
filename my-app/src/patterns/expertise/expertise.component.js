import React, {Component, Fragment} from 'react';
//import { withRouter, Link } from "react-router-dom";
import TinySlider from "tiny-slider-react";
import HeaderComponent from '../../reuse/header/header.component';
import FooterComponent from '../../reuse/footer/footer.component';
import LoaderComponent from "../../reuse/loader/Loader.component";
import ContactComponent from "../../reuse/contact/contact.component";
import NotFound from "../../components/NotFound";
import ClientsReuse from "../../reuse/clients/clients.component";

//const settings = {
//
//    // mode                 : 'gallery',
//    slideByPage             : false,
//    loop                    : true,
//    keyboard                : true,
//    // controls                : false,
//    controlsText            : ['', ''],
//    autoplayButtonOutput    : false,
//    autoplay                : true,
//    autoplayTimeout         : 10000,
//    autoplayHoverPause      : false,
//    mouseDrag               : true,
//    speed                   : 820,
//
//
//};

const settingsV2 = {

    // mode                 : 'gallery',
    slideByPage             : false,
    loop                    : true,
    keyboard                : true,
    controls                : false,
    controlsText            : ['', ''],
    autoplayButtonOutput    : false,
    autoplay                : true,
    autoplayTimeout         : 8000,
    autoplayHoverPause      : false,
    mouseDrag               : true,
    speed                   : 820,


};

class ExpertiseComponent extends Component{

    constructor(props){

        super(props);
        window.scrollTo(0, 0);

        this.state = {

            pageData                : [],
            showLoader              : true,
            errorPage               : false,
            clientGallery           : '',
            clients                 : '',
            reviews                 : '',

        };

        this.getData(props.match.params[0]);

    }

    componentWillReceiveProps(nextProps, nextContext) {

        const prevParam = this.props.match.params.name;
        const nextParam = nextProps.match.params.name;

        if (prevParam !== nextParam){
            this.getData(nextParam);
            window.scrollTo({

                top: 0,
                behavior: "smooth",

            });
        }

    }

    componentDidMount(){

        this.getData(this.props.match.params[0]);

    }

    getData(slug) {

        const fetchNew = 'https://panel.stairwaysoft.com/api/wp/v2/pages?slug=/expertise-'+ slug;

        fetch(fetchNew)

            .then(response => response.json())

            .then(data => {

                if (data.length > 0) {

                    this.setState({

                        pageData                : data[0].data,
                        showLoader              : false,
                        errorPage               : false,

                        clients                 : data[0].data.gallary_our_clients_expertise_page,
                        reviews                 : data[0].data.slider_our_clients_expertise_page,
                        mainTitle__clients      : data[0].data.title_our_clients_expertise_page,

                    });

                } else {

                    this.setState({

                        errorPage               : true,

                    });

                }

            });

    }

    render(){

        const {pageData} = this.state;
        // const clientGallery = pageData.gallary_our_clients_expertise_page;
        // const clientSlider = pageData.slider_our_clients_expertise_page;

        if (pageData.length === 0 && this.state.errorPage === true) {

            return <NotFound />

        }else {

            return (

               <Fragment>

                    <LoaderComponent visible={this.state.showLoader}/>

                    <HeaderComponent/>

                    {pageData.image_expertise_page &&

                    <section className="expertise-top-block">
                        <img className="expertise-top-block__img" src={pageData.image_expertise_page} alt="expertise_image" />
                    </section>

                    }

                    {pageData.title_tems_expertise_page &&
                    <section className="title-block-expertise" >
                        <div className="container width95">

                            <h2 className="title-block__title section-title section-title--large section-title--purple">

                                {pageData.title_tems_expertise_page}

                            </h2>

                            <div className="sub-title-text">

                                {pageData.description_tems_expertise_page}

                            </div>

                        </div>
                    </section>
                    }

                    {pageData.title_our_clients_expertise_page &&

                    <section className="slider-animate-v1 section-bg bottom-padding-70">

                        {/*<h2 className="section-title">{pageData.title_our_clients_expertise_page}</h2>*/}
                        {/*                <div className="container width95">*/}

                        {/*    {clientGallery &&*/}
                        {/*        <div className="clients-list">*/}
                        {/*        {*/}

                        {/*           clientGallery.map( (item, index) => {*/}

                        {/*            return(*/}

                        {/*                <div className="clients-list__item clients-list-block" key={index}>*/}
                        {/*                    <img src={item.url} alt={item.title} />*/}
                        {/*                </div>*/}

                        {/*            )})*/}

                        {/*        }*/}


                        {/*        <div className="clients-list__item clients-list-block">*/}

                        {/*            <Link to={"/clients"} className="clients-list-block__more-btn">More clients</Link>*/}

                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    }*/}
                        {/*    {clientSlider &&*/}

                        {/*    <TinySlider className="slider" settings={settings}>*/}
                        {/*        {clientSlider.map(review =>*/}
                        {/*            <div key={Math.random()} className="one-slide">*/}
                        {/*                <img src={review.image} className="one-slide__client-logo" alt="" />*/}
                        {/*                <div className="one-slide__content">*/}
                        {/*                    <div className="one-slide__feedback" dangerouslySetInnerHTML={{__html: review.description}}>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="one-slide__name">*/}
                        {/*                        {review.name}*/}
                        {/*                    </div>*/}
                        {/*                    <span className="one-slide__position">{review.position}</span>*/}
                        {/*                </div>*/}

                        {/*            </div>*/}
                        {/*        )}*/}
                        {/*    </TinySlider>}*/}


                        {/*</div>*/}
                        <ClientsReuse updateData={this.state}/>

                        </section>

                    }

                    {pageData.title_works__expertise_page &&
                    <section className="technologies-section work v2">

                        <div className="container">

                            <div className="title__global">{pageData.title_works__expertise_page}</div>

                            {pageData.slider_works__expertise_page &&

                            <TinySlider className="img-slider__init" settings={settingsV2} >

                                {pageData.slider_works__expertise_page.map((item, index) => {

                                    return (

                                        <div key={index} className="img-slide">

                                            <div className='img-slide__container'>

                                                <img src={item["image"]["url"]} className="img-slide__img-bg"
                                                     key={index}
                                                     alt=""/>

                                                <div className="img-slide__text-wrapper">

                                                    <div className="img-slide__text-wrapper__contain">

                                                        <div
                                                            className="img-slide__short-text"> {item["sub_title"]}</div>

                                                        <h2 className="img-slide__slide-title">{item['title']}</h2>
                                                        <div className="img-slide__text">

                                                            <p>
                                                                {item['description']}
                                                            </p>

                                                        </div>

                                                        <a href={item['button_link']}
                                                           className="btn btn--160w btn--upper img-slide__btn ">view
                                                            more</a>

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
                    }

                    {pageData.text_under_slider_works__expertise_page &&
                    <section className="bottom-padding-70 expertise-works ">

                        <div className="container width95">

                            {pageData.text_under_slider_works__expertise_page &&
                                <h2 className="section-title">
                                    {pageData.text_under_slider_works__expertise_page}
                                </h2>
                            }
                            <div className="two-sides-text">
                                {pageData.description_under_slider_works__expertise_page_left &&

                                    <div className="two-sides-text__one-side" dangerouslySetInnerHTML={{__html: pageData.description_under_slider_works__expertise_page_left}}>
                                    </div>

                                }
                                {pageData.description_under_slider_works__expertise_page_right &&
                                    <div className="two-sides-text__one-side"  dangerouslySetInnerHTML={{__html: pageData.description_under_slider_works__expertise_page_right}}>
                                    </div>
                                }
                            </div>
                        </div>
                    </section>
                    }

                    {pageData.image_our_team_expertise_page &&
                    <section className="out-team-section">

                        <h2 className="section-title">Our team</h2>
                        <div className="out-team-img-block">
                            <img src={pageData.image_our_team_expertise_page} alt="image_of_team" />
                        </div>

                    </section>
                    }

                    {pageData.title_how_it_works &&
                        <section className="how_to_it_works" >
                            <div className="container width95">
                                <h2 className="section-title">{pageData.title_how_it_works}</h2>

                                <div className="direction-block direction-block--narrow">

                                    {pageData.box_how_it_works.map((item, index)=>{

                                        return (<div className="direction-block__col direction-col direction-col--grey-bg" key={index}>
                                            <div className="direction-col__title direction-col__title--small">
                                               <span>
                                                   {item.title}
                                               </span>
                                            </div>
                                            <div className="direction-col__text direction-col__text--small">
                                                {item.description}
                                            </div>
                                        </div>)

                                    })}


                                </div>


                            </div>
                        </section>
                    }

                    {pageData.title_why_us_expertise &&
                        <section className="bottom-padding-70 why-use-section">
                            <div className="container width95">
                                <h2 className="section-title">{ pageData.title_why_us_expertise }</h2>
                                <div className="icon-text-block">

                                    {pageData.box_why_us_expertise.map((item, index)=>{

                                        return (

                                            <div className="icon-text-block__one" key={index}>
                                                <div className="icon-text-block__wrap icon-text-block__wrap--add-pin">
                                                    <h5 className="h5-title h5-title--purple h5-title--small">{item.title}</h5>
                                                    <div className="icon-text-block__text">
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        )

                                    })}

                                </div>
                            </div>
                        </section>
                    }

                    <ContactComponent/>

                    <FooterComponent/>

                </Fragment>

            )


        }

    }

}

export default ExpertiseComponent;