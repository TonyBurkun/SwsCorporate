import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";


class NotFound extends Component {


    render() {
        console.log(this.state);
        return (
            <Fragment>
              <section>
                  <div className="container">
                      <div className="not-found-section">
                          <div className="not-found-img"/>
                          <div className="not-found-section__text">
                              Oooops, something went wrong
                          </div>
                          <Link to="/" className="not-found-section__link">Go Home</Link>
                      </div>
                  </div>
              </section>
            </Fragment>
        );
    }
}

export default NotFound;
