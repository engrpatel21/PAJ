import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import authService from "../../services/authService"
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const {email, pw} = this.state
    return (
      <body style={{
        backgroundColor: '#1b1c1d' 
    }}>
      <main className="Login">
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h3' color='teal' textAlign='center'>
      <Icon.Group size='large'>
      <Icon loading size='big' name='circle notch' />
      <Icon name='user' />
    </Icon.Group> 
      Log in to your account
      </Header>
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked>
          <Form.Input 
          fluid icon='user' 
          iconPosition='left'
          placeholder='E-mail address' 
          fluid label='User Email' 
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={this.handleChange}
          
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            fluid label='password' 
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
          />

          <Button color='teal' fluid size='large' type='submit'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Don't have an account? <a href='/signup'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>

    
      </main>
      </body>
    );
  }
}

export default LoginPage;
