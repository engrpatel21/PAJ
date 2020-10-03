import React, { Component } from 'react';
import { Form, Button, Divider, Segment, Grid, Comment, Item, Container, Loader} from 'semantic-ui-react'
import * as projectApi from '../../services/projectService'
import CommentCard from '../../components/CommentCard/CommentCard'
import "./ProjectDetails.css";
import ProjectData from '../../components/ProjectData/ProjectData'
import ProjectNameCard from '../../components/ProjectNameCard/ProjectNameCard'
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
       const {user, history} = this.props
       const {projectId} = this.props.match.params
        return ( 
            <> 
            
            {project.owner ? user._id ? project.owner === user._id ? 
            
            <ToggleProject project={this.state.project._id ? this.state.project : 'notloading'} handleUpdateProject={this.handleUpdateProject}/>
        
            : <Loader active inline='centered' />: <Loader active inline='centered' /> : <Loader active inline='centered' />}
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

            <Divider horizontal><h3>Contributors</h3></Divider>
            { project.owner && user._id ? 
                <ProjectData projectId={projectId} history={history} user={user} />
                :
                <Loader active inline='centered' />
            }
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