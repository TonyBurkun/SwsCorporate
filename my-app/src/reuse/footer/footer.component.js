import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class FooterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
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

                this.setState({menu})
            });
    }

    render() {
        let menu = this.state.menu;
        return (
            <Fragment>
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
                                        <span className="footer-icon footer-icon--mail"></span>
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
            </Fragment>
        );
    }
}

export default FooterComponent;
