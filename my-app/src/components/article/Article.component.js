import React, {Component, Fragment} from 'react';
import LoaderComponent from "../../reuse/loader/Loader.component";
import HeaderComponent from "../../reuse/header/header.component";
import FooterComponent from "../../reuse/footer/footer.component";
import ContactComponent from "../../reuse/contact/contact.component";

import {scrollToSectionGetPosition} from '../article/module/module-scroll-to';

class articleComponent extends Component {

    constructor(props){

        super(props);

        window.scrollTo(0, 0);

        this.state={
            showLoader: true,
        };

    }

    getArticleList() {

        fetch('https://panel.stairwaysoft.com/api/wp/v2/posts?filter[category_name]=article')

            .then(response => response.json())

            .then(data => {


                this.setState({

                    ...this.state,
                    articleList: data,
                    showLoader: false,

                })

                scrollToSectionGetPosition();

            });


    }

    componentDidMount(){

        this.getArticleList();

    }

    render() {

        let acf = this.state.articleList;
        let article_field_first_section_background = '';
        let acfData = '';
        let excerpt = '';
        let controlTitle = '';
        let controlList = '';
        let mobilePageNavigationImage = '';

        if (this.state.showLoader === false){

                acfData = acf[0].data;

                excerpt = acfData.content;
                article_field_first_section_background = acfData.article_field_first_section_background.link;
                controlTitle = acfData.article_field_control_title;
                controlList = acfData.article_field_control_points;
                mobilePageNavigationImage = acfData.mobile_page_navigation_image;

        }

        return (

            <Fragment>

                <LoaderComponent visible={this.state.showLoader}/>
                
                <HeaderComponent/>

                <section className='career-img-section'>

                    <img className='career-img-section__img' src={article_field_first_section_background && article_field_first_section_background} alt="article" />

                    <div className='career-img-section__text-block'>

                        <h1 className='career-img-section__title'>

                            IT Outsourcing for American companies

                        </h1>

                        <div className='career-img-section__description'>

                            <p className='career-img-section__paragraph'>

                                WDuring this pandemic period

                            </p>

                        </div>
                    </div>

                </section>

                <section className={'section_article'}>

                    <div className="article_control-nav-ico ">

                        <img src={mobilePageNavigationImage && mobilePageNavigationImage.url} alt=""/>

                    </div>
                    <div className="article_control">

                        <div className="article_control-title">

                            { controlTitle && controlTitle }

                        </div>

                        <div className="article_control-list">

                            { controlList &&

                                controlList.map( (obj, i) =>

                                    <p className={ i === 0 ? "active" : ''} id={'listId_' + i}  key={i}>

                                        {

                                            obj.article_field_control_points_title

                                        }

                                    </p>

                                )

                            }

                        </div>

                    </div>

                    <div className="article_content" dangerouslySetInnerHTML={{__html: excerpt}}>

                    </div>

                </section>

                <ContactComponent/>

                <FooterComponent/>

            </Fragment>

        )

    }




}

export default articleComponent;