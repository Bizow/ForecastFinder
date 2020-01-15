import React, {Component} from 'react';
import JumbotronEmpty from "./JumbotronEmpty";
import DayList from "./DayList";
import ListItemError from "./ListItemError";

export default class SevenDayForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {days: [], error: false};
    }

    render() {
        let template;

        if (this.state.days.length > 0) {
            template = <DayList days={this.state.days}/>
        } else if(this.state.error) {
            template = <ListItemError />
        } else {
            template = <JumbotronEmpty />
        }

        return (
            <div>
                {template}
            </div>
        );
    }
}