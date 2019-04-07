import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import ImageGallery from 'react-image-gallery';

class oneWorkComponent extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
        document.querySelector('#root').classList.add('header-fixed');

        this.state = {
            oneWorkData: {},
            images: [],
        };
        this.getWorkData(props.match.params.name);

    }


    componentWillUnmount() {
        document.querySelector('#root').classList.remove('header-fixed');
    }

    getWorkData(slug) {
        fetch('http://cp.stairwaysoft.com/api/wp/v2/posts?slug=' + slug)
            .then(response => response.json())
            .then(data => {
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
                    oneWorkData: data[0].data,
                    images: images,
                })
            });

    }

    render() {

        const {oneWorkData, images} = this.state;

        return (

            <Fragment>
                <section className="top-img-section top-img-section--project">
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
                                            <img src="../img/svg_icons/projects_ico/pin_gray.svg" alt="item icon"
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
                                            <img src="../img/svg_icons/projects_ico/team_gray.svg" alt="item icon"
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
                                            <img src="../img/svg_icons/projects_ico/calendar_gray.svg" alt="item icon"
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
                                            <img src="../img/svg_icons/projects_ico/project_gray.svg" alt="item icon"
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
                                            <img src="../img/svg_icons/projects_ico/cube.svg" alt="item icon"
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
                                            <img src="../img/svg_icons/projects_ico/case.svg" alt="item icon"
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

                {oneWorkData.goal_and_tasks && (
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

                {oneWorkData.challenges && (
                    <section>
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

                {oneWorkData.research_and_discovery && (
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
                    <section>
                        <div className="container">
                            <h2 className="section-title">Implementation</h2>
                            <ImageGallery items={images}
                                          showPlayButton={false}
                                          showFullscreenButton={false}
                                          additionalClass="app-image-gallery"
                            />
                            {oneWorkData.site_url && (
                                <div className="btn-block btn-block--center">
                                    <Link to={oneWorkData.site_url} className="btn btn--upper btn--160w">view
                                        site</Link>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {oneWorkData.partnership_overview && (
                    <section className="bottom-padding-70">
                        <div className="container">
                            <h2 className="section-title">Partnership overview</h2>
                            <div className="two-sides-text">
                                <div className="two-sides-text__one-side"
                                     dangerouslySetInnerHTML={{__html: oneWorkData.partnership_overview.right_description}}>
                                </div>
                                <div className="two-sides-text__one-side"
                                     dangerouslySetInnerHTML={{__html: oneWorkData.partnership_overview.right_description}}>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                <section className="section-bg bottom-padding-70">
                    <div className="container">
                        <h2 className="section-title">Get in touch</h2>
                        <form className="feedback-form">
                            <label className="feedback-form__label feedback-form__label--error">
                                <span>Name<span>*</span></span>
                                <input type="text" id="feedback-name" placeholder="Your full name"
                                       className="feedback-form__input feedback-form__input--error"/>
                                <span className="feedback-form__error-msg">You full name</span>
                            </label>
                            <label className="feedback-form__label">
                                <span> Email<span>*</span></span>
                                <input type="text" id="feedback-email" placeholder="Work email address"
                                       className="feedback-form__input"/>
                            </label>
                            <label className="feedback-form__label">
                                <span> Phone</span>
                                <input type="text" id="feedback-phone" placeholder="Your phone number"
                                       className="feedback-form__input"/>
                            </label>
                            <label className="feedback-form__label feedback-form__label--textarea">
                                <span>Message<span>*</span></span>
                                <textarea id="feedback-message" placeholder="Tell us more about your project"
                                          className="feedback-form__input"/>
                            </label>
                            <div className="form-btn-block">
                                <button className="btn btn--160w">Send Message</button>
                                <button className="btn btn--attach feedback-form__attach-btn">Attach a file</button>
                                <span
                                    className="attachments-tip">Up to three attachments (up to 5Mb combined size)</span>
                            </div>
                        </form>
                        <div className="privacy-block">
                            <div className="privacy-block__title">Privacy</div>
                            <div className="privacy-block__text-wrap">
                                <p>
                                    We respect your privacy, and will not share your information with any 3rd party
                                    without your permission. Our multi-level corporate security
                                    policies and procedures ensure prevention from loss, misuse or unauthorized
                                    distribution of any business-sensitive information you share with us.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


            </Fragment>

        );
    }
}

export default oneWorkComponent;
