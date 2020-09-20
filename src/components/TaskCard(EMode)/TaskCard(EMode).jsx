import React, { Component } from 'react';
import {Card, Button, Input, TextArea,Form} from 'semantic-ui-react'


class TaskCardEm extends Component {
    state = { 
        taskFormData: this.props.task ? this.props.task : {name: '', content: ''}
    }
    
    handleSubmitAddTask = e =>{
        e.preventDefault();
        this.props.renderAddTask()
        this.props.handleAddTask(this.props.projectId, this.props.featureId, this.state.taskFormData)
    }

    handleSubmitUpdateTask = e => {
        e.preventDefault();
        this.props.renderEditTask()
        this.props.handleUpdateTask(this.props.projectId, this.props.featureId, this.props.task._id, this.state.taskFormData)
    }
    handleChange = e => {
       const taskFormData = {...this.state.taskFormData, [e.target.name]: e.target.value};
       this.setState({
       taskFormData
       });
    }
    
    formRef = React.createRef()
    render() { 
        return ( 
            <>
            <Form ref={this.formRef} onSubmit={!this.props.isEdit ? this.handleSubmitAddTask : this.handleSubmitUpdateTask}>
                <Card.Group centered>
                <Card>
                    <Card.Content>
                        <Card.Header>
                        <Input 
                            size='mini' 
                            focus 
                            placeholder='Edit Project Name'
                            name='name'
                            value={this.state.taskFormData.name}
                            onChange={this.handleChange}
                        />
                        </Card.Header>
                        <Card.Meta>Head of Project Here</Card.Meta>
                        <Card.Description>
                        <TextArea 
                            style={{width: "19rem"}} 
                            rows={4}
                            placeholder='Edit Project Objective(s)'  
                            name='content'
                            value={this.state.taskFormData.content}
                            onChange={this.handleChange}    
                        />
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='blue'>
                            CONFIRM
                        </Button>
                        <Button onClick={!this.props.isEdit ? this.props.renderAddTask : this.props.renderEditTask} basic color='grey'>
                            CANCEL
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
                </Card.Group>
            </Form>
            </>

         );
    }
}
 
export default TaskCardEm;
