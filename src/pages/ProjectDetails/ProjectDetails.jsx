import React, { Component } from 'react';
import { Message, Form, Button, Divider, Segment, Grid, Comment, Item, Container,Popup, Portal } from 'semantic-ui-react'
import * as projectApi from '../../services/projectService'
import CommentCard from '../../components/CommentCard/CommentCard'
import "./ProjectDetails.css";
import FeatureDetails from '../../components/FeatureDetails/FeatureDetails'
import ContributorsList from '../../components/ContributorsList/ContributorsList'
import ProjectNameCard from '../../components/ProjectNameCard/ProjectNameCard'
import AddFeatureForm from '../../components/AddFeatureForm/AddFeatureForm'
import AddContributorForm from '../../components/AddContributorForm/AddContributorForm'
//this is working


class ProjectDetails extends Component {
    state = {
        project: {},
        commentsFormData: {
            comment: ''
            
        },

        addFeature: false,
        addContributor: false,
    }

    async componentDidMount(){
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project})
    }

    renderAddFeature = () => {
        this.setState({addFeature: !this.state.addFeature})
    }

    renderAddContributor = () => {
        this.setState({addContributor: !this.state.addContributor})
    }

    handelAddContributor = async ( contributor) => {
        await projectApi.addProjectContributors(this.props.match.params.projectId, contributor)
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project},
            ()=> this.props.history.push(`/projectdetails/${this.props.match.params.projectId}`))
    }

    handleAddComment = async (project_id, comment) => {
        await projectApi.addProjectComments(project_id, comment)
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project},
            () => this.props.history.push(`/projectdetails/${this.props.match.params.projectId}`))
    }

    handleDeleteContributor = async (contributor_id) =>{
        await projectApi.deleteProjectContributors(this.props.match.params.projectId, contributor_id)
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project},
            () => this.props.history.push(`/projectdetails/${this.props.match.params.projectId}`))
    }


    handleDeleteComment = async (comment_id) => {
        await projectApi.deleteProjectComments(this.props.match.params.projectId, comment_id)
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project},
            () => this.props.history.push(`/projectdetails/${this.props.match.params.projectId}`))
    }

    handleUpdateComment = async (comment_id, comment) => {
        await projectApi.updateProjectComment(this.props.match.params.projectId, comment_id, comment)
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project},
            () => this.props.history.push(`/projectdetails/${this.props.match.params.projectId}`))
    }
   

    handleAddFeature = async (feature) => {
        await projectApi.addProjectFeature(this.props.match.params.projectId, feature)
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project},
            () => this.props.history.push(`/projectdetails/${this.props.match.params.projectId}`))
    }

    
  
 
     handleChangeComment = e => {
        const commentsFormData = {...this.state.commentsFormData, [e.target.name]: e.target.value};
        this.setState({
         commentsFormData
        });
     }
    
    handleSubmitComment = e => {
        e.preventDefault()
        this.handleAddComment(this.props.match.params.projectId, this.state.commentsFormData)
    }

    formRef = React.createRef()
    
    render() { 
        const {features} = this.state.project ? this.state.project : ['not loading']
        return ( 
            <> 
            <Segment style={{height: 'auto'}} >
            <Divider horizontal><h1>Project</h1></Divider>
                <Grid>
                    <Grid.Column>
                <Container>
                    <Item.Group>
                    <ProjectNameCard project={this.state.project}/> 
                </Item.Group>
                </Container>
                </Grid.Column>
                </Grid>
            </Segment>

            <Message textalign='left' className='AddProject'>
            <Divider horizontal><h3>Contributors</h3></Divider>
            <ContributorsList contributors={this.state.project.contributors} handleDeleteContributor={this.handleDeleteContributor}/>
            <div>
                <Grid>
                    <Grid.Column textAlign="center">
                        <Popup content="Click to add a Contributors" 
                        trigger={<Button onClick={this.renderAddContributor} 
                            size='tiny' 
                            color='blue' 
                            icon='plus'
                            content='Contributor'
                            disabled={this.state.addContributor}
                            />} 
                        />    
                    </Grid.Column>
                </Grid>
            </div>
            <Portal onClose={this.renderAddContributor} open={this.state.addContributor} >
                    <AddContributorForm 
                        renderAddContributor={this.renderAddContributor}
                        handelAddContributor={this.handelAddContributor}
                    />
            </Portal>
            </Message>
            
            <Message textalign='left' className='AddProject'>
            <Divider horizontal><h3>Feature List</h3></Divider>
            {features ? 
            
                <FeatureDetails features ={features} projectId={this.state.project._id}/> 
        
            : ''}
                    <div>
                        <Grid>
                        <Grid.Column textAlign="center">
                            <Popup content="Click to add a Feature" 
                            trigger={<Button onClick={this.renderAddFeature} 
                                size='tiny' 
                                color='blue' 
                                icon='plus'
                                content='Feature'
                                disabled={this.state.addFeature}
                                />} 
                            />    
                        </Grid.Column>
                        </Grid>
                    </div>
                    <Portal onClose={this.renderAddFeature} open={this.state.addFeature} >
                        <AddFeatureForm 
                            renderAddFeature={this.renderAddFeature}
                            handleAddFeature={this.handleAddFeature}
                        />
                    </Portal>
            </Message>

            <Divider horizontal>Comments</Divider>
                <Comment.Group style={{ display: "block", margin:' auto'}} size='large'>
                    {this.state.project.comments? this.state.project.comments.map(comment => 
                        <CommentCard 
                            key={comment._id}
                            comment={comment} 
                            user={this.props.user}
                            handleUpdateComment={this.handleUpdateComment}
                            handleDeleteComment={this.handleDeleteComment}
                            />
                    ): ''}
                
                    <Form ref={this.formRef} onSubmit={this.handleSubmitComment} reply>
                        <Form.TextArea 
                            name='comment' 
                            value={this.state.commentsFormData.comment} 
                            onChange={this.handleChangeComment}    
                        />
                        <Button content='Add Comment' labelPosition='left' icon='comment alternate outline' primary />
                    </Form>
                </Comment.Group>
        
            
        </>
        );
    }
}

export default ProjectDetails;