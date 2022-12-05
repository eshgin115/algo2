import React, { Component } from "react";
class PersonalInfo extends Component {
  render() {
    return (
      <>
        <p>
          <b>Personal info: </b>
        </p>
        <p>Phone: {this.props.phone}</p>
        <p>Instagram: {this.props.instagram}</p>
        <p>Hobies: {this.props.hobies}</p>
      </>
    );
  }
}
export default PersonalInfo;
