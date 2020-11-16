import React, {Component, Fragment} from 'react';
import HeaderComponent from '../../reuse/header/header.component';
import FooterComponent from '../../reuse/footer/footer.component';
import AboutHomeComponent from "../mainPage/about/about.component";
import CareerListItemComponent from "../../reuse/career/CareerListItem.component";
import LoaderComponent from "../../reuse/loader/Loader.component";

class CareerComponent extends Component {

    constructor(props){
        super(props);
        window.scrollTo(0, 0);

        this.state={
            gotCareers: false,
            gotAboutHome: false,
            careersList: [],
            careerID: null,
            careerBlockOffset: {},
            showLoader: true,
        };
    }

    getCareersList() {
        fetch('https://panel.stairwaysoft.com/api/wp/v2/posts?filter[category_name]=careers')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    gotCareers: Boolean(data.length),
                    careersList: data,
                    showLoader: false,
                })
            });
    }

    componentDidMount(){
        this.getCareersList();

        if (this.props.location.state && this.props.location.state.careerID) {
            const careerID = this.props.location.state.careerID;
            this.setState({
                careerID: careerID
            });

            this.props.history.replace('/career', null);
        }
    }

    updateDataStatus = (stateItem, value) => {
        this.setState({
            [stateItem]: value,

        });
    };

    updateCareerBlockOffsetArr = (careerID, offsetTopValue) => {
        const {careerBlockOffset} = this.state;
        careerBlockOffset[careerID] = offsetTopValue;
        this.setState({
            careerBlockOffset: careerBlockOffset
        })
    };

    render() {

        const {careersList, gotCareers, careerID} = this.state;

        if (careerID) {
            window.scrollTo({
                top: this.state.careerBlockOffset[careerID],
                behavior: "smooth"
            });
        } else {
            window.scrollTo(0, 0);
        }


        return (
            <Fragment>
                <LoaderComponent visible={this.state.showLoader}/>
                <HeaderComponent/>

                {/*<section className='career-img-section'>*/}
                <section className='career-img-section' style={{background: 'url("../img/career/career_bg_35.jpg") no-repeat center'}} >

                    {/*<img className='career-img-section__img' src="../img/career/career_bg_35.jpg" alt="team_img" />*/}

                    <div className='career-img-section__text-block'>
                        <h1 className='career-img-section__title'>Become part of the Stairway Soft team!</h1>
                        <div className='career-img-section__description'>
                            <p className='career-img-section__paragraph'>
                                Widely used for development of content management systems and project management tools,
                                we have a wide experience in using PHP for multiple consumer facing applications in network administration,
                                social networking and media domains.
                            </p>
                        </div>
                    </div>

                </section>

                <section className='career-list-section'>
                    <h2 className="section-title">Featured jobs</h2>
                    <div className="container">

                        {
                            gotCareers ?
                                (
                                    careersList.map((item, index) => {
                                        return (
                                            <CareerListItemComponent key={index}
                                                                     id={item.id}
                                                                     careerTitle={item.title}
                                                                     location={item.data.location}
                                                                     type={item.data.type_of_employment}
                                                                     technologies={item.data.technologies}
                                                                     addOffsetValue={this.updateCareerBlockOffsetArr}
                                            />
                                        )
                                    })
                                )
                                :
                                (
                                    <div className='no-career'>На данный момент нет открытых позиций.</div>
                                )
                        }

                    </div>
                </section>




                <AboutHomeComponent dataStatus={this.state} updateData={this.updateDataStatus}/>
                <FooterComponent/>
            </Fragment>
        );
    }
}

export default CareerComponent;
