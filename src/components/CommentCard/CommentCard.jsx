import React, { Component } from 'react';
import { Button, Comment, Icon} from 'semantic-ui-react'


class CommentCard extends Component {
    state = { 
        isEdit: false
     }
    
    renderEditComment =() => {
        this.setState({isEdit: !this.state.isEdit})
    }
    
    render() { 
        const {comment, user, handleDeleteComment} = this.props
        return ( 
            <Comment>
        <Comment.Avatar as='a' src='/images/avatar/small/joe.jpg' />
        <Comment.Content>
        <Comment.Author>{comment.createdBy.name}{user._id === comment.createdBy._id ?  
        <Button.Group size='mini' floated='right'> 
            <Button icon='edit'/>
            <Button onClick={()=>handleDeleteComment(comment._id)} icon='delete'/>
        </Button.Group>

        : '' }</Comment.Author>
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

