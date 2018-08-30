import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="text-muted">
        <div className="container">
          <h4>Flight Search Engine Readme. </h4>
          <ul>
            <li>
              Departure Dates and Arrival dates can only be within 2 days from
              the time search is been made.
            </li>
            <li>
              Login will work only for 3 credential combinations.
              <ol>
                <li>
                  <span>email: "parul.2919@gmail.com"</span>
                  <span className="pl-3"> password: "08ddcs504" </span>
                </li>
                <li>
                  <span>email: "abc@abc.com"</span>
                  <span className="pl-3"> password: "login@123" </span>
                </li>
                <li>
                  <span>email: "testlogin@gmail.com"</span>
                  <span className="pl-3"> password: "test123" </span>
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
