import React, { Component } from "react";

class NoHooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Harry",
      lastName: "Potter"
    };

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
  }

  handleChangeFirstName = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  handleChangeLastName = e => {
    this.setState({
      lastName: e.target.value
    });
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <section>
        <h1>Demo Without Hooks</h1>
        <label>
          First Name
          <input value={firstName} onChange={this.handleChangeFirstName} />
        </label>
        <br />
        <label>
          Last Name
          <input value={lastName} onChange={this.handleChangeLastName} />
        </label>
      </section>
    );
  }
}

export default NoHooks;
