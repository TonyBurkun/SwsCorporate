import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";

class WorksReuseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works : []
        };

        this.getWorksList();
    }

    getWorksList() {
        fetch('http://cp.stairwaysoft.com/api/wp/v2/posts?filter[category_name]=portfolio')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    works: data
                });

               if (this.props.updateData) {
                   this.props.updateData('gotWorksReuse', true);
               }

               if (this.props.gotData) {
                   this.props.gotData('gotWorksReuse', true);
               }
            });
    }





    render() {
        let works = this.state.works.slice(0,6);

        return (
            <Fragment>
                <section className="bottom-padding-70">
                    <h2 className="section-title">Our works</h2>
                    <div className="container">
                        <div className="works-list">
                            {works.map(work =>
                                <Link to={'/work/' + work.slug} key={work.slug} className="works-list__item one-work-block blackout-block">
                                    <img src={work.featured_image_url} alt="example of work" />
                                    <div className="blackout-block__inner blackout-block__inner--bottom">
                                        <div className="blackout-block__title">
                                            {work.title}
                                            <span>{work.data.project_description.location}</span>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>

                        <div className="btn-block btn-block--center">
                            <Link to={'/portfolio'} className="btn btn--upper">more cases</Link>
                        </div>
                    </div>
                </section>

            </Fragment>
        );
    }
}

export default WorksReuseComponent;
