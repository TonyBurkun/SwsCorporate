import React, {Component, Fragment} from "react";

class ContactComponent extends Component {

    constructor(props) {
        super(props);

        this.sendForm = this.sendForm.bind(this);
    }

    sendForm(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log('Your favorite flavor is: ' + JSON.stringify(this.state));
        fetch('http://cp.stairwaysoft.com/api/contact-form-7/v1/contact-forms/407/feedback',
            {
                method: 'POST',
                body: data
            })
            .then(response => response.json())
            .then( response => {
                console.log(response);
            });
    }

    render() {
        return (
            <Fragment>
                <section className="section-bg bottom-padding-70">
                    <div className="container">
                        <h2 className="section-title">Get in touch</h2>
                        <form className="feedback-form" onSubmit={this.sendForm}>
                            {/*feedback-form__label--error*/}
                            <label className="feedback-form__label">
                                <span>Name<span>*</span></span>
                                {/*feedback-form__input--error*/}
                                <input type="text" id="feedback-name" placeholder="Your full name" name="fullname"
                                       className="feedback-form__input"/>
                                {/*<span className="feedback-form__error-msg">You full name</span>*/}
                            </label>
                            <label className="feedback-form__label">
                                <span> Email<span>*</span></span>
                                <input type="text" id="feedback-email" placeholder="Work email address" name="email"
                                       className="feedback-form__input"/>
                            </label>
                            <label className="feedback-form__label">
                                <span> Phone</span>
                                <input type="text" id="feedback-phone" placeholder="Your phone number" name="phone"
                                       className="feedback-form__input"/>
                            </label>
                            <label className="feedback-form__label feedback-form__label--textarea">
                                <span>Message<span>*</span></span>
                                <textarea id="feedback-message" placeholder="Tell us more about your project" name="description"
                                          className="feedback-form__input"/>
                            </label>
                            <div className="form-btn-block">
                                <button className="btn btn--160w" type="submit">Send Message</button>
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
