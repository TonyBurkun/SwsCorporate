import React, {Component, Fragment} from 'react';
//import { withRouter } from "react-router-dom";
import TinySlider from "tiny-slider-react";
import HeaderComponent from '../../reuse/header/header.component';
import FooterComponent from '../../reuse/footer/footer.component';
import LoaderComponent from "../../reuse/loader/Loader.component";
import ContactComponent from "../../reuse/contact/contact.component";
import NotFound from "../../components/NotFound";

const settings = {

    // mode                 : 'gallery',
    slideByPage             : false,
    loop                    : true,
    keyboard                : true,
    controls                : false,
    controlsText            : ['', ''],
    autoplayButtonOutput    : false,
    autoplay                : true,
    autoplayTimeout         : 10000,
    autoplayHoverPause      : false,
    mouseDrag               : true,
    speed                   : 820,
    prevParam           : "",
    nextParam           :"",


};

class TechnologiesComponent extends Component{

    constructor(props){

        super(props);
        window.scrollTo(0, 0);

        this.state = {

            pageData                : [],
            showLoader              : true,
            whyBoxs                 : [],
            workedWith              : [],
            sliderData              : [],
            DrivenPlatformsImage    : [],
            errorPage               : false,
            prevParam               : "",
            nextParam               : "",

        };

//        this.getData(props.match.params[0]);

        
        const getLinkArr = window.location.pathname.split("/");
        this.getData(getLinkArr[getLinkArr.length-1] || getLinkArr[getLinkArr.length - 2]);

    }

    componentWillReceiveProps(nextProps, nextContext) {

        const getLinkArr = window.location.pathname.split("/");
        const getLinkArrValidate = getLinkArr[getLinkArr.length-1] || getLinkArr[getLinkArr.length - 2];

        this.setState(
            {
                nextParam:  getLinkArrValidate,
            }
        );

        const prevParam = this.state.prevParam;
        const nextParam = getLinkArrValidate.split("-")[1];

        if (prevParam !== nextParam){

            this.getData(nextParam);

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        }

    }

    componentDidMount(){

        this.getData(this.props.match.params[0]);

    }


    getData(slug) {

        const fetchNew = 'https://panel.stairwaysoft.com/api/wp/v2/pages?slug=/technologies-'+ slug;

        fetch(fetchNew)

            .then(response => response.json())

            .then(data => {

                if (data.length) {

                    this.setState({

                        pageData                : data[0].data,
                        whyBoxs                 : data[0].data.technologies_why_section_contain_box_of_repeat,
                        workedWith              : data[0].data.box_we_worked_with_technologies_section,
                        sliderData              : data[0].data.image_slide_work_technologies_section,
                        DrivenPlatformsImage    : data[0].data.image_driven_platforms_technologies_section,
                        errorPage               : false,
                        showLoader              : false,

                    });

                } else {

                    this.setState({

                        errorPage   : true,

                    });

                    setTimeout(()=>{

                        this.setState({

                            showLoader   : false,

                        });

                    }, 500)

                }

            });

    }

    render(){

        const {pageData} = this.state;
        const whyBoxs = this.state.whyBoxs;
        const workedWith = this.state.workedWith;
        const sliderData = this.state.sliderData;
        const DrivenPlatformsImage = this.state.DrivenPlatformsImage;
        let  classNameForSectionTechnologies;
        if (sliderData.length > 1){

            classNameForSectionTechnologies = "technologies-section work";

        }else if ( sliderData.length < 2 ){

            classNameForSectionTechnologies = "technologies-section work onlyOne";

        }

        console.log(this.state);

        if ( this.state.showLoader === false && pageData.length === 0 && this.state.errorPage === true) {

            return <NotFound />

        }else {

            return (

                <Fragment>

                    <LoaderComponent visible={this.state.showLoader}/>
                    <HeaderComponent/>

                    {pageData.technologies_image_section_image && <section className='technologies-img-section'>

                        <img className='technologies-img-section__img' src={pageData.technologies_image_section_image}
                             alt="team_img"/>
                        <div className='technologies-img-section__text-block'>

                            <h1 className='technologies-img-section__title'>{pageData.technologies_image_section_title}</h1>
                            <div
                                className="technologies-img-section__description">{pageData.technologies_image_section_paragraph}</div>

                        </div>

                    </section>
                    }

                    {pageData.technologies_project_section_project_title_p_l &&
                    <section className="technologies-section project">

                        <div className="technologies-section__container project df aife m_fdc">

                        <div className="project__text">

                        <div className="title__global">

                    {pageData.technologies_project_section_project_title_p_l}

                        </div>

                        <div className="desc"
                        dangerouslySetInnerHTML={{__html: pageData.technologies_project_section_project_description_p_l}}/>

                        </div>

                        <div className="project__complex df jcc aic">

                        <img src={pageData.technologies_project_section_project_image} alt=""/>

                        </div>

                        </div>

                        </section>
                    }

                    {pageData.technologies_why_section__title &&
                    <section className="technologies-section why">

                        <div className="container">

                            <div className="title__global">

                                {pageData.technologies_why_section__title}

                            </div>

                            <div className="why__repeat-box">

                                {whyBoxs.map((item, index) => {

                                    return (

                                        <div className="why-repeat-box__contain" key={index}>

                                            <div className="contain__left">

                                                <img src={item.img} alt=""/>

                                            </div>

                                            <div className="contain__right">

                                                <div className="contain-right__title">

                                                    {item.title}

                                                </div>

                                                <div className="contain-right__desc">

                                                    {item.description}

                                                </div>

                                            </div>

                                        </div>

                                    )

                                })}


                            </div>

                        </div>

                    </section>
                    }
                    {pageData.title_we_worked_with_technologies_section &&
                    <section className="technologies-section worked-with">

                        <div className="container">

                            <div className="title__global">

                                {pageData.title_we_worked_with_technologies_section}

                            </div>

                            <div className="worked-with__box-container">

                                {workedWith.map((item, index) => {

                                    return (

                                        <div className="contain" key={index}>

                                            <div className="image">

                                                <img src={item.image} alt=""/>

                                            </div>

                                            <div className="description">

                                                {item.description}

                                            </div>

                                        </div>

                                    )

                                })}


                            </div>


                        </div>

                    </section>
                    }

                    {sliderData &&
                    <section className={classNameForSectionTechnologies}>

                        <div className="container width95">

                            <div className="title__global">Works</div>

                            {sliderData && sliderData.length &&
                            <TinySlider className={"img-slider__init"} settings={settings}>

                                {sliderData.map((item, index) => {

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

                    {pageData.title_driven_platforms_technologies_section &&

                    <section className="technologies-section driven_platforms">

                        <div className="container">

                            <div className="title__global">

                                {pageData.title_driven_platforms_technologies_section}

                            </div>

                            <div className="container-img-of-patforms">

                                {DrivenPlatformsImage.map((item, index) => {

                                    return (

                                        <div className="container-img_of-patforms-image-item" key={index}>

                                            <img src={item.link} alt="" className="container-img-of-patforms-image"/>

                                        </div>

                                    )

                                })}

                            </div>

                        </div>

                    </section>

                    }

                    <ContactComponent/>

                    <FooterComponent />

                </Fragment>

            );

            return (

                this.setState({

                    prevP       :   window.location.pathname.split("/"),
                    prevParam   :   this.state.prevP[this.state.prevP.length - 1] || this.state.prevP[this.state.prevP.length - 2],

                })

            );


        }

    }

}

export default TechnologiesComponent;