import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";

class ClientsComponent extends Component {

    render() {
        return (
            <Fragment>
                <section className="section-bg bottom-padding-70">
                    <h2 className="section-title">Our clients</h2>
                    <div className="container">
                        <div className="clients-list">
                            <div className="clients-list__item clients-list-block">
                                <img src="img/main/our_clients/pdf_logo.png" alt="pdf filler logo" />
                            </div>
                            <div className="clients-list__item clients-list-block">
                                <img src="img/main/our_clients/utrader.png" alt="utrader logo" />
                            </div>
                            <div className="clients-list__item clients-list-block">
                                <img src="img/main/our_clients/ccrypto.png" alt="crypto logo" />
                            </div>
                            <div className="clients-list__item clients-list-block">
                                <img src="img/main/our_clients/logo_dvb.png" alt="dvb logic logo" />
                            </div>
                            <div className="clients-list__item clients-list-block">
                                <img src="img/main/our_clients/chicco.png" alt="chicco logo" />
                            </div>
                            <div className="clients-list__item clients-list-block">
                                <img src="img/main/our_clients/IUIExpo2018.png" alt="israel ukrainian expo logo" />
                            </div>
                            <div className="clients-list__item clients-list-block">
                                <img src="img/main/our_clients/expo-2017-future-energy_astana.png" alt="expo 2017 logo" />
                            </div>
                            <div className="clients-list__item clients-list-block">
                                <img src="img/main/our_clients/Otp_bank_Logo_capital.png" alt="otpCapital logo" />
                            </div>
                            <div className="clients-list__item clients-list-block">
                                <img src="img/main/our_clients/teletriumf.png" alt="Teletriumf logo" />
                            </div>
                            <div className="clients-list__item clients-list-block">
                                <Link to="" className="clients-list-block__more-btn">More clients</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default ClientsComponent;
