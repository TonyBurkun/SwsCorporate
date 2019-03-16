import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router} from "react-router-dom";

class ClientComponent extends Component {
    constructor(){
        super();
        window.scrollTo(0,0);
        // if(document.querySelector('.header')){
        //     document.querySelector('.header').classList.add('header-fixed')
        // }
    }
    render() {
        return (
            <Router>
                <section className="top-map-section">
                    <div className="top-map-section__point Canada"><span>Canada</span></div>
                    <div className="top-map-section__point USA"><span>USA</span></div>
                    <div className="top-map-section__point UK"><span>UK</span></div>
                    <div className="top-map-section__point ND"><span>ND</span></div>
                    <div className="top-map-section__point France"><span>France</span></div>
                    <div className="top-map-section__point Spain"><span>Spain</span></div>
                    <div className="top-map-section__point Latvia"><span>Latvia</span></div>
                    <div className="top-map-section__point Ukraine"><span>Ukraine</span></div>
                    <div className="top-map-section__point Russia"><span>Russia</span></div>
                    <div className="top-map-section__point Israel"><span>Israel</span></div>
                    <div className="top-map-section__point Kazakhstan"><span>Kazakhstan</span></div>
                </section>
            </Router>
        );
    }
}

export default ClientComponent;