import React, { Component } from 'react';
import './ProjectCreation.css'
import {createProject} from '../../services/projectService'
import { Form, Segment, TextArea, Divider } from 'semantic-ui-react'

class ProjectCreation extends Component {
    state = { 
        formData: {
            name: '',
            description: '',
           

        }
     }


    
    handleSubmit = e =>{
        e.preventDefault();
        this.handleAddProject(this.state.formData)
    }
    
  handleAddProject = async projectData => {
    const project = await createProject(projectData) 
    this.props.history.push(`/projectdetails/${project}`)
  }
  

    handleChange = e => {
       const formData = {...this.state.formData, [e.target.name]: e.target.value};
       this.setState({
       formData
       });
    }

   formRef = React.createRef()
    render() { 
 
        return (  
            <>
            <body style={{
        backgroundColor:'#1b1c1d'
      }}>
        <Divider></Divider>
        <Segment inverted textAlign='center' className='AddProject'>
            <h1>Create Project</h1>
        <Form inverted ref={this.formRef} onSubmit={this.handleSubmit} size='massive'>
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
            <Form.Button 
            content='Submit' 
            icon='plus'
            style={{
              width:'300px',
              color:'white',
              textShadow:'#1b1c1d 2px 2px',
              fontSize:'16px',
              textAlign:'center',
              fontWeight: 'bold',
              backgroundColor:'cornflowerblue',
              boxShadow:'gray 2px 2px',
              justifyContent:'center',
            }}
            
            />
          </Form.Group>
        </Form>
      </Segment>
      </body>
        </>
        );
    }
}
 
export default ProjectCreation;