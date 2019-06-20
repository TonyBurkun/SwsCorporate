import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class FooterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gotData: false,
            menu : []
        };

        this.getMenuList();
    }

    getMenuList() {
        fetch('http://cp.stairwaysoft.com/api/acf/v3/options/options')
            .then(response => response.json())
            .then(data => {



                let menu = data.acf.footer_links_list;

                menu.services.forEach((item) => {
                    let link = item.link;
                    let result = link.replace('http://cp.stairwaysoft.com/','/');
                    result = result.replace('https://cp.stairwaysoft.com/','/');

                    item.link = result;

                });

                this.setState({
                    gotData: true,
                    menu
                })
            });
    }

    render() {
        let menu = this.state.menu;
        return (
            <Fragment>
                {this.state.gotData &&
                   <footer className="footer">
                    <div className="container">
                        <div className="footer-block">
                            {menu.services &&
                            <div className="footer-block__column">
                                <div className="list-items">
                                    <div className="list-items__title">Services</div>
                                    {menu.services.map(item =>
                                        <Link to={item.link} key={item.link_name} className="list-items__one">{item.link_name}</Link>
                                    )}
                                </div>
                            </div>
                            }
                            {menu.expertise &&
                            <div className="footer-block__column">
                                <div className="list-items">
                                    <div className="list-items__title">Expertise</div>
                                    {menu.expertise.map(item =>
                                        <Link to={item.link} key={item.link_name} className="list-items__one">{item.link_name}</Link>
                                    )}
                                </div>
                            </div>
                            }
                            {menu.technologies &&
                            <div className="footer-block__column">
                                <div className="list-items">
                                    <div className="list-items__title">Expertise</div>
                                    {menu.technologies.map(item =>
                                        <Link to={item.link} key={item.link_name} className="list-items__one">{item.link_name}</Link>
                                    )}
                                </div>
                            </div>
                            }
                            <div className="footer-block__column footer-block__column--tablet-only">
                                {menu.success_stories &&
                                <div className="list-items mb-100">
                                    <div className="list-items__title">Success Stories</div>
                                    {menu.success_stories.map(item =>
                                        <Link to={item.link} key={item.link_name} className="list-items__one">{item.link_name}</Link>
                                    )}
                                </div>
                                }
                                <div className="list-items w-auto">
                                    <div className="list-items__title">Contact us:</div>
                                    <a href="mailto:info@stairwaysoft.com" className="list-items__one">
                                        <svg
                                            viewBox="0 0 25 25"
                                            className="footer-icon footer-icon--mail">
                                            <path className="st0" d="M12.5,0C5.6,0,0,5.6,0,12.5C0,19.4,5.6,25,12.5,25C19.4,25,25,19.4,25,12.5C25,5.6,19.4,0,12.5,0L12.5,0z
	 M18.1,6.9l-5.6,4.5L6.7,6.9H18.1L18.1,6.9z M18.7,18.1H6.1V8.8l5.8,4.4c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.5-0.2l5.7-4.5
	V18.1L18.7,18.1z"/>
                                        </svg>
                                        <span>info@stairwaysoft.com</span>
                                    </a>
                                </div>
                            </div>
                            <div className="footer-block__column footer-block__column--tablet-only">
                                {menu.company &&
                                <div className="list-items mb-100">
                                    <div className="list-items__title">Company</div>
                                    {menu.company.map(item =>
                                        <Link to={item.link} key={item.link_name} className="list-items__one">{item.link_name}</Link>
                                    )}
                                </div>
                                }
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
                }
            </Fragment>
        );
    }
}

export default FooterComponent;
