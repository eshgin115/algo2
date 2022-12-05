import React, { Component } from "react";
import Address from "./Address";
import Email from "./Email";
import Name from "./Name";
import PersonalInfo from "./PersonalInfo";
class Profile extends Component {
  render() {
    const {
      ProfileName,
      ProfileEmail,
      ProfileAddress,
      ProfileHobies,
      ProfileInstagram,
      ProfilePhone
    } = this.props;
    return (
      <center>
        <Name value={ProfileName} />
        <Email value={ProfileEmail} />
        <Address value={ProfileAddress} />
        <PersonalInfo
          hobies={ProfileHobies}
          instagram={ProfileInstagram}
          phone={ProfilePhone}
        />
      </center>
    );
  }
}
export default Profile;
