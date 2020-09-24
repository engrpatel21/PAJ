import React, { Component } from 'react'
import * as userApi from "../../services/userService"
import { Button, Comment, Form, Header, Divider, Grid, Message} from 'semantic-ui-react'
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
    <h1>Message Board Page</h1>
        <Divider>
        </Divider>

  <Grid centered columns={2} divided>
    <Grid.Row>
        <Grid.Column>
          <Message>
            <Comment.Group>
              <Header as='h3' dividing>
                Messages
              </Header>
              <br></br>
                {users.map(user =>
                  <MessageComponent key={user._id} user={user} username={user.name} />
                )}
            </Comment.Group>
          </Message> 
        </Grid.Column>
     
        <Grid.Column>
          <Message>
            <Header as='h3' dividing>
                Write a Message
            </Header>
            <br></br>
            <Form reply>
            <Form.TextArea />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>
          </Message>
        </Grid.Column>
      </Grid.Row>
    
  
  </Grid>

  </>
         );
    }
}

export default MessagePage