import moment from 'moment';
import React, {Component} from "react";
import {
    Row,
    Col,
} from 'reactstrap';

/**
 @this.props.day
 time: 1578726000
 summary: "Clear throughout the day."
 icon: "clear-day"
 sunriseTime: 1578752580
 sunsetTime: 1578786960
 moonPhase: 0.55
 precipIntensity: 0.0009
 precipIntensityMax: 0.0022
 precipIntensityMaxTime: 1578729420
 precipProbability: 0.05
 precipType: "snow"
 precipAccumulation: 0.29
 temperatureHigh: 46.35
 temperatureHighTime: 1578779760
 temperatureLow: 22.1
 temperatureLowTime: 1578836400
 apparentTemperatureHigh: 40.2
 apparentTemperatureHighTime: 1578778860
 apparentTemperatureLow: 14.28
 apparentTemperatureLowTime: 1578836460
 dewPoint: 10.56
 humidity: 0.54
 pressure: 1014.8
 windSpeed: 5.33
 windGust: 21.96
 windGustTime: 1578780360
 windBearing: 266
 cloudCover: 0.17
 uvIndex: 2
 uvIndexTime: 1578769800
 visibility: 10
 ozone: 376.4
 temperatureMin: 12.46
 temperatureMinTime: 1578733920
 temperatureMax: 46.35
 temperatureMaxTime: 1578779760
 apparentTemperatureMin: 6.7
 apparentTemperatureMinTime: 1578754320
 apparentTemperatureMax: 40.2
 apparentTemperatureMaxTime: 1578778860
 */
export default class ListItemDay extends Component {
    constructor(props) {
        super(props);
        const day = moment.unix(props.day.time);
        this.display = {
            'clear-day': {icon: 'clear-day', label: 'Clear'},
            'clear-night': {icon: 'clear-day', label: 'Clear'},
            'rain': {icon: 'rainy', label: 'Rain'},
            'snow': {icon: 'cloudy-snowy', label: 'Snow'},
            'sleet': {icon: 'cloudy-snowy', label: 'Snow'},
            'wind': {icon: 'clear-day', label: 'Clear'},
            'fog': {icon: 'fog', label: 'Foggy'},
            'cloudy': {icon: 'cloudy', label: 'Cloudy'},
            'partly-cloudy-day': {icon: 'partly-cloudy', label: 'Partly Cloudy'},
            'partly-cloudy-night': {icon: 'partly-cloudy-moon', label: 'Partly Cloudy'},
            'hail': {icon: 'cloudy-snowy', label: 'Hail'},
            'thunderstorm': {icon: 'thunder', label: 'Thunderstorms'},
            'tornado': {icon: 'thunder', label: 'Tornado'}
        };
        this.state = {
            month: day.format('MMM'),
            date: day.date()
        };
    }

    getIcon() {
        const display = this.display[this.props.day.icon];
        const icon = display ? display.icon : 'partly-cloudy';
        return `/images/weather/${icon}.svg`;
    }

    getLabel() {
        const display = this.display[this.props.day.icon];
        return display ? display.label : 'Partly Cloudy';
    }

    getStyle() {
        let style = `list-item`;
        const day = this.props.day;
        if(this.getLabel() === "Clear" && day.precipProbability < 10 && day.temperatureMax > 32){
            style = `${style} ideal-day`;
        }
        return style;
    }


    round(key){
        return Math.round(this.props.day[key]);
    }

    render() {
        return (
            <Row>
                <Col sm="auto" style={{color: 'black'}}>
                    <Row>
                        <Col style={{textAlign: 'center'}} className="md-text">
                            {this.state.month}
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{lineHeight: 1, width:'80px'}} className="xxl-text bold-text">
                            {this.state.date}
                        </Col>
                    </Row>
                </Col>
                <Col md={10}>
                    <div className={this.getStyle()}>
                        <Row className="full-height">
                            <Col md={5} lg={6}>
                                <Row className="full-height">
                                    <Col md={4} lg={3} className="m-tb-auto"><img className="ml-3" src={this.getIcon()} alt="" style={{width: '44px'}}/></Col>
                                    <Col md={8} lg={9}><div className="vertical-center">{this.getLabel()}</div></Col>
                                </Row>
                            </Col>
                            <Col md={7} lg={6}>
                                <Row className="full-height" style={{justifyContent: 'center'}}>
                                    <Col className="m-tb-auto">
                                        <Row><Col className="weather-label">High</Col></Row>
                                        <Row><Col className="weather-value">{this.round('temperatureHigh')}&#176;</Col></Row>
                                    </Col>
                                    <Col className="m-tb-auto">
                                        <Row><Col className="weather-label">Low</Col></Row>
                                        <Row><Col className="weather-value">{this.round('temperatureLow')}&#176;</Col></Row>
                                    </Col>
                                    <Col className="m-tb-auto">
                                        <Row><Col className="weather-label">Wind</Col></Row>
                                        <Row><Col className="weather-value">{this.round('windSpeed')}mph</Col></Row>
                                    </Col>
                                    <Col md={5} className="m-tb-auto">
                                        <Row><Col className="weather-label">Precip</Col></Row>
                                        <Row><Col className="weather-value">{this.round('precipProbability')}% chance</Col></Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        );
    }
}