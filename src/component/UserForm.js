import React, { Component } from 'react'
import FormUserDetail from "./FormUserDetail"
import SelectPlan from "./SelectPlan"


export class UserForm extends Component {
  state = {
    step: 1,
    Name: "",
    EmailAddress: "",
    PhoneNumber: "",

  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { step } = this.state;
    const { Name, EmailAddress, PhoneNumber } = this.state;
    const values = { Name, EmailAddress, PhoneNumber }

    switch (step) {
      default:
        return (
          <FormUserDetail
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )

      case 1:
        return (
          <FormUserDetail
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )

      case 2:
        return (
          <SelectPlan
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )

      case 3:
        return <h1>Confirm</h1>

      case 4:
        return <h1>Pick Add</h1>

      case 5:
        return <h1>Finish up </h1>
      case 6:
        return <h1>Success</h1>


    }
  }
}

export default UserForm
