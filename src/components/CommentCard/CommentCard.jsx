import React, { Component } from 'react';
import { Comment} from 'semantic-ui-react'


class CommentCard extends Component {
    state = {  }
    render() { 
        const {comment} = this.props
        return ( 
            <Comment>
        <Comment.Avatar as='a' src='/images/avatar/small/joe.jpg' />
        <Comment.Content>
        <Comment.Author>{comment.createdBy.name}</Comment.Author>
          <Comment.Metadata>
            <div>Date: {comment.createdAt}</div>
          </Comment.Metadata>
          <Comment.Text>
            <p>
                {comment.comment}
            </p>
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
         );
    }
}
 
export default CommentCard;

