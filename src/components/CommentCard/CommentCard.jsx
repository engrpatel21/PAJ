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
    
    handleChangeComment = e => {
        const commentsFormData = {...this.state.commentsFormData, [e.target.name]: e.target.value};
        this.setState({
         commentsFormData
        });
     }
    
    
    handleSubmitComment = e => {
        e.preventDefault()
        this.renderEditComment()
        this.props.handleUpdateComment(this.props.comment._id, this.state.commentsFormData)
    }

    render() { 
        const {comment, user, handleDeleteComment} = this.props
        return ( 
            <Comment>
        <Comment.Avatar as='a' src='https://picsum.photos/200/300' />
        <Comment.Content>
        <Comment.Author>{comment.createdBy?  comment.createdBy.name : 'not loaded'}
        {comment.createdBy? (user._id === comment.createdBy._id ?  
        <Button.Group size='mini' floated='right'> 
            <Button onClick={this.renderEditComment}><Icon name='edit'/>Edit</Button>
            <Button onClick={()=>handleDeleteComment(comment._id)}><Icon name='eraser'/>Delete</Button>
        </Button.Group>

        : '' ) : '' }</Comment.Author>
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

