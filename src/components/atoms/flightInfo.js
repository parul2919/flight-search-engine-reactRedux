import React from 'react';
import type { Node } from 'react';

type Props = {
  className:string,
  flightCode: string,
  origin: string,
  destination:string,
  arrival:string,
  departure:string,
  showDuration:boolean,
  isReturn:boolean,
};

const FlightInfo = ({
  className,
  flightCode,
  origin,
  destination,
  departure,
  arrival,
  duration,
  showDuration,
  isReturn,
  ...others,
}: Props): Node => {
    
 return (
    <div className={className}>
      <div className="code_info">
        <span className="block small">{flightCode}</span>
      </div>
      {
         isReturn ? (
            <div className="origin_info">
                <span className="small-gray">{destination} &rarr;</span>
                <span className="small-gray">{origin} </span> 
            </div>
         ): (
            <div className="origin_info">
                <span className="small-gray">{origin} &rarr;</span>  
                <span className="small-gray">{destination}</span>
            </div>
        )                        
      }
      
      <div className="row">
        <p className="m-0 col-lg-6 col-md-12">Departure: {departure}</p>
        <p className="m-0 col-lg-6 col-md-12">Arrival: {arrival}</p>
      </div>
     {showDuration ? (
        <div className="duration_info">
            <span className="block">Duration: {duration}</span>
        </div>
     ) : null}
      
    </div>
);
};

export default FlightInfo;
