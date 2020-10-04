import React from 'react'
import {Comment} from 'semantic-ui-react'

const MessageComponent = (props) => (
<>
<Comment>
      <Comment.Avatar src='https://vignette.wikia.nocookie.net/starfox/images/7/77/Foxhead.gif/revision/latest/top-crop/width/220/height/220?cb=20081028023846' />
      <Comment.Content>
        <Comment.Author >{props.username}</Comment.Author>
        <Comment.Metadata>
          <div>{props.date}</div>
        </Comment.Metadata>
        <Comment.Text>My email address is {props.user.email}.</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
</>
)

export default MessageComponent