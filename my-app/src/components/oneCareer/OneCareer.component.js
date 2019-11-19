import React, {Component, Fragment} from 'react';
import HeaderComponent from '../../reuse/header/header.component';
import FooterComponent from '../../reuse/footer/footer.component';
import {Link} from "react-router-dom";
import Modal from 'react-awesome-modal';
import LoaderComponent from "../../reuse/loader/Loader.component";

class OneCareerComponent extends Component {
    constructor(props){
        super(props);
        window.scrollTo(0, 0);

        this.state={
            visible: false,
            pathFile: '',
            name: '',
            email: '',
            phone: '',
            message: '',
            formValid: false,
            showSuccessMsg: false,
            showErrorMsg: false,
            careerData:{},
            showLoader: true

        };
    }

    getCareerByID(postID) {
        fetch('http://panel.stairwaysoft.com/api/wp/v2/posts/'+ postID)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    gotCareer: Boolean(data.length),
                    careerData: data,
                    showLoader: false
                })
            });
    }

    componentDidMount(){
        const postID = this.props.match.params.id;
        this.getCareerByID(postID);
    }


    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            ...this.state,
            visible: false,
            name: '',
            email: '',
            phone: '',
            message: '',
            pathFile: ''

        });
    }


    sendForm = (event) => {
        event.preventDefault();

        this.setState({
            name: this.state.name.trim(),
            email: this.state.email.trim(),
            phone: this.state.phone.trim(),
            message: this.state.message.trim(),
        });

        let isEmailValid = false,
            isNameValid = false,
            isMessageValid = false,
            isFileTypeValid = false;


        const {name, email, message, pathFile} = this.state;
        const emailRegular = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        const feedbackNameInput = document.getElementById('feedback-name');
        const feedbackNameLabel = feedbackNameInput.closest('label');

        const feedbackEmailInput = document.getElementById('feedback-email');
        const feedbackEmailLabel = feedbackEmailInput.closest('label');

        const feedbackMessageInput = document.getElementById('feedback-message');
        const feedbackMessageLabel = feedbackMessageInput.closest('label');

        const attachBtnError = document.getElementById('attach-error');



        if (!name.trim().length) {
            feedbackNameLabel.classList.add('feedback-form__label--error');
            feedbackNameInput.classList.add('feedback-form__input--error');
            isNameValid = false;
        } else {
            feedbackNameLabel.classList.remove('feedback-form__label--error');
            feedbackNameInput.classList.remove('feedback-form__input--error');
            isNameValid = true;
        }

        if (!email.trim().length) {
            feedbackEmailLabel.classList.add('feedback-form__label--error');
            feedbackEmailInput.classList.add('feedback-form__input--error');
            isEmailValid = false;
        } else {
            const result = emailRegular.test(String(email).toLowerCase());

            if (!result) {
                feedbackEmailLabel.classList.add('feedback-form__label--error');
                feedbackEmailInput.classList.add('feedback-form__input--error');
                isEmailValid = false;
            } else {
                feedbackEmailLabel.classList.remove('feedback-form__label--error');
                feedbackEmailInput.classList.remove('feedback-form__input--error');
                isEmailValid = true;
            }
        }

        if (!message.trim().length) {
            feedbackMessageLabel.classList.add('feedback-form__label--error');
            feedbackMessageInput.classList.add('feedback-form__input--error');
            isMessageValid = false;
        } else {
            feedbackMessageLabel.classList.remove('feedback-form__label--error');
            feedbackMessageInput.classList.remove('feedback-form__input--error');
            isMessageValid = true;
        }

        const fileType = pathFile.split('.')[1];
        isFileTypeValid = fileType === 'docx' || fileType === 'pdf';

        if (!isFileTypeValid) {
            attachBtnError.classList.add('show')
        } else {
            attachBtnError.classList.remove('show')
        }




        if (isNameValid && isEmailValid && isMessageValid && isFileTypeValid) {
            const data = new FormData(event.target);

            fetch('http://panel.stairwaysoft.com/api/contact-form-7/v1/contact-forms/516/feedback',
                {
                    method: 'POST',
                    body: data
                })
                .then(response => {
                    console.log(data, response);
                    console.log( response.json());

                    this.setState({
                        ...this.state,
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                        showSuccessMsg: true,
                        pathFile: ''
                    });

                    setTimeout(() => {
                        this.setState({
                            ...this.state,
                            showSuccessMsg: false,
                            visible: false
                        })
                    },5000)
                })

                .catch(error => {
                    this.setState({
                        ...this.state,
                        showErrorMsg: true
                    });

                    setTimeout(() => {
                        this.setState({
                            ...this.state,
                            showErrorMsg: false,
                        });
                    },5000)
                })



                .then( response => {
                    // console.log(response);
                });
        }
    };




    render() {
        const {careerData} = this.state;

        return (
            <Fragment>
                <Modal visible={this.state.visible} width="1200" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                    <section className="section-bg" id='resume-form'>
                        <a href="javascript:void(0);"
                           className='close-modal-btn'
                           onClick={() => this.closeModal()}/>
                        <div className="container">
                            <h2 className="section-title">Send your resume</h2>
                            <form className="feedback-form" onSubmit={(event) => {this.sendForm(event)}}>
                                {/*feedback-form__label--error*/}
                                <label className="feedback-form__label">
                                    <span>Name<span>*</span></span>
                                    {/*feedback-form__input--error*/}
                                    <input type="text"
                                           id="feedback-name"
                                           placeholder="Your name"
                                           name="fullname"
                                           className="feedback-form__input"
                                           value={this.state.name}
                                           onChange={(event) => {
                                               this.setState({name: event.target.value})
                                           }}
                                    />
                                    <span className="feedback-form__error-msg">Fill out the name</span>
                                </label>
                                <label className="feedback-form__label">
                                    <span> Email<span>*</span></span>
                                    <input type="text"
                                           id="feedback-email"
                                           placeholder="Email address"
                                           name="email"
                                           className="feedback-form__input"
                                           value={this.state.email}
                                           onChange={(event) => {
                                               this.setState({email: event.target.value.toLowerCase()})
                                           }}
                                    />
                                    <span className="feedback-form__error-msg">Fill out the Email</span>
                                </label>
                                <label className="feedback-form__label">
                                    <span>Phone</span>
                                    <input type="text"
                                           id="feedback-phone"
                                           placeholder="Your phone number"
                                           name="phone"
                                           className="feedback-form__input"
                                           value={this.state.phone}
                                           onChange={(event) => {
                                               this.setState({phone: event.target.value})
                                           }}
                                    />
                                </label>
                                <label className="feedback-form__label feedback-form__label--textarea">
                                    <span>Message<span>*</span></span>
                                    <textarea id="feedback-message"
                                              placeholder="Write your message here"
                                              name="description"
                                              className="feedback-form__input"
                                              value={this.state.message}
                                              onChange={(event) => {
                                                  this.setState({message: event.target.value})
                                              }}
                                    />
                                    <span className="feedback-form__error-msg">Fill out the message</span>
                                </label>
                                <div className="form-btn-block">
                                    <button className="submit-btn btn btn--160w btn--upper" type="submit">
                                        Send Message
                                    </button>
                                    <div className='attach-file-btn'>
                                        <label htmlFor="file-type"
                                               className="btn btn--attach feedback-form__attach-btn">
                                            Attach the file
                                        </label>
                                        <div className='attach-file-btn__near'>
                                            <span className='sub-desc'>add *.docx or *.pdf file</span>
                                            <div
                                                className={(Boolean(this.state.pathFile)) ? 'type-file-wrapper  show' : 'type-file-wrapper'}>
                                                <input type='file'
                                                       id='file-type'
                                                       name='file-type'
                                                       accept=".doc, .docx, .pdf"
                                                       value=''
                                                       onChange={() => {
                                                           const file = document.getElementById("file-type");
                                                           let value = file.value;
                                                           value = value.replace('C:\\fakepath\\', '');
                                                           this.setState({
                                                               pathFile: value
                                                           })
                                                       }}
                                                />
                                                <span className='attach-file-btn__file-name'>{this.state.pathFile}</span>
                                            </div>
                                        </div>
                                        <span className="feedback-form__error-msg" id='attach-error'>Please add file with correct file format</span>
                                    </div>
                                </div>
                                <div className="feedback-form__notification">
                                    <p className={this.state.showSuccessMsg ? ('feedback-form__success feedback-form__success--show') : ('feedback-form__success')}>Thank you for getting in touch!</p>
                                    <p className={this.state.showErrorMsg ? ('feedback-form__error feedback-form__error--show') : ('feedback-form__error')}>Unfortunately, message wasn't sent. Please try to send it again or contact us by phone.</p>
                                </div>
                            </form>
                        </div>
                    </section>
                </Modal>

                <Fragment>
                    <LoaderComponent visible={this.state.showLoader}/>
                    <HeaderComponent/>
                    <section className='career-img-section'>
                        <img
                            className='career-img-section__img'
                            src="../img/career/career_bg_35.jpg" alt="team_img"
                        />
                        <div className='career-img-section__text-block'>
                            <h1 className='career-img-section__title'>Become part of the Stairway Soft team!</h1>
                            <div className='career-img-section__description'>
                                <p className='career-img-section__paragraph'>
                                    Widely used for development of content management systems and project management tools,
                                    we have a wide experience in using PHP for multiple consumer facing applications in network administration,
                                    social networking and media domains.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className='section-bg bottom-padding-70'>
                        <div className="container">
                            <h2 className='section-title section-title--purple section-title--left career-title'>{careerData.title}</h2>
                            <div className='two-col'>
                                <div className='two-col__item two-col__left'>
                                    {Boolean(careerData.data) && Boolean(careerData.data.description) && (
                                        <div className='two-col__desc' dangerouslySetInnerHTML={{__html: careerData.data.description}}/>
                                    )}
                                </div>
                                <div className='two-col__item two-col__right'>
                                    <div className="career-item__wrapper">
                                        {Boolean(careerData.data) && Boolean(careerData.data.location) && (
                                            <div className='career-item-between'>
                                                <span className='career-item-between__capture'>Location:</span>
                                                <span className='career-item-between__value'>{careerData.data.location}</span>
                                            </div>
                                        )}
                                        {Boolean(careerData.data) && Boolean(careerData.data.type_of_employment) && (
                                            <div className='career-item-between'>
                                                <span className='career-item-between__capture'>Type of employment:</span>
                                                <span className='career-item-between__value'>{careerData.data.type_of_employment}</span>
                                            </div>
                                        )}
                                        {Boolean(careerData.data) && Boolean(careerData.data.technologies) && (
                                            <div className='career-item-between'>
                                                <span className='career-item-between__capture'>Technologies:</span>
                                                <span className='career-item-between__value'>{careerData.data.technologies}</span>
                                            </div>
                                        )}

                                        <div
                                            className='btn btn--upper btn--160w'
                                            onClick={() => this.openModal()}
                                        >send resume</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bottom-padding-70">
                        <div className="container">
                          <div className='desc-block-wrapper'>
                              {Boolean(careerData.data) && Boolean(careerData.data.main_responsibilities) && (
                                  <div className="desc-block">
                                      <h3 className="h3-title">Main Responsibilities:</h3>
                                      <div className='custom-html'
                                           dangerouslySetInnerHTML={{__html: careerData.data.main_responsibilities}}/>
                                  </div>
                              )}
                              {Boolean(careerData.data) && Boolean(careerData.data.role_requirements) && (
                                  <div className="desc-block">
                                      <h3 className="h3-title">Main Requirements:</h3>
                                      <div className='custom-html'
                                           dangerouslySetInnerHTML={{__html: careerData.data.role_requirements}}/>
                                  </div>
                              )}
                              {Boolean(careerData.data) && Boolean(careerData.data.professional_growth) && (
                                  <div className="desc-block">
                                      <h3 className="h3-title">Professional growth:</h3>
                                      <div className='custom-html'
                                           dangerouslySetInnerHTML={{__html: careerData.data.professional_growth}}/>
                                  </div>
                              )}
                              {Boolean(careerData.data) && Boolean(careerData.data.care_comfort_and_fun) && (
                                  <div className="desc-block">
                                      <h3 className="h3-title">Care, comfort and fun:</h3>
                                      <div className='custom-html'
                                           dangerouslySetInnerHTML={{__html: careerData.data.care_comfort_and_fun}}/>
                                  </div>
                              )}
                          </div>
                            <div className='more-btn__wrapper'>
                                <Link to={{pathname: '/career',
                                    state: {
                                        careerID: careerData.id
                                    }
                                }}  className="more-btn">View more positions</Link>
                            </div>
                        </div>
                    </section>


                    <section className="contacts-section">
                        <div className="connection-block">
                            <div className="connection-block__title">Become part of the Stairway Soft team!</div>
                            <div className="btn-block btn-block--center connection-block__btn">
                                <div
                                    className="btn btn--upper btn--160w btn--upper"
                                    onClick={() => this.openModal()}
                                >Send Resume</div>
                            </div>

                        </div>

                    </section>

                    <FooterComponent/>
                </Fragment>
            </Fragment>
        );
    }
}

export default OneCareerComponent;
