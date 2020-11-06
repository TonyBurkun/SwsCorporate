import React, {Component} from "react";
import { Link } from "react-router-dom";

//import {Redirect} from "@reach/router";

class PopUpAdvertising extends Component {

    componentDidMount() {

        const popupOutsourcing = document.getElementsByClassName('popup_outsourcing')[0];

        if (window.banner === true) {

            document.getElementsByClassName('popup_outsourcing_img-close')[0].addEventListener('click', closePopupAdvertisingX);

            function closePopupAdvertisingX() {

                popupOutsourcing.classList.add('hidden');
                popupOutsourcing.setAttribute('status', 'closed');

            }

            window.addEventListener('scroll', closePopupAdvertising);

            function closePopupAdvertising() {

                if (popupOutsourcing.attributes.status === undefined) {

                    if (window.pageYOffset > (window.innerHeight / 2)) {

                        popupOutsourcing.classList.add('hidden');

                    } else {

                        popupOutsourcing.classList.remove('hidden');

                    }

                }

            }

        }

    }

    render() {

            return(

                <div className="popup_outsourcing">

                    <img src="../../img/popup_outsourcing/popup_pic_sws.png" alt="" className={'popup_outsourcing_img'}/>
                    <img src="../../img/popup_outsourcing/esc_ico.svg" alt="" className={'popup_outsourcing_img-close'}/>

                    <div className="popup_outsourcing_container">

                        <div className="popup_outsourcing_container-title">What is IT outsourcing?</div>
                        <div className="popup_outsourcing_container-description">

                            How does IT outsourcing work? Myths about outsourcing for small businesses and more in our article, <i>let's read!</i>

                        </div>

                        <Link to={'/article/article-it-outsourcing'} className="popup_outsourcing_container-link"  >read more</Link>

                    </div>

                </div>

            )

    }

}
export default PopUpAdvertising;
