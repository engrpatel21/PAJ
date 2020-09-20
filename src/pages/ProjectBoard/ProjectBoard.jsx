import React, { Component } from 'react';
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

    handleDeleteTask = async (project_id, feature_id, task_id) =>{
        await projectApi.deleteFeatureTask(project_id, feature_id, task_id)
        this.setState({
            tasks: this.state.tasks.filter(t => t._id !== task_id)
        },() => this.props.history.push(`/projectboard/${this.state.projectId}`))
    }
    

    render() { 
        const {featureId, projectId} = this.state
        return ( 
            <>
            <h1>Project Board Page</h1>
            <Divider>
            </Divider>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <h1>To-Do:</h1>
                            {this.state.tasks.map( (task, idx) => 
                                <div key={idx}>
                                    <TaskCard  
                                    task={task ? task : 'no task'} 
                                    handleDeleteTask={this.handleDeleteTask}
                                    projectId={projectId}
                                    featureId={featureId} 
                                />
                                </div>
                               
                            )
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
