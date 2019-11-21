import React, {Component} from 'react';
import HeaderComponent from '../../reuse/header/header.component';
import FooterComponent from '../../reuse/footer/footer.component';

class ClientComponent extends Component {
    constructor(props){
        super(props);
        window.scrollTo(0,0);

        this.state = {
            clients: [],
            slug: null
        };

        this.getClientsList();
    }

    getClientsList() {
        fetch('https://panel.stairwaysoft.com/api/wp/v2/pages?slug=clients')
            .then(response => response.json())
            .then(data => {
                this.setState({clients: data[0].data.client});
            });
    }


    render() {
        let {clients} = this.state;
        return (
            <div className={clients.length ? 'fade-in visible': 'fade-in'}>
                <HeaderComponent/>
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
                <section className="bottom-padding-150 shift-content">
                    <div className="container">
                        <h2 className="section-title section-title--large">Our clients & partners</h2>
                        <div className="clients-blocks">
                            {clients.map(client =>
                                <div key={client.title} className="clients-blocks__item entire-hover-block">
                                    <img src={client.thumbnail} className="clients-blocks__img" alt="client logo" />
                                    <div className="entire-hover-block__content">
                                        <div className="entire-hover-block__title">
                                            {client.title}
                                        </div>
                                        <div className="entire-hover-block__items-wrapper">
                                            {client.list_item.project && (
                                                <div className="entire-hover-block__project entire-hover-block__list-item">
                                                    {client.list_item.project}
                                                </div>
                                            )}
                                            {client.list_item.Date && (
                                                <div className="entire-hover-block__calendar entire-hover-block__list-item">
                                                    {client.list_item.Date}
                                                </div>
                                            )}
                                            {client.list_item.specialist_count && (
                                                <div className="entire-hover-block__team entire-hover-block__list-item">
                                                    {client.list_item.specialist_count}
                                                </div>
                                            )}
                                            {client.list_item.location && (
                                                <div className="entire-hover-block__pin entire-hover-block__list-item">
                                                    {client.list_item.location}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <FooterComponent/>
            </div>
        );
    }
}

export default ClientComponent;
