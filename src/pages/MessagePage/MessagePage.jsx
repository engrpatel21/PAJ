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

    <Comment>
      <Comment.Avatar src='https://vignette.wikia.nocookie.net/starfox/images/0/0f/FoxMcCloud3D.jpg/revision/latest/top-crop/width/300/height/300?cb=20140226211125' />
      <Comment.Content>
        <Comment.Author as='a'>Fox</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Who are these guys?</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src='https://vignette.wikia.nocookie.net/starfox/images/9/9e/Falcohead.gif/revision/latest/top-crop/width/220/height/220?cb=20081028023846' />
      <Comment.Content>
        <Comment.Author as='a'>Falco</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Different franchise...</Comment.Text>
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