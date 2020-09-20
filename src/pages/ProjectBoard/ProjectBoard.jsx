import React, { Component } from 'react';
// import ProjectBoard from '../../pages/ProjectBoard/ProjectBoard'
import TaskCard from '../../components/TaskCard/TaskCard'
import TaskCardEM from '../../components/TaskCard(EMode)/TaskCard(EMode)'
import { Grid, Divider, Button } from 'semantic-ui-react'
import "./ProjectBoard.css";
import * as projectApi from '../../services/projectService'


class ProjectBoard extends Component {
    state = { 
        tasks: this.props.location.state.feature.tasks,
        addTask: true,
        projectId: this.props.location.state.projectId,
        featureId: this.props.location.state.feature._id
     }
    
    renderAddTask = () => {
        this.setState({addTask: !this.state.addTask})
    }

    handleAddTask = async (project_id, feature_id, taskData) => {
        const newTask = await projectApi.addFeatureTask(project_id, feature_id, taskData)
        this.setState({
            tasks: [...this.state.tasks,newTask]
        })
    }

    

    render() { 
        const {featureId, projectId} = this.state
        console.log(featureId, projectId)
        return ( 
            <>
            <h1>Project Board Page</h1>
            <Divider>
            </Divider>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <h1>To-Do:</h1>
                            {this.state.tasks ? this.state.tasks.map( task => 
                               
                                <TaskCard key={task._id} task={task ? task : 'no task'}/>
                               
                                
                            ):
                            ''
                            }
                            {this.state.addTask ?  
                            <>
                                <Button onClick={this.renderAddTask}>Add</Button>  
                            </>
                            : 
                            <>  
                                <TaskCardEM 
                                handleAddTask={this.handleAddTask} 
                                renderAddTask={this.renderAddTask}
                                projectId={projectId} 
                                featureId={featureId}/>
                            </>    
                             
                                
                            }
                                
                       
                            
                            </Grid.Column>
                            <Grid.Column>
                        <h1>Completed:</h1>
                        <TaskCard />
                    </Grid.Column>
                    <Grid.Column>
                        <h1>Backlog:</h1>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </>
         );
    }
}
 
export default ProjectBoard;
