import {scrollToSectionSmooth} from "../module/module-scroll-smooth";
import {scrollToSection} from "../../../utils/scrollToSection";

export const scrollToSectionGetPosition = () => {

    let d = document.getElementsByTagName('h3');
    let  articleControlList = document.getElementsByClassName('article_control-list');


    articleControlList[0].classList.add('relative');
    articleControlList[0].style.height  =  articleControlList[0].getBoundingClientRect().height + 'px';
    articleControlList[0].classList.remove('relative');

    for (let s =0; s < d.length; s++){

        d[s].id= 'listId_'+s+'_to';
        d[s].setAttribute("setIdForLocation", 'listId_'+s);
        d[s].setAttribute("getLocationForControl", ( d[s].offsetTop - (document.getElementById('listId_'+s+'_to').scrollHeight + 50) ) );

    }

    for (let a =0; a < d.length; a++){

        articleControlList[0].children[a].addEventListener('click', function (){

            window.scrollTo({

                top: document.getElementById(this.id + "_to").offsetTop + document.getElementsByClassName('career-img-section')[0].clientHeight,
                behavior: "smooth"

            });

            console.log( document.getElementById(this.id + "_to").offsetTop)

        });

    }

    const articleControlTitle = document.getElementsByClassName('article_control-title')[0];
    const article_content = document.getElementsByClassName('article_content');
    const article_controlList = document.getElementsByClassName('article_control-list')[0];
    const section_article = document.getElementsByClassName('section_article')[0];
    if (articleControlTitle){

        function settings(){

            let ddd =  document.getElementsByClassName('section_article')[0];
            const pointForAbsolute = 201;
            let section_articleTop =  section_article.getBoundingClientRect().top;
            let section_articleBottom =  section_article.getBoundingClientRect().bottom;

            if ( section_articleTop < -70 && ddd !== undefined && (article_content[0].getBoundingClientRect().bottom - articleControlList[0].getBoundingClientRect().height) > pointForAbsolute){

                articleControlTitle.parentNode.classList.add('active_fixed');
                articleControlTitle.parentNode.classList.remove('active_absolute');
                articleControlTitle.parentNode.style.left = ddd.getBoundingClientRect().left + "px";


            }   else {

                articleControlTitle.parentNode.classList.remove('active_fixed');
                articleControlTitle.parentNode.classList.remove('active_absolute');
                articleControlTitle.parentNode.style.left = 0;

            }

            if (articleControlList.length !== 0){

                if ( (section_articleBottom - articleControlList[0].getBoundingClientRect().height) < pointForAbsolute ){

                    articleControlTitle.parentNode.classList.add('active_absolute');
                    articleControlTitle.parentNode.classList.remove('active_fixed');

                }

            }



            let h = document.getElementsByTagName('h3');

            for (let s =0; s < h.length; s++){

                article_controlList.children[s].classList.remove('active');
                let article_controlListArr = [];

                if (h[s].attributes.getlocationforcontrol !== undefined && section_article){

                    let l = 0;

                    if (h[s+1]){

                        l = ( h[s+1].attributes.getlocationforcontrol.value - 0 );

                    }else{

                        l = ( h[l].attributes.getlocationforcontrol.value - 0 ) + 99999;

                    }

                    if ( (  ( section_article.getBoundingClientRect().top )  * -1 ) > ( h[s].attributes.getlocationforcontrol.value - 0 ) && ( section_article.getBoundingClientRect().top * -1 ) <  l){

                        article_controlListArr[s] =  article_controlList.children[s];
                        article_controlListArr[article_controlListArr.length - 1].classList.add('active');

                    }else if ( section_article.getBoundingClientRect().top * -1 < 0 ){

                        article_controlList.children[0].classList.add('active');

                    }

                }

            }

        }

        window.addEventListener('scroll', function (e){

            settings();

        })

        window.addEventListener('resize', function (e){

            settings();

        })

    }

    const articleControl = document.getElementsByClassName('article_control')[0];
    const articleControlNavIco = document.getElementsByClassName('article_control-nav-ico')[0];

    articleControl.addEventListener('click', function (){

        this.classList.remove('mobile-active');

    })

    function mobileActiveF(){

        return articleControl.classList.add('mobile-active');

    }

    articleControlNavIco.addEventListener('click', mobileActiveF)

};
