import React, { Component } from 'react';
import FlightTabs from "./../molecules/tabs/flight-tabs";


class LeftPane extends Component {
    render(){
        return (
            <div className="row">
                <FlightTabs/>
            </div>
       );
    }
    
}


export default LeftPane;