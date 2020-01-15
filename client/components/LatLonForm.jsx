import React, {Component} from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import PropTypes from 'prop-types';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export default class LatLonForm extends Component {
    constructor(props) {
        super(props);
        //this.state = {lat: 40.149754, lon: -105.142741};
        this.state = {lat: 0, lon: 0};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateLatLon(lat, lon) {
        let valid = true;
        if(!lat || lat < -90 || lat > 90){
            valid = false;
        } else if (!lon || lon < -180 || lon > 180) {
            valid = false;
        }
        return valid;
    }

    handleChange(event) {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        const self = this;
        const lat = self.state.lat;
        const lon = self.state.lon;

        if (this.validateLatLon(lat, lon)) {
            Meteor.call('getForecast', lat, lon, (error, forecast) => {
                if (self.props.onForecastChange) {
                    self.props.onForecastChange(error, forecast);
                }
            });
        } else if (self.props.onForecastChange){
            self.props.onForecastChange('invalid lat/lon');
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row form>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="lat" className="lg-text">Latitude <span className="helper-text">-90 to 90</span></Label>
                            <Input bsSize="lg" type="number" name="lat" id="lat" onChange={this.handleChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="lon" className="lg-text">Longitude <span className="helper-text">-180 to 180</span></Label>
                            <Input bsSize="lg" type="number" name="lon" id="lon" onChange={this.handleChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <Button size="lg" className="vertical-center" color="primary" style={{marginTop: '14px', width: '206px'}}>
                            <MaterialIcon icon="search" size='small' invert />
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

LatLonForm.propTypes = {
    onForecastChange: PropTypes.func
};