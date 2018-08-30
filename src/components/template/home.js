import React, { Component } from "react";
import homeBg from "../../home-bg.jpg";

class HomePage extends Component {
  render() {
    const divStyle = {
      backgroundImage: "url(" + homeBg + ")",
      width: "100%",
      height: "550px"
    };
    return (
      <section
        className="d-flex align-items-center flex-wrap text-center"
        style={divStyle}
      >
        <div className="col-12">
          <h1>Flight Search Engine</h1>
        </div>
      </section>
    );
  }
}

export default HomePage;
