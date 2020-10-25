import React, { Component } from 'react';
import {Form, Segment, Header, Button} from 'semantic-ui-react'

class AddTaskForm extends Component {
    state = { 
        taskFormData: {
            name: '',
            content: ''
        }
     }

    handleChange = e => {
        const taskFormData = {...this.state.taskFormData, [e.target.name]: e.target.value}
        this.setState({
            taskFormData
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.renderAddTask()
        this.props.handleAddTasks(this.state.taskFormData)
    }

    render() { 
        const {renderAddTask} = this.props
        return ( 
            <>
            <Segment
                style={{
                left: '40%',
                position: 'fixed',
                top: '20%',
                zIndex: 1000,
                }}
            >
            <Header>Add Tasks For Features</Header>
            <p>Add Project features and its description here.</p>
            <p>These tasks can be user stories that are a part of the larger Epic or feature</p>
            <p>You can asign your contributors to be in charge of a task.</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder='Task Name'
                            name='name'
                            value={this.state.taskFormData.name}
                            onChange={this.handleChange}
                            />
                    </Form.Group>
                    <Form.Group> 
                        <Form.TextArea
                     
                            placeholder='Add a description'
                            name='content'
                            value={this.state.taskFormData.content}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Button content='Add Task' color='green'/>
                </Form>
                    <Button content='Close' onClick={()=>renderAddTask} floated='right' color='red' />
                </Segment>
            </> 
        );
    }
}
 
export default AddTaskForm;