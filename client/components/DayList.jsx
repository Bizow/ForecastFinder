import React, {Component} from 'react';
import ListItemDay from "./ListItemDay";

export default class DayList extends Component {

    renderDays() {
        return this.props.days.map((day) => (
            <ListItemDay key={day.time} day={day} />
        ));
    }

    render() {
        return (
            <div>
                {this.renderDays()}
            </div>
        );
    }
}