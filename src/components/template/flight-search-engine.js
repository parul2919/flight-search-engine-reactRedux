import React, { Component, Fragment } from 'react';
import LeftPane from "./../organisms/leftPane";
import RightPane from "./../organisms/rightPane";


class FlightSearchEngine extends Component {
    render(){
        return (
            <Fragment> 
                <aside className="col-lg-4 col-md-5 col-sm-12 border border-dark p-3">
                    <LeftPane/>
                </aside>
                <section className="border border-dark p-3 col-lg-8 col-md-7 col-sm-12">
                    <RightPane/>
                </section>
            </Fragment>
       );
    }
    
}


export default FlightSearchEngine;