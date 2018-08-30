import React, { Component, Fragment } from "react";
import type { Node } from "react";
import { connect } from "react-redux";
import moment from "moment";
import FlightInfo from "../atoms/flightInfo";
import logo from "../../logo.svg";

export const formatHourMinute = date => moment(date).format("HH:mm");

type Props = {
  cartItems: array
};

class Cart extends Component {
  static defaultProps = {
    cartItems: []
  };

  renderFlightList = () => {
    const { cartItems } = this.props;

    return cartItems.cart.map(flight => {
      if (flight.type === "one-way") {
        return (
          <div className="border p-3 align-items-center d-flex bg-white mt-3">
            <div className="col-9">
              <h5>Booking Details:</h5>
              <div className="">
                <span>
                  <strong>Origin:</strong> {flight.origin}
                </span>
                <span className="pl-5">
                  <strong>Departure:</strong> {flight.destination}
                </span>
                <span className="pl-5">
                  <strong>Booking type:</strong> {flight.type}
                </span>
              </div>
              <div className="">
                <strong>Flight-code:</strong> {flight.flightCode}
              </div>
              <div className="">
                <strong>Flight Fare:</strong> {flight.fare}
              </div>
            </div>
            <div className="col-4">
              <img src={logo} />
            </div>
          </div>
        );
      } else {
        // eslint-disable-line
        return (
          <div className="border p-3 align-items-center d-flex bg-white mt-3">
            <div className="col-5">
              <h5>Booking Details:</h5>
              <div className="">
                <span>
                  <strong>Origin:</strong> {flight.flight.origin}
                </span>
                <span className="pl-5">
                  <strong>Departure:</strong> {flight.flight.destination}
                </span>
              </div>
              <div className="">
                <span>
                  <strong>Flight-code:</strong> {flight.flight.route_one_code}
                </span>
              </div>
              <div className="">
                <span>
                  <strong>Flight Fare:</strong> {flight.flight.route_one_fare}
                </span>
              </div>
              <div className="">
                <span className="">
                  <strong>Flight-type:</strong> {flight.flight.type}
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="">
                <span>
                  <strong>Origin:</strong> {flight.flight.destination}
                </span>
                <span className="pl-5">
                  <strong>Departure:</strong> {flight.flight.origin}
                </span>
              </div>
              <div className="">
                <span>
                  <strong>Flight-code:</strong> {flight.flight.route_one_code}
                </span>
              </div>
              <div className="">
                <span>
                  <strong>Flight Fare:</strong> {flight.flight.route_two_fare}
                </span>
              </div>
            </div>
            <div className="col-2">
              <img src={logo} />
            </div>
          </div>
        );
      }
    });
  };

  renderDummyHtml = () => {
    return <h4>No Flights added yet!</h4>;
  };
  render() {
    console.log("this.props.cartItems: ", this.props.cartItems);
    return (
      <div className="col-8 m-auto">
        {this.props.cartItems.cart.length !== 0
          ? this.renderFlightList()
          : this.renderDummyHtml()}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  cartItems: state.cart
});

export const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
