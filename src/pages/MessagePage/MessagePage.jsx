import React from 'react'
import { Button, Comment, Form, Header, Divider, Grid} from 'semantic-ui-react'
import Ryu from './01.png'
import Ken from './02.png'
import Bison from './03.png'
import Guile from './04.png'

const MessagePage = () => (

  <Grid centered columns={1}>
  <Comment.Group>
    <h1>User List Page</h1>
    <Divider>
    </Divider>
    <Header as='h3' dividing>
      Comments
    </Header>

    <Comment>
      <Comment.Avatar src={Ryu} />
      <Comment.Content>
        <Comment.Author as='a'>Ryu</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>Hadouken!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src={Ken} />
      <Comment.Content>
        <Comment.Author as='a'>Ken</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>Shoruken!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={Bison} />
          <Comment.Content>
            <Comment.Author as='a'>M. Bison</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Psycho Breaker :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src={Guile} />
      <Comment.Content>
        <Comment.Author as='a'>Guile</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Sonic Boom!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
  </Grid>
)

export default MessagePage