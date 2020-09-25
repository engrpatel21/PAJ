import React, { Component } from 'react';
import { Message, Form, Button, Divider, Segment, Grid, Comment, Item, Container,Popup, Portal} from 'semantic-ui-react'
import * as projectApi from '../../services/projectService'
import CommentCard from '../../components/CommentCard/CommentCard'
import "./ProjectDetails.css";
import FeatureDetails from '../../components/FeatureDetails/FeatureDetails'
import ContributorsList from '../../components/ContributorsList/ContributorsList'
import ProjectNameCard from '../../components/ProjectNameCard/ProjectNameCard'
import AddFeatureForm from '../../components/AddFeatureForm/AddFeatureForm'
import AddContributorForm from '../../components/AddContributorForm/AddContributorForm'
import ToggleProject from '../../components/ToggleProject/ToggleProject'
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

    renderEditFeature =() => {
        this.setState({editFeature: !this.state.editFeature})
    }

    handelAddContributor = async ( contributor) => {
        await projectApi.addProjectContributors(this.props.match.params.projectId, contributor)
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project},
            ()=> this.props.history.push(`/projectdetails/${this.props.match.params.projectId}`))
    }

    handleUpdateContributor = async (contributor_id, contributor) => {
        await projectApi.updateProjectContributors(this.props.match.params.projectId, contributor_id, contributor )
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project},
            ()=> this.props.history.push(`/projectdetails/${this.props.match.params.projectId}`))
    }

    handleUpdateProject = async (project_id, projectData) => {
        await projectApi.updateProject(project_id, projectData)
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

    handleDeleteContributor = async (contributor_id, user_id) =>{
        await projectApi.deleteProjectContributors(this.props.match.params.projectId, contributor_id, user_id)
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

    
    handleDeleteFeature = async (feature_id) =>{
        await projectApi.deleteProjectFeature(this.props.match.params.projectId, feature_id)
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project},
            () => this.props.history.push(`/projectdetails/${this.props.match.params.projectId}`))
    }

    handleUpdateFeature = async (feature_id, feature)=> {
        await projectApi.updateProjectFeature(this.props.match.params.projectId, feature_id, feature)
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
            <ToggleProject project={this.state.project._id ? this.state.project : 'notloading'} handleUpdateProject={this.handleUpdateProject}/>
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

            <Message textalign='left' style={{paddingTop: '0px'}} className='AddProject'>
            <Divider horizontal><h3>Contributors</h3></Divider>
            <ContributorsList 
                contributors={this.state.project._id ? this.state.project.contributors : ''} 
                handleDeleteContributor={this.handleDeleteContributor}
                handleUpdateContributor={this.handleUpdateContributor}
                project={this.state.project._id ? this.state.project : 'not loading'}
                />
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
                <Divider horizontal><h3>Feature List</h3></Divider>
            {features ? 
            
                <FeatureDetails 
                    key={`work`}
                    features ={features} 
                    projectId={this.state.project._id} 
                    handleDeleteFeature={this.handleDeleteFeature}
                    handleUpdateFeature={this.handleUpdateFeature}
                    history={this.props.history}
                    contributors={this.state.project.contributors.length ? this.state.project.contributors : ''}
                    owner={this.state.project.owner._id ? this.state.project.owner : 'not loading'}
                    /> 
        
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
                            contributors={this.state.project._id ? this.state.project.contributors : ''}
                            owner={this.state.project._id ? this.state.project.owner : 'notloading'}
                        />
                    </Portal>
                
            </div>
            <Portal onClose={this.renderAddContributor} open={this.state.addContributor} >
                    <AddContributorForm 
                        renderAddContributor={this.renderAddContributor}
                        handelAddContributor={this.handelAddContributor}
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