import React from "react";
import "./SignupPage.css";
export default class SignPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      mobileNo: "",
      password: "",
    };
  }
  render() {
    console.log(this.state.email, "abhi");
    console.log(this.state.mobileNo, "abhishek");
    console.log(this.state.password, "abhisheky");
    return (
      <div className="signup_main_div">
        <div className="create_account">
          Create Account For Traackr
          <form className="fill_details">
            <h6 className="email">Email Address</h6>
            <input
              className="enter"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            ></input>
            <h6 className="email">MobileNumber</h6>
            <input
              className="enter"
              onChange={(e) => {
                this.setState({ mobileNo: e.target.value });
              }}
            ></input>
            <h6 className="email">Password</h6>
            <input
              className="enter"
              type="password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            ></input>
            <button className="create">Create Account</button>
          </form>
        </div>
      </div>
    );
  }
}
