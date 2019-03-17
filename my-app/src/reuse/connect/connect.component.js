import React, { Component, Fragment } from "react";
class ConnectComponent extends Component {

    render() {
        return (
            <Fragment>
                <section className="section-bg">
                    <div className="contacts-block">
                        <div className="contacts-block__item">
                            <div className="contacts-block__city">Tel Aviv</div>
                            <div className="contacts-block__phone">+14433520108</div>
                            <div className="contacts-block__country">Israel</div>
                        </div>
                        <div className="contacts-block__item">
                            <div className="contacts-block__city">Odessa</div>
                            <div className="contacts-block__phone">+380947123258</div>
                            <div className="contacts-block__country">Ukraine</div>
                        </div>
                    </div>
                </section>

                <section className="contacts-section">
                    <div className="connection-block">
                        <div className="connection-block__title">Connect with our experts</div>
                        <div className="btn-block btn-block--center connection-block__btn">
                            <div className="btn btn--upper">get in touch</div>
                        </div>

                    </div>

                </section>
            </Fragment>
        );
    }
}

export default ConnectComponent;
