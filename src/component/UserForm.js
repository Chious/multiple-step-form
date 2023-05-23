import React, { Component } from 'react'

import FormUserDetail from "./FormUserDetail"
import SelectPlan from "./SelectPlan"
import PickAdd from './PickAdd'
import FinishUp from './FinishUp'
import Success from './Sucess'


export class UserForm extends Component {
  state = {
    step: 1,
    Name: "",
    EmailAddress: "",
    PhoneNumber: "",
    Year: "month",
    Plan: "",
    Addon: "",

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
    const { Name, EmailAddress, PhoneNumber, Year, Plan, Addon } = this.state;
    const values = { Name, EmailAddress, PhoneNumber, Year, Plan, Addon }

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
        return (
          <PickAdd
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )

      case 4:
        return (<FinishUp
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />)

      case 5:
        return (<Success
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />)


    }
  }
}

export default UserForm
