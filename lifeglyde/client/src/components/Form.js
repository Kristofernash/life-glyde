import React from "react";
import "./Form.css";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    medicalNotes: "",
    emcFirstName: "",
    emcLastName: "",
    emcRelation: "",
    emcPhoneNumber: "",
    medicalInsuranceProvider: "",
    wingColor: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          placeholder="First Name"
          value={this.state.firstName}
          onChange={e => this.setState({ firstName: e.target.value })}
        />
        <input
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={e => this.setState({ lastName: e.target.value })}
        />
        <input
          placeholder="Phone Number"
          value={this.state.phoneNumber}
          onChange={e => this.setState({ phoneNumber: e.target.value })}
        />
        <input
          placeholder="Medical Notes"
          value={this.state.medicalNotes}
          onChange={e => this.setState({ medicalNotes: e.target.value })}
        />
        <input
          placeholder="Emergency Contact First Name"
          value={this.state.emcFirstName}
          onChange={e => this.setState({ emcFirstName: e.target.value })}
        />
        <input
          placeholder="Emergency Contact Last Name"
          value={this.state.emcLastName}
          onChange={e => this.setState({ emcLastName: e.target.value })}
        />
        <input
          placeholder="Emergency Contact Relation"
          value={this.state.emcRelation}
          onChange={e => this.setState({ emcRelation: e.target.value })}
        />
        <input
          placeholder="Emergency Contact Phone #"
          value={this.state.emcPhoneNumber}
          onChange={e => this.setState({ emcPhoneNumber: e.target.value })}
        />
        <input
          placeholder="Medical Insurance Provider"
          value={this.state.medicalInsuranceProvider}
          onChange={e =>
            this.setState({ medicalInsuranceProvider: e.target.value })
          }
        />

        <input
          placeholder="Wing Color"
          value={this.state.wingColor}
          onChange={e => this.setState({ wingColor: e.target.value })}
        />
        <button onClick={e => this.onSubmit(e)}>hello</button>
      </form>
    );
  }
}
export default Form;
