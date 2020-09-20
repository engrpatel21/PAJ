import React, { Component } from 'react';
import { Button, Comment, Form, Icon} from 'semantic-ui-react'


class CommentCard extends Component {
    state = { 
        isEdit: false,
        commentsFormData: {
            comment: this.props.comment.comment
        }
     }
    
     renderEditComment = () => {
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
            <Button onClick={this.renderEditComment}><Icon name='edit'/>Edit</Button>
            <Button onClick={()=>handleDeleteComment(comment._id)}><Icon name='eraser'/>Delete</Button>
        </Button.Group>

        : '' }</Comment.Author>
          <Comment.Metadata>
            <div>Date: {comment.createdAt}</div>
          </Comment.Metadata>
          <Comment.Text>
            {!this.state.isEdit ? 
                <p>
                    {comment.comment}
                </p>
            :
            <Form ref={this.formRef} onSubmit={this.handleSubmitComment} reply>
            <Form.TextArea 
                name='comment' 
                value={this.state.commentsFormData.comment} 
                onChange={this.handleChangeComment}    
            />
            <Button content='Add Comment' labelPosition='left' icon='comment alternate outline' primary />
            </Form>
            }
          
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

