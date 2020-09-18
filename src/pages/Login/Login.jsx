import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import authService from "../../services/authService"
import { Button, Form, Segment, Divider } from 'semantic-ui-react'

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
      <main className="Login">
        <h3>Log In</h3>
        <Divider>
        </Divider>
          <Segment inverted>
            <Form inverted autoComplete="off" onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input 
                  fluid label='User Email' 
                  placeholder='Email' 
                  type="text"
                  autoComplete="off"
                  id="email"
                  value={email}
                  name="email"
                  onChange={this.handleChange}
                />
                <Form.Input 
                  fluid label='Password' 
                  placeholder='Password' 
                  type="password"
                  autoComplete="off"
                  id="password"
                  value={pw}
                  name="pw"
                  onChange={this.handleChange}
                /> 
              </Form.Group>
                <Button type='submit'>Log In</Button>
                <br></br>
                <br></br>
                <Link to="/">Cancel</Link>
            </Form>
          </Segment>
      </main>
    );
  }
}

export default LoginPage;
