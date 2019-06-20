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
                                <Link to="/" onClick={this.handleClickOnLogo}>
                                    <svg
                                        viewBox="0 0 186 40"
                                        className='header__logo'
                                    >
                                        <path className="st0" d="M34.6,10c0.7,0,1.4,0.1,1.9,0.2c0.5,0.1,0.9,0.3,1.3,0.4c0.4,0.2,0.7,0.4,0.9,0.7c-0.1,0.2-0.2,0.4-0.3,0.6
	c-0.1,0.2-0.2,0.4-0.4,0.6c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2-0.2-0.4-0.4-0.7-0.5c-0.2-0.1-0.5-0.3-0.8-0.4c-0.3-0.1-0.8-0.2-1.3-0.2
	c-0.8,0-1.5,0.3-1.9,0.9c-0.4,0.6-0.6,1.3-0.6,2.2c0,0.8,0.1,1.3,0.2,1.8c0.1,0.4,0.3,0.8,0.6,1c0.3,0.2,0.7,0.4,1.2,0.5
	c0.5,0.1,1,0.2,1.7,0.4c1.1,0.2,2,0.7,2.7,1.6c0.7,0.8,1.1,2.1,1.1,3.7c0,2.1-0.5,3.6-1.4,4.5c-1,0.9-2.4,1.4-4.4,1.4
	c-0.8,0-1.5-0.1-2-0.2c-0.5-0.2-1-0.3-1.3-0.5c-0.4-0.2-0.7-0.5-1-0.8c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.4,0.4-0.6
	c0.2-0.2,0.4-0.4,0.6-0.6c0.2,0.3,0.4,0.5,0.7,0.7c0.3,0.2,0.6,0.3,0.9,0.5c0.4,0.1,0.8,0.2,1.3,0.2c1.3,0,2.2-0.3,2.7-1
	c0.5-0.6,0.7-1.5,0.7-2.5c0-0.8-0.1-1.4-0.3-1.9c-0.2-0.5-0.4-0.8-0.7-1.1c-0.3-0.3-0.7-0.4-1.2-0.6c-0.5-0.1-1-0.2-1.7-0.4
	c-1.2-0.2-2.1-0.7-2.7-1.4c-0.6-0.7-0.9-1.9-0.9-3.6c0-2.1,0.4-3.5,1.2-4.3C31.8,10.4,33,10,34.6,10L34.6,10z M43.3,5.7l2.5-1v5.5
	h3.8c0,0.1,0,0.2,0,0.4c0,0.1,0,0.3,0,0.4c0,0.1,0,0.3,0,0.4c0,0.2,0,0.3,0,0.5c0,0.2,0,0.4-0.1,0.6h-3.8v17.4c-0.2,0-0.3,0-0.5,0
	c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.6,0c-0.2,0-0.5,0-0.6-0.1V5.7L43.3,5.7z M55.6,30.1c-1.7,0-2.8-0.4-3.5-1.3
	c-0.7-0.9-1-2.3-1-4.2c0-1.9,0.4-3.4,1.3-4.4c0.8-1,2.2-1.5,4-1.6l3.2-0.1v-3.7c0-0.9-0.2-1.5-0.7-1.9c-0.5-0.4-1.1-0.6-2-0.6
	c-0.6,0-1.2,0.1-1.6,0.2c-0.5,0.1-0.9,0.3-1.3,0.4c-0.4,0.2-0.8,0.4-1.1,0.6c-0.2-0.2-0.3-0.3-0.4-0.5c-0.1-0.2-0.2-0.4-0.3-0.7
	c-0.1-0.3-0.2-0.5-0.2-0.9c0.3-0.2,0.6-0.5,1.1-0.7c0.4-0.2,0.9-0.3,1.5-0.5c0.6-0.1,1.4-0.2,2.3-0.2c1.7,0,3,0.4,3.9,1.2
	c0.9,0.8,1.3,2.1,1.3,3.9v14.6c-0.6,0.1-1.3,0.1-2,0.2c-0.6,0.1-1.3,0.1-2.1,0.1C57.3,30,56.5,30.1,55.6,30.1L55.6,30.1z M55.9,27.8
	c1.3,0,2.3,0,2.9-0.1c0.3-0.1,0.6-0.1,0.8-0.2v-6.7l-3.2,0.1c-1.1,0.1-1.9,0.4-2.2,1c-0.4,0.6-0.6,1.5-0.6,2.7c0,0.5,0,0.9,0.1,1.3
	c0,0.4,0.1,0.7,0.3,1c0.1,0.3,0.4,0.5,0.6,0.7C54.9,27.7,55.3,27.8,55.9,27.8L55.9,27.8z M69.2,29.8c-0.1,0-0.2,0-0.3,0
	c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.5,0c-0.2,0-0.4,0-0.5,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.3,0V10.3c0.1,0,0.3,0,0.4,0
	c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0,0.4,0c0.1,0,0.2,0,0.3,0V29.8L69.2,29.8z M67.9,5.7
	c-0.2,0-0.4,0-0.6,0c-0.2,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.3,0c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.5
	c0-0.2,0-0.4,0-0.5c0-0.2,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.5,0c0.2,0,0.4,0,0.6,0
	c0.2,0,0.3,0,0.4,0c0.1,0,0.2,0,0.3,0c0,0.2,0,0.3,0,0.4c0,0.1,0,0.3,0,0.4c0,0.1,0,0.3,0,0.4c0,0.2,0,0.4,0,0.6c0,0.2,0,0.3,0,0.4
	c0,0.1,0,0.3,0,0.4c-0.1,0-0.2,0-0.3,0c-0.1,0-0.3,0-0.4,0C68.3,5.7,68.1,5.7,67.9,5.7L67.9,5.7z M78.6,10c0.3,0,0.5,0,0.8,0
	c0.3,0,0.5,0,0.7,0c0.3,0,0.5,0,0.7,0c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.4c0,0.1,0,0.3,0,0.4c0,0.2,0,0.3,0,0.5c0,0.1,0,0.3,0,0.4
	c0,0.1,0,0.2,0,0.4c-0.2,0-0.3,0-0.5,0c-0.2,0-0.3,0-0.5-0.1c-0.2,0-0.4,0-0.6,0c-0.3,0-0.6,0-0.8,0c-0.3,0-0.5,0-0.7,0.1
	c-0.3,0-0.5,0.1-0.7,0.1v17.3c-0.3,0.1-0.5,0.1-0.6,0.1c-0.2,0-0.4,0-0.6,0c-0.3,0-0.5,0-0.7,0c-0.2,0-0.4,0-0.6-0.1V10.3
	c0.3,0,0.7-0.1,1.2-0.1c0.4,0,0.8-0.1,1.3-0.1C77.4,10.1,78,10,78.6,10L78.6,10z M100.7,29.8c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0
	c-0.2,0-0.4,0-0.5,0c-0.2,0-0.4,0-0.6,0c-0.2,0-0.5,0-0.7-0.1l-3-11.7c-0.2-0.7-0.4-1.4-0.5-2c-0.1-0.6-0.2-1.1-0.3-1.5
	c-0.1-0.5-0.2-0.9-0.2-1.3h-0.2c0,0.3-0.1,0.7-0.2,1.2c-0.1,0.4-0.1,0.9-0.3,1.5c-0.1,0.6-0.3,1.3-0.5,2l-3,11.7c-0.2,0-0.4,0-0.5,0
	c-0.2,0-0.3,0-0.5,0c-0.2,0-0.3,0-0.5,0c-0.2,0-0.4,0-0.7,0c-0.3,0-0.5,0-0.8-0.1l-4.3-19.3c0.2-0.1,0.4-0.2,0.7-0.2
	c0.2-0.1,0.5-0.1,0.8-0.2c0.3-0.1,0.6-0.1,0.9-0.1l2.6,12.2c0.2,0.8,0.3,1.6,0.4,2.2c0.1,0.6,0.2,1.2,0.2,1.6c0.1,0.5,0.1,1,0.2,1.4
	h0.2c0.1-0.4,0.1-0.9,0.2-1.4c0.1-0.4,0.2-1,0.3-1.6c0.1-0.6,0.3-1.3,0.5-2.1l3-12.1c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4-0.1
	c0.1,0,0.3,0,0.5,0c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0l3.2,12.1c0.2,0.8,0.4,1.5,0.5,2.1
	c0.1,0.6,0.3,1.2,0.3,1.6c0.1,0.5,0.2,1,0.2,1.4h0.2c0-0.4,0.1-0.9,0.2-1.4c0.1-0.4,0.1-1,0.2-1.6c0.1-0.6,0.2-1.3,0.4-2l2.6-12.4
	c0.4,0,0.7,0,1,0.1c0.3,0.1,0.6,0.1,0.8,0.2c0.3,0.1,0.5,0.1,0.7,0.2L100.7,29.8L100.7,29.8z M111.1,30.1c-1.7,0-2.8-0.4-3.5-1.3
	c-0.7-0.9-1-2.3-1-4.2c0-1.9,0.4-3.4,1.3-4.4c0.8-1,2.2-1.5,4-1.6l3.2-0.1v-3.7c0-0.9-0.2-1.5-0.7-1.9c-0.5-0.4-1.1-0.6-2-0.6
	c-0.6,0-1.2,0.1-1.6,0.2c-0.5,0.1-0.9,0.3-1.3,0.4c-0.4,0.2-0.8,0.4-1.1,0.6c-0.2-0.2-0.3-0.3-0.4-0.5c-0.1-0.2-0.2-0.4-0.3-0.7
	c-0.1-0.3-0.2-0.5-0.2-0.9c0.3-0.2,0.6-0.5,1.1-0.7c0.4-0.2,0.9-0.3,1.5-0.5c0.6-0.1,1.4-0.2,2.3-0.2c1.7,0,3,0.4,3.9,1.2
	c0.9,0.8,1.3,2.1,1.3,3.9v14.6c-0.6,0.1-1.3,0.1-2,0.2c-0.6,0.1-1.3,0.1-2.1,0.1C112.8,30,112,30.1,111.1,30.1L111.1,30.1z
	 M111.4,27.8c1.3,0,2.3,0,2.9-0.1c0.3-0.1,0.6-0.1,0.8-0.2v-6.7l-3.2,0.1c-1.1,0.1-1.9,0.4-2.2,1c-0.4,0.6-0.6,1.5-0.6,2.7
	c0,0.5,0,0.9,0.1,1.3c0,0.4,0.1,0.7,0.3,1c0.1,0.3,0.4,0.5,0.6,0.7C110.4,27.7,110.8,27.8,111.4,27.8L111.4,27.8z M130.6,10.2
	c0.2-0.1,0.4-0.1,0.6-0.1c0.2,0,0.4,0,0.5,0c0.3,0,0.5,0,0.8,0c0.2,0,0.4,0,0.6,0.1v20.3c0,1.5-0.1,2.8-0.3,3.9
	c-0.2,1.1-0.6,2-1.1,2.6c-0.5,0.7-1.1,1.2-1.9,1.5c-0.8,0.3-1.7,0.4-2.7,0.4c-0.8,0-1.5-0.1-2.1-0.2c-0.6-0.1-1.1-0.3-1.4-0.5
	c-0.5-0.2-0.9-0.4-1.2-0.7c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.2,0.2-0.4,0.4-0.7c0.2-0.2,0.4-0.5,0.6-0.7c0.3,0.2,0.6,0.4,0.9,0.6
	c0.3,0.2,0.6,0.3,1.1,0.4c0.4,0.1,0.9,0.2,1.5,0.2c0.6,0,1.2-0.1,1.6-0.3c0.5-0.2,0.8-0.6,1.1-1.2c0.3-0.5,0.5-1.3,0.6-2.2
	c0.1-0.9,0.2-2,0.2-3.4l-2.2,0.1c-1.4,0.1-2.5,0-3.3-0.3c-0.8-0.2-1.5-0.7-1.9-1.2c-0.5-0.6-0.8-1.3-0.9-2.2c-0.2-0.9-0.3-2-0.3-3.2
	V10.2c0.2,0,0.3,0,0.5,0c0.1,0,0.3,0,0.4,0c0.2,0,0.3,0,0.5,0c0.1,0,0.3,0,0.5,0c0.2,0,0.4,0,0.6,0.1v13.1c0,0.8,0,1.4,0.1,2
	c0.1,0.6,0.3,1,0.5,1.4c0.3,0.4,0.7,0.6,1.2,0.8c0.5,0.2,1.2,0.2,2.1,0.2l2.2-0.1V10.2L130.6,10.2z"/>
                                        <path className="st1" d="M144.3,10c0.7,0,1.4,0.1,1.9,0.2c0.5,0.1,0.9,0.3,1.3,0.4c0.4,0.2,0.7,0.4,0.9,0.7c-0.1,0.2-0.2,0.4-0.3,0.6
	c-0.1,0.2-0.2,0.4-0.4,0.6c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2-0.2-0.4-0.4-0.7-0.5c-0.2-0.1-0.5-0.3-0.8-0.4c-0.3-0.1-0.8-0.2-1.3-0.2
	c-0.8,0-1.5,0.3-1.9,0.9c-0.4,0.6-0.6,1.3-0.6,2.2c0,0.8,0.1,1.3,0.2,1.8c0.1,0.4,0.3,0.8,0.6,1c0.3,0.2,0.7,0.4,1.2,0.5
	c0.5,0.1,1,0.2,1.7,0.4c1.1,0.2,2,0.7,2.7,1.6c0.7,0.8,1.1,2.1,1.1,3.7c0,2.1-0.5,3.6-1.4,4.5c-1,0.9-2.4,1.4-4.4,1.4
	c-0.8,0-1.5-0.1-2-0.2c-0.5-0.2-1-0.3-1.3-0.5c-0.4-0.2-0.7-0.5-1-0.8c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.4,0.4-0.6
	c0.2-0.2,0.4-0.4,0.6-0.6c0.2,0.3,0.4,0.5,0.7,0.7c0.3,0.2,0.6,0.3,0.9,0.5c0.4,0.1,0.8,0.2,1.3,0.2c1.3,0,2.2-0.3,2.7-1
	c0.5-0.6,0.7-1.5,0.7-2.5c0-0.8-0.1-1.4-0.3-1.9c-0.2-0.5-0.4-0.8-0.7-1.1c-0.3-0.3-0.7-0.4-1.2-0.6c-0.5-0.1-1-0.2-1.7-0.4
	c-1.2-0.2-2.1-0.7-2.7-1.4c-0.6-0.7-0.9-1.9-0.9-3.6c0-2.1,0.4-3.5,1.2-4.3C141.5,10.4,142.7,10,144.3,10L144.3,10z M164.8,20
	c0,3.3-0.5,5.8-1.5,7.5c-1,1.7-2.6,2.5-4.7,2.5c-2.1,0-3.7-0.8-4.7-2.5c-1-1.7-1.5-4.2-1.5-7.5v-0.8c0-1.4,0.1-2.7,0.3-3.9
	c0.2-1.1,0.5-2.1,1-2.9c0.5-0.8,1.1-1.4,1.9-1.8c0.8-0.4,1.8-0.6,3.1-0.6c1.3,0,2.3,0.2,3.1,0.6c0.8,0.4,1.4,1,1.9,1.8
	c0.5,0.8,0.8,1.8,1,2.9c0.2,1.1,0.3,2.4,0.3,3.9V20L164.8,20z M162.3,19.3c0-1.2-0.1-2.2-0.2-3.1c-0.1-0.9-0.3-1.6-0.6-2.2
	c-0.3-0.6-0.6-1-1.1-1.3c-0.5-0.3-1.1-0.4-1.9-0.4c-1.5,0-2.5,0.6-3,1.7c-0.5,1.1-0.7,2.9-0.7,5.2V20c0,1.2,0.1,2.2,0.2,3.2
	c0.1,0.9,0.3,1.8,0.6,2.4c0.3,0.7,0.7,1.2,1.1,1.6c0.5,0.4,1.1,0.5,1.8,0.5c0.7,0,1.4-0.2,1.9-0.5c0.5-0.4,0.9-0.9,1.1-1.6
	c0.3-0.7,0.5-1.5,0.6-2.4c0.1-0.9,0.2-2,0.2-3.2V19.3L162.3,19.3z M174.4,2.4c-1,0-1.7,0.2-2.3,0.6c-0.6,0.4-0.9,1-0.9,1.9v5.3h3.8
	c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3c0,0.1,0,0.3,0,0.4c0,0.2,0,0.3,0,0.5c0,0.1,0,0.3,0,0.4c0,0.1,0,0.2,0,0.4h-3.8v17.4
	c-0.2,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4,0c-0.2,0-0.3,0-0.4,0c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6-0.1V5.1c0-0.9,0.2-1.7,0.5-2.4
	c0.3-0.6,0.8-1.1,1.3-1.5c0.5-0.4,1.1-0.6,1.8-0.8c0.7-0.2,1.4-0.2,2-0.2c0.1,0,0.3,0,0.4,0c0.1,0,0.2,0,0.3,0h0.3
	c0,0.1,0,0.3,0,0.4c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.4c0,0.2,0,0.3,0,0.5c0,0.1,0,0.3,0,0.4c0,0.1,0,0.2,0,0.3H174.4L174.4,2.4z
	 M177.6,5.7l2.5-1v5.5h3.8c0,0.1,0,0.2,0,0.4c0,0.1,0,0.3,0,0.4c0,0.1,0,0.3,0,0.4c0,0.2,0,0.3,0,0.5c0,0.2,0,0.4-0.1,0.6h-3.8v17.4
	c-0.2,0-0.3,0-0.5,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.6,0c-0.2,0-0.5,0-0.6-0.1V5.7L177.6,5.7z"/>
                                        <polygon className="st1"
                                                 points="21.6,10.8 15.6,36.7 15.9,36.7 21.9,10.8 21.6,10.8 "/>
                                        <polygon className="st1"
                                                 points="19.7,10.8 13.7,36.7 13.4,36.7 19.4,10.8 19.7,10.8 "/>
                                        <polygon className="st1" points="11.7,10 5.5,36.7 5.2,36.7 11.4,10 11.7,10 "/>
                                        <polygon className="st1" points="13.6,10 7.4,36.7 7.7,36.7 13.9,10 13.6,10 "/>
                                        <polygon className="st1" points="3.2,29.5 23,29.5 23,29.8 3.2,29.8 3.2,29.5 "/>
                                        <polygon className="st1"
                                                 points="3.2,27.6 23.4,27.6 23.4,27.3 3.2,27.3 3.2,27.6 "/>
                                        <polygon className="st1"
                                                 points="4.3,17.2 25.3,17.2 25.3,16.9 4.3,16.9 4.3,17.2 "/>
                                        <polygon className="st1"
                                                 points="3.9,19.1 24.9,19.1 24.9,19.4 3.9,19.4 3.9,19.1 "/>
                                        <path className="st2" d="M2.1,29.3l0.4-1.7c0-0.2,0.2-0.3,0.4-0.3H6h1h0.1c0.2,0,0.3-0.1,0.3-0.3l0-0.1l0,0l2.3-9.7
	c0.1-0.2,0.2-0.3,0.4-0.3h6.5h1h0.1c0.2,0,0.3-0.1,0.3-0.3l0.2-0.7l1.3-5.6c0-0.2,0.2-0.3,0.4-0.3h1.8c0.3,0,0.5,0.2,0.4,0.5l-2,8.6
	c0,0.3-0.2,0.4-0.4,0.4H13h-0.9H12c-0.2,0-0.3,0.1-0.3,0.3l0,0l-2.2,9.6c-0.1,0.3-0.2,0.4-0.4,0.4H2.5C2.1,29.8,2,29.6,2.1,29.3
	L2.1,29.3z"/>
                                    </svg>
                                </Link>
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
