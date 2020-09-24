import React from 'react'
import { Button, Comment, Form, Header, Divider, Grid} from 'semantic-ui-react'
import Ryu from './01.png'

const MessageComponent = (props) => (
<>
<Comment>
      <Comment.Avatar src='https://vignette.wikia.nocookie.net/starfox/images/7/77/Foxhead.gif/revision/latest/top-crop/width/220/height/220?cb=20081028023846' />
      <Comment.Content>
        <Comment.Author >{props.username}</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>Hadouken!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
</>
)

export default MessageComponent