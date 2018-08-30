import React, { Component } from "react";

const loginForm = {
  flex1: {
    flex: 1
  }
};

const user = [
  { email: "parul.2919@gmail.com", password: "08ddcs504" },
  { email: "abc@abc.com", password: "login@123" },
  { email: "testlogin@gmail.com", password: "test123" }
];

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      logged: "",
      error: "",
      success: ""
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    for (let i = 0; i < user.length; i++) {
      if (
        this.state.username == user[i].email &&
        this.state.password == user[i].password
      ) {
        this.state.logged = true;
      }
    }
    if (this.state.logged)
      return this.setState({
        success: "Login Successfull",
        error: "",
        logged: ""
      });
    else
      return this.setState({ error: "Login Failed", success: "", logged: "" });

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    return (
      <section className="p-5">
        <form className="" onSubmit={this.handleSubmit}>
          <div className="form-group d-flex">
            <label htmlFor="userid" className="mr-2">
              Username:{" "}
            </label>
            <input
              id="userid"
              className="p-half"
              style={loginForm.flex1}
              value={this.state.username}
              onChange={this.handleUserChange}
            />
          </div>
          <div className="form-group d-flex">
            <label htmlFor="userPassword" className="mr-2">
              Password:{" "}
            </label>
            <input
              id="userPassword"
              className="p-half"
              type="password"
              style={loginForm.flex1}
              value={this.state.password}
              onChange={this.handlePassChange}
            />
          </div>
          {this.state.error && (
            <h6
              data-test="error"
              onClick={this.dismissError}
              className="text-danger"
            >
              <button
                onClick={this.dismissError}
                className="btn btn-link text-danger p-0"
              >
                ✖
              </button>
              {this.state.error}
            </h6>
          )}

          {this.state.success && (
            <h6 data-test="success" className="text-success">
              {this.state.success}
            </h6>
          )}
          <input
            type="submit"
            value="Log In"
            data-test="submit"
            className="btn btn-primary mt-4"
          />
        </form>
      </section>
    );
  }
}

export default LoginForm;
