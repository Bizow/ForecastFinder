import React, {Component} from 'react';
import {
    Jumbotron,
    Container,
} from 'reactstrap';

export default class JumbotronEmpty extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid className="empty-forecast">
                    <Container fluid>
                        <img src="/images/search.svg" style={{display: 'block', width: '124px', marginLeft:'auto',marginRight:'auto'}}/>
                        <p className="search-text">
                            Search a location to view the forecast
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}