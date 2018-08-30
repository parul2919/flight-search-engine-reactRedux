import React, { Component, Fragment } from "react";
import type from "react";
import { connect } from "react-redux";
import { formatHourMinute } from "./utill";
import { addFlightToCartOneWay } from "../../../actions/index";
import FlightInfo from "./../../atoms/flightInfo";
import logo from "./../../../logo.svg";
import BookingGrp from "./../../atoms/bookingGrp";

type Props = {
  flightCode: string,
  origin: string,
  destination: string,
  fare: number,
  showDuration: boolean,
  id: number,
  type: string
};

class OneWayFlightDetail extends Component {
  bookFlight = () => {
    console.log("bookFlight is called");
    const {
      flightCode,
      departureDate,
      origin,
      destination,
      fare,
      duration,
      arrival,
      showDuration,
      id,
      type,
      addToCart
    } = this.props;

    addToCart({
      flightCode,
      departureDate,
      origin,
      destination,
      fare,
      duration,
      arrival,
      showDuration,
      type,
      id
    });
  };

  render() {
    const {
      flightCode,
      departureDate,
      origin,
      destination,
      fare,
      duration,
      arrival,
      showDuration,
      id,
      flightType
    } = this.props;
    return (
      <Fragment>
        <div className="row col-sm-12 border m-0 mb-3 p-3 " key={id}>
          <div className="col-sm-12 col-md-7 col-lg-9 flight-card">
            <span className="block h4">
              &#8377;
              {fare}
            </span>
            <FlightInfo
              className="flight-info-blk"
              flightCode={flightCode}
              arrival={formatHourMinute(arrival)}
              departure={formatHourMinute(departureDate)}
              origin={origin}
              destination={destination}
              showDuration={true}
              duration={duration}
              type={type}
            />
          </div>
          <div className="col-sm-12 col-md-5 col-lg-3">
            <BookingGrp
              imgSrc={logo}
              imageTitle={flightCode}
              buttonTitle="Book Flight"
              bookFlight={() => this.bookFlight}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  addToCart: data => dispatch(addFlightToCartOneWay(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneWayFlightDetail);
