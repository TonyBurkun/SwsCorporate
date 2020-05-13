import React, {Component, Fragment} from 'react';
import ImageGallery from 'react-image-gallery';
import ContactComponent from "../../reuse/contact/contact.component";
import HeaderComponent from '../../reuse/header/header.component';
import FooterComponent from '../../reuse/footer/footer.component';
import LoaderComponent from "../../reuse/loader/Loader.component";
import NotFound from "../NotFound";

class oneWorkComponent extends Component {

    constructor(props) {
        super(props);
        window.scrollTo(0, 0);

        document.querySelector('#root').classList.add('header-fixed');

        this.state = {

            gotData         : false,
            oneWorkData     : {},
            images          : [],
            showLoader      : true,
            errorPage       : false,

        };

        this.getWorkData(props.match.params.name);
    }

    componentWillUnmount() {

        document.querySelector('#root').classList.remove('header-fixed');

    }

    getWorkData(slug) {

        fetch('https://panel.stairwaysoft.com/api/wp/v2/posts?slug=' + slug)

            .then(response => response.json())

            .then(data => {

                if (!data.length) {

                    this.setState({

                        showLoader  : false,
                        errorPage   : true,

                    })

                } else {
                    const imgArr = data[0].data.implementation;

                    const images = imgArr.map(item => {
                        return (
                            {
                                original: item.url,
                                thumbnail: item.sizes.large,
                            }
                        )
                    });

                    this.setState({
                        gotData: true,
                        oneWorkData: data[0].data,
                        images: images,
                        showLoader: false
                    })
                }
            });

    }

    componentWillReceiveProps(nextProps, nextContext) {
        const prevParam = this.props.match.params.name;
        const nextParam = nextProps.match.params.name;

        if (prevParam !== nextParam){
            this.getWorkData(nextParam);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

    }

    render() {

        const {oneWorkData, images} = this.state;

        if (this.state.errorPage === true){
            return (<NotFound></NotFound>)
        }else{

            return (

                <Fragment>

                    <LoaderComponent visible={this.state.showLoader}/>

                    {this.state.gotData &&
                    <Fragment>
                        <HeaderComponent/>
                        <section className="top-img-section top-img-section--project"
                                 style={{backgroundImage: 'url(' + oneWorkData.background_wallpaper + ')'}}>
                            <div className="top-img-section__container">
                                <div className="top-img-section__content-wrapper">
                                    <h2 className="section-title section-title--large section-title--left top-img-section__title">
                                        {oneWorkData.title}
                                    </h2>
                                </div>
                            </div>
                        </section>

                        <section className="shift-section">
                            <div className="container">
                                {oneWorkData.project_description && (
                                    <div className="project-title-block">
                                        <img src={oneWorkData.project_image} className="project-title-block__img"
                                             alt="project logo"/>
                                        <div className="project-title-block__desc project-desc">
                                            {oneWorkData.project_description && (
                                                <div className="project-desc__item">

                                                    <img src="/img/svg_icons/projects_ico/pin_gray.svg" alt="item icon"
                                                         className="project-desc__icon "/>
                                                    <div className="project-desc__wrapper">
                                                        <div
                                                            className="project-desc__text">{oneWorkData.project_description.location}</div>
                                                        <div className="project-desc__sub-text">Location</div>
                                                    </div>
                                                </div>
                                            )}

                                            {oneWorkData.project_description && (
                                                <div className="project-desc__item">
                                                    <img src="/img/svg_icons/projects_ico/team_gray.svg" alt="item icon"
                                                         className="project-desc__icon "/>
                                                    <div className="project-desc__wrapper">
                                                        <div
                                                            className="project-desc__text">{oneWorkData.project_description.team_size}</div>
                                                        <div className="project-desc__sub-text">Team size</div>
                                                    </div>
                                                </div>
                                            )}

                                            {oneWorkData.project_description && (
                                                <div className="project-desc__item">
                                                    <img src="/img/svg_icons/projects_ico/calendar_gray.svg" alt="item icon"
                                                         className="project-desc__icon "/>
                                                    <div className="project-desc__wrapper">
                                                        <div
                                                            className="project-desc__text">{oneWorkData.project_description.partnership_period}</div>
                                                        <div className="project-desc__sub-text">Partnership period</div>
                                                    </div>
                                                </div>
                                            )}

                                            {oneWorkData.project_description && (
                                                <div className="project-desc__item">
                                                    <img src="/img/svg_icons/projects_ico/project_gray.svg" alt="item icon"
                                                         className="project-desc__icon "/>
                                                    <div className="project-desc__wrapper">
                                                        <div
                                                            className="project-desc__text">{oneWorkData.project_description.technologies}</div>
                                                        <div className="project-desc__sub-text">Technologies</div>
                                                    </div>
                                                </div>
                                            )}

                                            {oneWorkData.project_description && (
                                                <div className="project-desc__item">
                                                    <img src="/img/svg_icons/projects_ico/cube.svg" alt="item icon"
                                                         className="project-desc__icon "/>
                                                    <div className="project-desc__wrapper">
                                                        <div
                                                            className="project-desc__text">{oneWorkData.project_description.expertise_delivered}</div>
                                                        <div className="project-desc__sub-text">Expertise delivered</div>
                                                    </div>
                                                </div>
                                            )}

                                            {oneWorkData.project_description && (
                                                <div className="project-desc__item">
                                                    <img src="/img/svg_icons/projects_ico/case.svg" alt="item icon"
                                                         className="project-desc__icon "/>
                                                    <div className="project-desc__wrapper">
                                                        <div
                                                            className="project-desc__text">{oneWorkData.project_description.services}</div>
                                                        <div className="project-desc__sub-text">Services</div>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                )}

                            </div>
                        </section>

                        {oneWorkData.goal_and_tasks && oneWorkData.goal_and_tasks.description && (
                            <section>
                                <div className="container">
                                    <h2 className="section-title">
                                        Goals and Tasks
                                    </h2>
                                    <div className="image-text-block">
                                        <div className="image-text-block__wrapper"
                                             dangerouslySetInnerHTML={{__html: oneWorkData.goal_and_tasks.description}}>
                                        </div>
                                        <img src={oneWorkData.goal_and_tasks.image} className="image-text-block__img"
                                             alt="goal and task"/>
                                    </div>
                                </div>
                            </section>
                        )}

                        {oneWorkData.challenges && oneWorkData.challenges.description && (
                            <section className="enableMarkerUlToList">
                                <div className="container">
                                    <h2 className="section-title">
                                        Challenges
                                    </h2>
                                    <div className="image-text-block image-text-block--reverse">
                                        <div className="image-text-block__wrapper"
                                             dangerouslySetInnerHTML={{__html: oneWorkData.challenges.description}}>
                                        </div>
                                        <img src={oneWorkData.challenges.image} className="image-text-block__img" alt=""/>
                                    </div>
                                </div>
                            </section>
                        )}

                        {oneWorkData.research_and_discovery && oneWorkData.research_and_discovery.left_description && oneWorkData.research_and_discovery.right_description && (
                            <section className="section-bg bottom-padding-70">
                                <div className="container">
                                    <h2 className="section-title">Research and Discovery</h2>
                                    <div className="two-sides-text">
                                        <div className="two-sides-text__one-side"
                                             dangerouslySetInnerHTML={{__html: oneWorkData.research_and_discovery.left_description}}>
                                        </div>
                                        <div className="two-sides-text__one-side"
                                             dangerouslySetInnerHTML={{__html: oneWorkData.research_and_discovery.right_description}}>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {oneWorkData.implementation && (
                            <section className="bottom-padding-70">
                                <div className="container">
                                    <h2 className="section-title">Implementation</h2>
                                    <ImageGallery items={images}
                                                  showPlayButton={false}
                                                  showFullscreenButton={false}
                                                  additionalClass="app-image-gallery"
                                                  preventDefaultTouchmoveEvent={false}
                                        // disableSwipe={true}
                                    />
                                    {oneWorkData.site_url && (
                                        <div className="btn-block btn-block--center">
                                            <a target='_blank' href={oneWorkData.site_url} className="btn btn--upper btn--160w">view
                                                site</a>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}

                        {oneWorkData.partnership_overview && oneWorkData.partnership_overview.right_description && (
                            <section className="bottom-padding-70">
                                <div className="container">
                                    <h2 className="section-title">Partnership overview</h2>
                                    <div className="two-sides-text">
                                        <div className="two-sides-text__one-side"
                                             dangerouslySetInnerHTML={{__html: oneWorkData.partnership_overview.left_description}}>
                                        </div>
                                        <div className="two-sides-text__one-side"
                                             dangerouslySetInnerHTML={{__html: oneWorkData.partnership_overview.right_description}}>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        <ContactComponent/>

                        <FooterComponent/>
                    </Fragment>
                    }
                </Fragment>

            );

        }


    }
}

export default oneWorkComponent;
