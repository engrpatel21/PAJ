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
     
    }

    async componentDidMount() {
        const project = await projectApi.getOneProject(this.props.match.params.projectId)
        this.setState({project})
    }

    renderAddFeature = () => {
        this.setState({addFeature: !this.state.addFeature})
    }


    renderEditFeature =() => {
        this.setState({editFeature: !this.state.editFeature})
    }

   

    formRef = React.createRef()
    render() { 
       const {project} = this.state
       const {user} = this.props
       const {projectId} = this.props.match.params
        return ( 
            <> 
            
            {project.owner ? user._id ? project.owner === user._id ? 
            
            <ToggleProject project={this.state.project._id ? this.state.project : 'notloading'} handleUpdateProject={this.handleUpdateProject}/>
        
            : '': '' : ''}
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
            <ContributorsList projectId={projectId} history={this.props.history}/>
            <Divider horizontal><h3>Feature List</h3></Divider>
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