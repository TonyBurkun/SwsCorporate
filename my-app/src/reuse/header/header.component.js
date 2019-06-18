import React, {Component, Fragment} from "react";
import {Link, withRouter} from "react-router-dom";



const _removeClassesForMenuBtn = () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('header__nav-mobile');
    const mobileMenuOverlay = document.getElementById('header__overlay');
    const bodyDOM = document.getElementsByTagName('BODY')[0];

    mobileMenuOverlay.classList.remove('header__overlay--active');
    mobileMenuBtn.classList.remove('header__trigger--open');
    mobileMenu.classList.remove('mobile-nav--active');
    bodyDOM.classList.remove('menu-open');
};

const _toggleClassesForMenuBtn = () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('header__nav-mobile');
    const mobileMenuOverlay = document.getElementById('header__overlay');
    const bodyDOM = document.getElementsByTagName('BODY')[0];


    mobileMenuOverlay.classList.toggle('header__overlay--active');
    mobileMenuBtn.classList.toggle('header__trigger--open');
    mobileMenu.classList.toggle('mobile-nav--active');
    bodyDOM.classList.toggle('menu-open');
};



class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        document.addEventListener('DOMContentLoaded', function () {
            const header = document.getElementById('header');

            if (window.pageYOffset >= 1) {
                header.classList.add('header--scrolled');
            }
        });

        window.onresize = function () {
            const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (width > 1200) {
                _removeClassesForMenuBtn();
            }
        };

        window.addEventListener('click', function(event){

            const headerNavMobileBlock = document.getElementById('header__nav-mobile');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');


            if (event.target !== mobileMenuBtn) {
                console.log(headerNavMobileBlock);
               if (headerNavMobileBlock){
                   if (!headerNavMobileBlock.classList.contains(event.target)){
                       // Clicked outside box
                       // console.log('clicked outside box');
                       _removeClassesForMenuBtn();
                   }
               }
            }

            if (event.target.classList.contains('mobile-nav__link')){
                _removeClassesForMenuBtn();
            }

        });

    }

    componentDidMount(){
        _removeClassesForMenuBtn();
        const header = document.getElementById('header');
        if (window.location.pathname.length === 1) {
            window.onscroll = function () {
                if (window.pageYOffset >= 1) {
                    header.classList.add('header--scrolled');
                } else {
                    header.classList.remove('header--scrolled');
                }
            };
        } else {
            header.classList.add('header--scrolled');
            document.querySelector('body').classList.add('hasHeader');
        }
    }

    componentWillReceiveProps(nextProps, nextContext){
        const header = document.getElementById('header');
        const body =  document.querySelector('body');
        if (window.location.pathname.length === 1 && window.location.hash.length === 0) {
            header.classList.remove('header--scrolled');
            body.classList.remove('hasHeader');

            if (window.pageYOffset >= 1) {
                header.classList.add('header--scrolled');
            }

            window.onscroll = function () {
                if (window.pageYOffset >= 1) {
                    header.classList.add('header--scrolled');
                } else {
                    header.classList.remove('header--scrolled');
                    body.classList.remove('hasHeader');
                }
            };
        }

        if (window.location.pathname.length === 1 && window.location.hash.length) {
            header.classList.add('header--scrolled');
            body.classList.remove('hasHeader');
        }

        if (window.location.pathname.length > 1) {
            header.classList.add('header--scrolled');
            body.classList.add('hasHeader');
            window.onscroll = function () {
                header.classList.add('header--scrolled');
            }
        }
    }


    handleClickOnLogo = () => {
       const pathname = window.location.pathname - 1;

       if (pathname) {
           this.props.history.push(`/`);
       } else {
           window.scrollTo({
               top: 0,
               behavior: "smooth"
           });
       }
    };

    handleContactUsBtn = () => {
       const contactForm = document.getElementById('contact-form');
       if (contactForm){
           contactForm.scrollIntoView({block: "start", behavior: "smooth"});
       } else {
           this.props.history.push(`/#contact-form`);
       }

    };

    handleClickOnMenuBtn = () => {
        _toggleClassesForMenuBtn();
    };

    render() {
        return (
            <Fragment>
                <header id="header" className="header">
                    <div className="container">
                        <div className="header__wrapper">
                            <div className="header__logo-block">
                                <div id="mobile-menu-btn" className="header__trigger" onClick={this.handleClickOnMenuBtn}/>
                                <Link to="/" className="header__logo" onClick={this.handleClickOnLogo}/>
                            </div>
                            <nav className="header__top-navigation top-nav">
                                <ul className="top-nav__wrapper">
                                    <li className="top-nav__item">
                                        <Link to='/#services' className="top-nav__link"
                                        >Services</Link>
                                    </li>
                                    {/*<li className="top-nav__item">*/}
                                    {/*    <Link to='/#' className="top-nav__link">Expertise</Link>*/}
                                    {/*</li>*/}
                                    {/*<li className="top-nav__item">*/}
                                        {/*<Link to='/#' className="top-nav__link">Technologies</Link>*/}
                                    {/*</li>*/}
                                    <li className="top-nav__item">
                                        <Link to='/portfolio' className="top-nav__link">Success Stories</Link>
                                    </li>
                                    <li className="top-nav__item">
                                        <Link to='/#company' className="top-nav__link"
                                        >Company</Link>
                                    </li>
                                </ul>
                                <button
                                    className="top-nav__btn btn btn--upper"
                                    onClick={this.handleContactUsBtn}
                                >Contact Us</button>
                            </nav>

                        </div>
                    </div>
                </header>
                <div id="header__nav-mobile" className="mobile-nav">
                    <ul className="mobile-nav__wrapper">
                        <li className="mobile-nav__item">
                            <Link to='/#services' className="mobile-nav__link"
                            >Services</Link>
                        </li>
                        {/*<li className="mobile-nav__item">*/}
                        {/*    <Link to="#" className="mobile-nav__link">Expertise</Link>*/}
                        {/*</li>*/}
                        {/*<li className="mobile-nav__item">*/}
                        {/*    <Link to="#" className="mobile-nav__link">Technologies</Link>*/}
                        {/*</li>*/}
                        <li className="mobile-nav__item">
                            <Link to='/portfolio' className="mobile-nav__link">Success Stories</Link>
                        </li>
                        <li className="mobile-nav__item">
                            <Link to='/#company' className="mobile-nav__link"
                            >Company</Link>
                        </li>
                    </ul>
                </div>
                <div id="header__overlay" className="header__overlay"/>
            </Fragment>
        );
    }
}

export default withRouter(HeaderComponent);
