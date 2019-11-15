import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


class CareerListItemComponent extends Component {
    constructor(props){
        super(props);
        this.careerBlock = React.createRef();

        this.state= {
            postID: '',
            careerTitle: '',
            location: '',
            technologies: '',
            type: '',
        }

    };

    componentDidMount(){
        this.setState({
            postID: this.props.id,
            careerTitle: this.props.careerTitle,
            location: this.props.location,
            technologies: this.props.technologies,
            type: this.props.type,
        });

        const block = this.careerBlock;
        console.log(block.current.offsetTop);

        console.log(this);

        this.props.addOffsetValue(this.props.id, block.current.offsetTop - 70);
    }






    render() {

        console.log(this.state);

        const {postID, careerTitle, location, type, technologies} = this.state;


        return (
          <div id={postID} className='career-list-item' ref={this.careerBlock}>
            <h3 className='h3-title'>{careerTitle}</h3>
            <div className='career-list-item__description-wrap'>
               <div className='left-side'>
                   <div className='career-item career-item__location'>
                       <span className='career-item__capture'>Location:</span>
                       <span className='career-item__value'>{location}</span>
                   </div>

                   <div className='career-item career-item__type'>
                       <span className='career-item__capture'>Type of employment:</span>
                       <span className='career-item__value'>{type}</span>
                   </div>

                   {Boolean(technologies.length) &&
                       <div className='career-item career-item__technology'>
                           <span className='career-item__capture'>Technologies:</span>
                           <span className='career-item__value'>{technologies}</span>
                       </div>
                   }
               </div>
               <div className='right-side'>
                   <Link to={'/career/' + postID} className="more-btn">More information</Link>
               </div>
            </div>
          </div>
        );
    }
}

export default CareerListItemComponent;

CareerListItemComponent.propTypes = {
    careerTitle: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    technologies: PropTypes.string,
    type: PropTypes.string.isRequired,
};