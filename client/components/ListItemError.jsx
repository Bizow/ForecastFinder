import React, {Component} from 'react';

export default class ListItemError extends Component {
    render() {
        return (
            <div className="list-item-error" style={{position:'relative'}}>
                <div className="vertical-center">
                    <img src="/images/error.svg" alt="" style={{width: '44px', margin: '20px'}} />
                    Please enter a valid latitude and longitude.
                </div>
            </div>
        );
    }
}