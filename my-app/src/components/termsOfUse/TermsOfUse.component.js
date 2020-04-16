import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import HeaderComponent from '../../reuse/header/header.component';
import FooterComponent from '../../reuse/footer/footer.component';
import LoaderComponent from "../../reuse/loader/Loader.component";

class TermsOfUse extends Component{
    constructor(props){
        super(props);

        this.state = {
            pageData: [],
            showLoader: true
        };
    }

    getData() {
        fetch('https://panel.stairwaysoft.com/api/wp/v2/pages?slug=terms-of-use/' )
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pageData: data[0].data,
                    showLoader: false
                });
            });



    }


    componentDidMount(){
        this.getData();
    }






    render(){

        const {pageData} = this.state;
        console.log(pageData);
        return (
            <Fragment>
                <LoaderComponent visible={this.state.showLoader}/>
                <HeaderComponent/>
                <section className='career-img-section'>
                    <img
                        className='career-img-section__img'
                        src="../img/career/career_bg_35.jpg" alt="team_img"
                    />
                    <div className='career-img-section__text-block'>
                        <h1 className='career-img-section__title'>{pageData.head_text}</h1>
                    </div>
                </section>

                <section className='bottom-padding-70 text-page'>
                    <div className="container">
                        <h2 className='section-title'>{pageData.title}</h2>
                        <div dangerouslySetInnerHTML={{__html: pageData.description}}>

                        </div>
                    </div>
                </section>
                <FooterComponent/>

            </Fragment>
        )

    }
}


export default TermsOfUse;