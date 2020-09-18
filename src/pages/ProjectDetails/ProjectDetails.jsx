import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Message, Form, Button, Divider } from 'semantic-ui-react'
import * as projectApi from '../../services/projectService'
import "./ProjectDetails.css";

class ProjectDetails extends Component {
    state = {
        project: {},
        projectInfo: {
            pSummary: '',
            featureSets: 'Links will populate in this area',
            comments: ''
        }
    }

    async componentDidMount(){
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project})
    }


    // handleSubmit = e =>{
    //     e.preventDefault();
    //     this.props.handleAddSummary(this.state.projectInfo)
    // }

    handleChange = e => {
       const projectInfo = {...this.state.projectInfo, [e.target.name]: e.target.value};
       this.setState({
        projectInfo
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
        </Form>
    </Message>
    <Message>
        <Form>
            <Form.Field>
                <label>Links to Feature Sets:</label>
                <Divider horizontal>Links</Divider>
                {this.state.projectInfo.featureSets}
                <br></br>
                {this.state.projectInfo.featureSets}
                <br></br>
                {this.state.projectInfo.featureSets}
                <br></br>
                {this.state.projectInfo.featureSets}
                <br></br>
                {this.state.projectInfo.featureSets}
            </Form.Field>
        </Form>
    </Message>
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