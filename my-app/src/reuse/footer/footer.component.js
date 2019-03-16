import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";

class FooterComponent extends Component {

    render() {
        return (
            <Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="footer-block">
                            <div className="footer-block__column">
                                <div className="list-items">
                                    <div className="list-items__title">Services</div>
                                    <a href="/#" className="list-items__one">Dedicated Engineering Teams</a>
                                    <a href="/#" className="list-items__one">Custom Software Development</a>
                                    <a href="/#" className="list-items__one">Test Driven Development</a>
                                    <a href="/#" className="list-items__one">Prototyping & Design</a>
                                    <a href="/#" className="list-items__one">Mobile App Development</a>
                                    <a href="/#" className="list-items__one">Support & Protection</a>

                                </div>
                            </div>
                            <div className="footer-block__column">
                                <div className="list-items">
                                    <div className="list-items__title">Expertise</div>
                                    <a href="/#" className="list-items__one">Enterprise Content Management</a>
                                    <a href="/#" className="list-items__one">UI/UX</a>
                                    <a href="/#" className="list-items__one">IoT Solution</a>
                                    <a href="/#" className="list-items__one">Embedded Software</a>
                                    <a href="/#" className="list-items__one">High Load Systems</a>
                                    <a href="/#" className="list-items__one">Cloud Solutions</a>
                                    <a href="/#" className="list-items__one">DevOps</a>

                                </div>
                            </div>
                            <div className="footer-block__column">
                                <div className="list-items">
                                    <div className="list-items__title">Technologies</div>
                                    <a href="/#" className="list-items__one">Java</a>
                                    <a href="/#" className="list-items__one">Scala</a>
                                    <a href="/#" className="list-items__one">Python</a>
                                    <a href="/#" className="list-items__one">Ruby</a>
                                    <a href="/#" className="list-items__one">PHP</a>
                                    <a href="/#" className="list-items__one">JavaScript</a>
                                    <a href="/#" className="list-items__one">iOS</a>
                                    <a href="/#" className="list-items__one">Android</a>
                                    <a href="/#" className="list-items__one">Angular</a>

                                </div>
                            </div>
                            <div className="footer-block__column footer-block__column--tablet-only">
                                <div className="list-items mb-100">
                                    <div className="list-items__title">Success Stories</div>
                                    <a href="/#" className="list-items__one">Clients</a>
                                    <a href="/#" className="list-items__one">Case Studies</a>
                                    <a href="/#" className="list-items__one">Articles</a>

                                </div>
                                <div className="list-items w-auto">
                                    <div className="list-items__title">Contact us:</div>
                                    <a href="mailto:info@stairwaysoft.com" className="list-items__one">
                                        <span className="footer-icon footer-icon--mail"></span>
                                        <span>info@stairwaysoft.com</span>
                                    </a>
                                    <a href="/#" className="list-items__one">
                                        <span className="footer-icon footer-icon--skype"></span>
                                        <span>projektsh</span>
                                    </a>

                                </div>
                            </div>
                            <div className="footer-block__column footer-block__column--tablet-only">
                                <div className="list-items mb-100">
                                    <div className="list-items__title">Company</div>
                                    <a href="/#" className="list-items__one">Company Overview</a>
                                    <a href="/#" className="list-items__one">Careers</a>
                                    <a href="/#" className="list-items__one">Privacy Policy</a>

                                </div>
                                <div className="list-items list-items--icons">
                                    <div className="list-items__title">Follow Us:</div>
                                    <a href="/#" className="list-items__one list-items__ico list-items--fb"></a>
                                    <a href="/#" className="list-items__one list-items__ico list-items--in"></a>
                                    <a href="/#" className="list-items__one list-items__ico list-items--be"></a>

                                </div>
                            </div>
                        </div>
                        <div className="copyright-block">
                            <div>Copyright © 2012 - 2018 StairwaySoft Ltd</div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default FooterComponent;
