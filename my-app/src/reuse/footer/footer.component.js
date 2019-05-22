import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

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
                                    <Link to="/#" className="list-items__one">Dedicated Engineering Teams</Link>
                                    <Link to="/#" className="list-items__one">Custom Software Development</Link>
                                    <Link to="/#" className="list-items__one">Test Driven Development</Link>
                                    <Link to="/#" className="list-items__one">Prototyping & Design</Link>
                                    <Link to="/#" className="list-items__one">Mobile App Development</Link>
                                    <Link to="/#" className="list-items__one">Support & Protection</Link>

                                </div>
                            </div>
                            <div className="footer-block__column">
                                <div className="list-items">
                                    <div className="list-items__title">Expertise</div>
                                    <Link to="/#" className="list-items__one">Enterprise Content Management</Link>
                                    <Link to="/#" className="list-items__one">UI/UX</Link>
                                    <Link to="/#" className="list-items__one">IoT Solution</Link>
                                    <Link to="/#" className="list-items__one">Embedded Software</Link>
                                    <Link to="/#" className="list-items__one">High Load Systems</Link>
                                    <Link to="/#" className="list-items__one">Cloud Solutions</Link>
                                    <Link to="/#" className="list-items__one">DevOps</Link>

                                </div>
                            </div>
                            {/*<div className="footer-block__column">*/}
                                {/*<div className="list-items">*/}
                                    {/*<div className="list-items__title">Technologies</div>*/}
                                    {/*<Link to="/#" className="list-items__one">Java</Link>*/}
                                    {/*<Link to="/#" className="list-items__one">Scala</Link>*/}
                                    {/*<Link to="/#" className="list-items__one">Python</Link>*/}
                                    {/*<Link to="/#" className="list-items__one">Ruby</Link>*/}
                                    {/*<Link to="/#" className="list-items__one">PHP</Link>*/}
                                    {/*<Link to="/#" className="list-items__one">JavaScript</Link>*/}
                                    {/*<Link to="/#" className="list-items__one">iOS</Link>*/}
                                    {/*<Link to="/#" className="list-items__one">Android</Link>*/}
                                    {/*<Link to="/#" className="list-items__one">Angular</Link>*/}

                                {/*</div>*/}
                            {/*</div>*/}
                            <div className="footer-block__column footer-block__column--tablet-only">
                                <div className="list-items mb-100">
                                    <div className="list-items__title">Success Stories</div>
                                    <Link to="/#" className="list-items__one">Clients</Link>
                                    <Link to="/#" className="list-items__one">Case Studies</Link>
                                    <Link to="/#" className="list-items__one">Articles</Link>

                                </div>
                                <div className="list-items w-auto">
                                    <div className="list-items__title">Contact us:</div>
                                    <Link to="mailto:info@stairwaysoft.com" className="list-items__one">
                                        <span className="footer-icon footer-icon--mail"></span>
                                        <span>info@stairwaysoft.com</span>
                                    </Link>
                                    <Link to="/#" className="list-items__one">
                                        <span className="footer-icon footer-icon--skype"></span>
                                        <span>projektsh</span>
                                    </Link>

                                </div>
                            </div>
                            <div className="footer-block__column footer-block__column--tablet-only">
                                <div className="list-items mb-100">
                                    <div className="list-items__title">Company</div>
                                    <Link to="/#" className="list-items__one">Company Overview</Link>
                                    <Link to="/#" className="list-items__one">Careers</Link>
                                    <Link to="/#" className="list-items__one">Privacy Policy</Link>

                                </div>
                                <div className="list-items list-items--icons">
                                    <div className="list-items__title">Follow Us:</div>
                                    <Link to="/#" className="list-items__one list-items__ico list-items--fb"></Link>
                                    <Link to="/#" className="list-items__one list-items__ico list-items--in"></Link>
                                    <Link to="/#" className="list-items__one list-items__ico list-items--be"></Link>

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
