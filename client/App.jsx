import React, {Component} from 'react';
import {
    Container,
} from 'reactstrap';
import LatLonForm from './components/LatLonForm';
import SevenDayForecast from './components/SevenDayForecast';

export default class App extends Component {

    onForecastChange = (error, forecast) => {
        if (this.sevenDay && error) {
            this.sevenDay.setState({days: [], error: true});
        }
        if (this.sevenDay && forecast && forecast.daily) {
            this.sevenDay.setState({days: forecast.daily.data});
        }
    };

    render() {
        return (
            <div>
                <div className="top-nav">
                    <Container style={{position: 'relative', height: '70px'}}>
                        <div className="vertical-center">
                            <a href="" className="logo">
                                <img src="/images/logo.svg" className="Logo"/>
                            </a>
                        </div>
                    </Container>
                </div>
                <div className="hero">
                    <Container className="form-container">
                        <LatLonForm onForecastChange={this.onForecastChange}/>
                    </Container>
                </div>
                <Container>
                    <SevenDayForecast ref={sevenDay => {
                        this.sevenDay = sevenDay
                    }}/>
                </Container>
            </div>
        );
    }
}
