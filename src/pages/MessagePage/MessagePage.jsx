import React, { Component } from 'react'
import * as userApi from "../../services/userService"
import { Button, Comment, Form, Header, Divider, Grid} from 'semantic-ui-react'
import MessageComponent from '../../components/MessageComponent/MessageComponent'

class MessagePage extends Component {
  state = { 
      users: [],

   }

  async componentDidMount(){
      const users = await userApi.getAllUsers()
      this.setState({users})
  }

  render() { 
    const {users} = this.state
    return ( 
    <>

  <Grid centered columns={1}>
  <Comment.Group>
    <h1>Mesage Board Page</h1>
    <Divider>
    </Divider>
    <Header as='h3' dividing>
      Messages
    </Header>

    {users.map(user =>
    <MessageComponent key={user._id} user={user} username={user.name} />
    )}

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
  </Grid>

  </>
         );
    }
}

export default MessagePage