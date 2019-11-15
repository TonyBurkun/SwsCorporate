import React, {Component, Fragment} from 'react';





class LoaderComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            showLoader: true
        };
    }

    render() {

        const {visible} = this.props;

        return (
           <Fragment>
               <div className={'loading ' + (visible ? ('show'): ('hide'))}>
                   <div className="loading-text">
                       <span className="loading-text-words">L</span>
                       <span className="loading-text-words">O</span>
                       <span className="loading-text-words">A</span>
                       <span className="loading-text-words">D</span>
                       <span className="loading-text-words">I</span>
                       <span className="loading-text-words">N</span>
                       <span className="loading-text-words">G</span>
                   </div>
               </div>
           </Fragment>
        );
    }
}

export default LoaderComponent;
