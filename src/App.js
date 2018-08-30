import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import FlightSearchEngine from "./components/template/flight-search-engine";
import Header from "./components/template/header";
import Footer from "./components/template/footer";
import HomePage from "./components/template/home";
import Cart from "./components/template/cart";
import LoginForm from "./components/template/loginForm";
import Modal from "./components/molecules/modal/modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  render() {
    return (
      <Router>
        <div className="">
          <Header openModal={this.openModal} closeModal={this.closeModal} />
          <main className="col-md-12 col-lg-12 text-left p-5 bg-light mb-5">
            <div className="row">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/flightPage" component={FlightSearchEngine} />
              <Route exact path="/cart" component={Cart} />
            </div>
          </main>
          <Footer />

          <Modal
            isOpen={this.state.isModalOpen}
            onClose={() => this.closeModal()}
          >
            <LoginForm />
          </Modal>
        </div>
      </Router>
    );
  }
  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }
}

export default App;
