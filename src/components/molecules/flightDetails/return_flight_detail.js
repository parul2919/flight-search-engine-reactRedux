import React, { Fragment, Component } from "react";
import type { Node } from "react";
import { connect } from "react-redux";
import { formatHourMinute } from "./utill";
import { addFlightToCartTwoWay } from "../../../actions/index";
import FlightInfo from "./../../atoms/flightInfo";
import logo from "./../../../logo.svg";
import BookingGrp from "./../../atoms/bookingGrp";

type Props = {
  flight: object,
  showDuration: boolean,
  routeId: number,
  isReturn: boolean
};

class ReturnFlightDetail extends Component {
  bookFlight = () => {
    console.log("bookFlight is called");
    const { flight, addToCart } = this.props;

    addToCart({
      flight
    });
  };

  render() {
    const { flight, showDuration, routeId, isReturn } = this.props;
    const { origin, destination } = flight;
    return (
      <div className="row col-sm-12 border m-0 mb-3 p-3" key={flight.id}>
        <div className="col-sm-9 flight-card">
          <div className="row">
            <div className="col-sm-5 col-offset-2">
              <Fragment>
                <span className="block h4">
                  &#8377;
                  {flight["route_one_fare"] + flight["route_two_fare"]}
                </span>
              </Fragment>
              <FlightInfo
                className="flight-info-blk"
                flightCode={flight["route_one_code"]}
                arrival={formatHourMinute(flight["route_one_arrival"])}
                departure={formatHourMinute(flight["route_one_departure"])}
                origin={origin}
                destination={destination}
                showDuration={false}
                duration={flight["route_one_duration"]}
              />
            </div>
            <div className="col-sm-5">
              <FlightInfo
                className="flight-info-blk mt-4"
                flightCode={flight["route_two_code"]}
                arrival={formatHourMinute(flight["route_two_arrival"])}
                departure={formatHourMinute(flight["route_two_departure"])}
                origin={origin}
                destination={destination}
                showDuration={false}
                duration={flight["route_two_duration"]}
                isReturn={true}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <BookingGrp
            imgSrc={logo}
            imageTitle="retrun trip flight"
            buttonTitle="Book This Flight"
            bookFlight={() => this.bookFlight}
          />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  addToCart: data => dispatch(addFlightToCartTwoWay(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReturnFlightDetail);
