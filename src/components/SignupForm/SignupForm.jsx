import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import { Button, Form, Segment, Divider } from 'semantic-ui-react'

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        <Divider>
        </Divider>
        <Segment inverted>
          <Form inverted>
            <Form.Group widths='equal'>
              <Form.Input 
              fluid label='User Name' 
              placeholder='User Name' 
              type="text"
              autoComplete="off"
              id="name"
              value={name}
              name="name"
              onChange={this.handleChange}
              />
              <Form.Input 
              fluid label='Email' 
              placeholder='Email' 
              type="text"
              autoComplete="off"
              id="email"
              value={email}
              name="email"
              onChange={this.handleChange}
              />
              <Form.Input 
              fluid label='Create Password' 
              placeholder='Password' 
              type="password"
              autoComplete="off"
              id="password"
              value={password}
              name="password"
              onChange={this.handleChange}
              />
              <Form.Input 
              fluid label='Confirm Password' 
              placeholder='Password' 
              type="password"
              autoComplete="off"
              id="confirm"
              value={passwordConf}
              name="passwordConf"
              onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button type='submit'>Sign Up</Button>

            <label htmlFor="confirm">Confirm Password</label>
          <button disabled={this.isFormInvalid()}>Sign Up</button>
          &nbsp;&nbsp;
          <Link to="/">Cancel</Link>

          </Form>
        </Segment>
        
      </div>
    );
  }
}

export default SignupForm;
