import React, { Component } from 'react';
import { Message, Form, Button, Divider, Segment, TextArea } from 'semantic-ui-react'
import * as projectApi from '../../services/projectService'
import "./ProjectDetails.css";
import FeatureDetails from '../../components/FeatureDetails/FeatureDetails'

//adding something 

class ProjectDetails extends Component {
    state = {
        project: {},
        projectInfo: {
            pSummary: '',
            featureSets: 'Links will populate in this area',
            comments: '',
            
        },

        featureFormData: {
            feature: '',
            description: '',
        }
    }

    async componentDidMount(){
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project})
    }

    handelAddContributor = async (project_id, contributor) => {
        const project = await projectApi.addProjectContributors(project_id, contributor)
        this.setState({project},
            ()=> this.props.history.push(`/projectdetails/${this.state.project._id}`))
    }

    handleAddFeature = async (project_id, feature) => {
        const project = await projectApi.addProjectFeature(project_id, feature)
        this.setState({project},
            () => this.props.history.push(`/projectdetails/${this.state.project._id}`))
    }
    


    handleSubmit = e =>{
        e.preventDefault();
        this.handleAddFeature(this.state.project._id, this.state.featureFormData)
    }


    handleChange = e => {
       const featureFormData = {...this.state.featureFormData, [e.target.name]: e.target.value};
       this.setState({
        featureFormData
       });
    }

    formRef = React.createRef()
    
    render() { 
        return ( 
    <>
    <h1>Project Details Page</h1>
    <Divider>
    </Divider>
    <Message>
        <Form>
        {/* <Form inverted ref={this.formRef} onSubmit={this.handleSubmit}> */}
            <Form.Field>
                <label>Project Information:</label>
                <Form.Input
                    placeholder='Add Info about the project here.'
                    name='pSummary'
                    value={this.state.projectInfo.pSummary}
                    onChange={this.handleChange}
                />
            </Form.Field>
            <Button type='submit'>Submit</Button>
            <Divider horizontal>Project Information</Divider>
            <FeatureDetails 
            features={this.state.project.features}
            />
        </Form>
    </Message>
    <Segment  textAlign='left' className='AddProject'>
            <h1>Add Features:</h1>
        <Form ref={this.formRef} onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Feature Name'
              name='feature'
              value={this.state.featureFormData.feature}
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
              value={this.state.featureFormData.description}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group>
            <Form.Button content='Submit' 
            />
          </Form.Group>
        </Form>
      </Segment>
    <Message>
        <Form>
        {/* <Form inverted ref={this.formRef} onSubmit={this.handleSubmit}> */}
            <Form.Field>
                <label>Comments:</label>
                <Form.Input
                    placeholder='Add Info about the project here.'
                    name='pSummary'
                    value={this.state.projectInfo.comments}
                    onChange={this.handleChange}
                />
            </Form.Field>
            <Button type='submit'>Submit</Button>
            <Divider horizontal>Comments</Divider>
        </Form>
    </Message>
    </>
        );
    }
}

export default ProjectDetails;