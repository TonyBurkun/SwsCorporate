import React, {Component, Fragment} from "react";

class ContactComponent extends Component {

    constructor(props) {
        super(props);

        this.state={
            name: '',
            email: '',
            phone: '',
            message: '',
            formValid: false,
            showSuccessMsg: false,
            showErrorMsg: false,

        };

        this.sendForm = this.sendForm.bind(this);

    }

    sendForm(e) {
        e.preventDefault();

        this.setState({
            name: this.state.name.trim(),
            email: this.state.email.trim(),
            phone: this.state.phone.trim(),
            message: this.state.message.trim(),
        });

        let isEmailValid = false,
            isNameValid = false,
            isMessageValid = false;


        const {name, email, message} = this.state;
        const emailRegular = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        const feedbackNameInput = document.getElementById('feedback-name');
        const feedbackNameLabel = feedbackNameInput.closest('label');

        const feedbackEmailInput = document.getElementById('feedback-email');
        const feedbackEmailLabel = feedbackEmailInput.closest('label');

        const feedbackMessageInput = document.getElementById('feedback-message');
        const feedbackMessageLabel = feedbackMessageInput.closest('label');


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



        if (isNameValid && isEmailValid && isMessageValid) {
            const data = new FormData(e.target);

            fetch('https://panel.stairwaysoft.com/api/contact-form-7/v1/contact-forms/407/feedback',
                {
                    method: 'POST',
                    body: data
                })
                .then(response => {
                    response.json();

                    this.setState({
                        ...this.state,
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                        showSuccessMsg: true
                    });

                    setTimeout(() => {
                       this.setState({
                           ...this.state,
                           showSuccessMsg: false
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
                            showErrorMsg: false
                        })
                    },5000)
                })



                .then( response => {
                    // console.log(response);
                });
        }
    }


    render() {

        return (
            <Fragment>
                <section className="section-bg bottom-padding-70" id='contact-form'>
                    <div className="container">
                        <h2 className="section-title">Get in touch</h2>
                        <form className="feedback-form" onSubmit={this.sendForm}>
                            {/*feedback-form__label--error*/}
                            <label className="feedback-form__label">
                                <span>Name<span>*</span></span>
                                {/*feedback-form__input--error*/}
                                <input type="text"
                                       id="feedback-name"
                                       placeholder="Your full name"
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
                                       placeholder="Work email address"
                                       name="email"
                                       className="feedback-form__input"
                                       value={this.state.email}
                                       onChange={(event) => {
                                           this.setState({email: event.target.value.toLowerCase()})
                                       }}
                                />
                                <span className="feedback-form__error-msg">Fill out with valid email</span>
                            </label>
                            <label className="feedback-form__label">
                                <span> Phone</span>
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
                                          placeholder="Tell us more about your project"
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
                                <button className="btn btn--160w btn--upper" type="submit">Send Message</button>
                            </div>
                            <div className="feedback-form__notification">
                                <p className={this.state.showSuccessMsg ? ('feedback-form__success feedback-form__success--show') : ('feedback-form__success')}>Thank you for getting in touch!</p>
                                <p className={this.state.showErrorMsg ? ('feedback-form__error feedback-form__error--show') : ('feedback-form__error')}>Unfortunately, message wasn't sent. Please try to send it again or contact us by phone.</p>
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

export default ContactComponent;
