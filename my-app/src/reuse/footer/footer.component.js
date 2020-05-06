import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";


class FooterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

            gotData: false,
            menu : [],
            copyright: '',

        };

        this.getMenuList();
    }

    getMenuList() {

        fetch('https://panel.stairwaysoft.com/api/acf/v3/options/options')
            .then(response => response.json())
            .then(data => {

                let menu = data.acf.footer_links_list;

                menu.services.forEach((item) => {
                    let link = item.link;
                    let result = link.replace('http://panel.stairwaysoft.com/','/');
                    result = result.replace('https://panel.stairwaysoft.com/','/');

                    item.link = result;

                });

                this.setState({

                    gotData: true,
                    menu,
                    copyright: data.acf.copyright_footer,

                });

            });
    }

    render() {
        let menu = this.state.menu;
        let copyright = this.state.copyright;

        return (
            <Fragment>

                {this.state.gotData &&
                   <footer className="footer">
                    <div className="container">
                        <div className="footer-block">
                            {menu.services &&
                            <div className="footer-block__column">
                                <div className="list-items list-items--link">
                                    <div className="list-items__title">Services</div>
                                    {menu.services.map(item =>
                                        <Link to={item.link} key={item.link_name} className="list-items__one">{item.link_name}</Link>
                                    )}
                                </div>
                            </div>
                            }
                            {menu.expertise &&
                            <div className="footer-block__column">
                                <div className="list-items list-items--link">
                                    <div className="list-items__title">Expertise</div>
                                    {menu.expertise.map(item =>
                                        <Link to={item.link} key={item.link_name} className="list-items__one">{item.link_name}</Link>
                                    )}
                                </div>
                            </div>
                            }
                            {menu.technologies &&
                            <div className="footer-block__column">
                                <div className="list-items list-items--link">
                                    <div className="list-items__title">Technologies</div>
                                    {menu.technologies.map(item =>
                                        <span key={item.link_name} className="list-items__one">{item.link_name}</span>
                                    )}
                                </div>
                            </div>
                            }
                            <div className="footer-block__column footer-block__column--tablet-only">

                                {menu.success_stories &&
                                <div className="list-items mb-100 list-items--link">

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
                                <div className="list-items mb-100 list-items--link">
                                    <div className="list-items__title">Company</div>
                                    {menu.company.map(item =>

                                        <Link to={item.link} key={item.link_name} className="list-items__one">{item.link_name}</Link>

                                    )}
                                </div>
                                }
                                <div className="list-items list-items--icons">
                                    <div className="list-items__title">Follow Us:</div>

                                    <a target='_blank'  href={menu.fb_link} className="list-items__one list-items__ico list-items--fb"/>
                                    <a target='_blank' href={menu.in_link} className="list-items__one list-items__ico list-items--in"/>
                                    <a target='_blank' href={menu.be_link} className="list-items__one list-items__ico list-items--be"/>
                                    {/*<Link to="/#" className="list-items__one list-items__ico list-items--be"></Link>*/}

                                </div>
                            </div>
                        </div>

                        <div className="copyright-block list-items--link">

                            <div>{copyright}</div>
                            <Link target="_blank" to="/privacy-policy" className="list-items__one privacy">Privacy Policy</Link>
                            <Link target="_blank" to="/terms-of-use" className="list-items__one privacy">Terms Of Use</Link>

                        </div>
                    </div>
                </footer>
                }
            </Fragment>
        );
    }
}

export default FooterComponent;
