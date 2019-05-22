import React, { Component, Fragment } from "react";
import ContactComponent from "../contact/contact.component";

class ConnectComponent extends Component {

    render() {
        return (
            <Fragment>
                <section className="section-bg">
                    <div className="contacts-block">
                        <div className="contacts-block__item">
                            <div className="contacts-block__city">Tel Aviv</div>
                            <div className="contacts-block__phone">+972587747472</div>
                            <div className="contacts-block__country">Israel</div>
                        </div>
                        <div className="contacts-block__item">
                            <div className="contacts-block__city">Odessa</div>
                            <div className="contacts-block__phone">+380947123258</div>
                            <div className="contacts-block__country">Ukraine</div>
                        </div>
                    </div>
                </section>

                <ContactComponent/>
            </Fragment>
        );
    }
}

export default ConnectComponent;
