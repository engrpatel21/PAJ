import React, { Component } from "react";

import authService from "../../services/authService";
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'

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
       <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h3' color='teal' textAlign='center'>
      <Icon.Group size='large'>
      <Icon loading size='big' name='circle notch' />
      <Icon name='user' />
    </Icon.Group> 
    Sign-Up with a New Account!
      </Header>
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked>
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

          <Button color='teal' fluid size='large' type='submit' disabled={this.isFormInvalid()}>
            Sign Up
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <a href='/login'>Log in</a>
      </Message>
    </Grid.Column>
  </Grid>
        
      </div>
    );
  }
}

export default SignupForm;
