import React, { Component } from 'react';
import './ProjectCreation.css'
import { Form, Segment, TextArea } from 'semantic-ui-react'

class ProjectCreation extends Component {
    state = { 
        formData: {
            name: '',
            description: '',

        }
     }

     handleSubmit = e =>{
        e.preventDefault();
        this.props.handleAddProject(this.state.formData)
    }

    handleChange = e => {
       const formData = {...this.state.formData, [e.target.name]: e.target.value};
       this.setState({
       formData
       });
    }

   formRef = React.createRef()
    render() { 
        console.log(this.state.formData)
        return (  
            <>
        <Segment inverted textAlign='center' className='AddProject'>
            <h1>Create Project:</h1>
        <Form inverted ref={this.formRef} onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Add Name'
              name='name'
              value={this.state.formData.name}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group> 
            <Form.Input
              id='form-textarea-control-opinion'
              placeholder='Add a description'
              control={TextArea}
              label='Description'
              name='description'
              value={this.state.formData.description}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group>
            <Form.Button content='Submit' 
            />
          </Form.Group>
        </Form>
      </Segment>
            </>
        );
    }
}
 
export default ProjectCreation;