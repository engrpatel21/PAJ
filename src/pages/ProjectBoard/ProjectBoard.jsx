import React, { Component } from 'react';
// import ProjectBoard from '../../pages/ProjectBoard/ProjectBoard'
import TaskCard from '../../components/TaskCard/TaskCard'
import TaskCardEM from '../../components/TaskCard(EMode)/TaskCard(EMode)'

import { Grid, Divider,  Button } from 'semantic-ui-react'
import "./ProjectBoard.css";
import * as projectApi from '../../services/projectService'


class ProjectBoard extends Component {
    state = { 
        tasks: [],
        addTask: true,
        projectId: this.props.match.params.projectId,
        featureId: this.props.match.params.featureId
     }
    
    async componentDidMount(){
        const tasks = await projectApi.getALlTasks(this.state.projectId,this.state.featureId)
        this.setState({tasks})
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

    handleDeleteTask = async (project_id, feature_id, task_id) => {
        await projectApi.deleteFeatureTask(project_id, feature_id, task_id)
        this.setState({
            tasks: this.state.tasks.filter(t => t._id !== task_id)
        }, ()=> this.props.history.push(`/projectboard/${this.state.projectId}/${this.state.featureId}`))
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
                            {this.state.tasks ? this.state.tasks.map( task => 
                                <TaskCard 
                                    key={task._id}
                                    task={task}
                                    projectId={projectId}
                                    featureId={featureId}
                                    handleDeleteTask={this.handleDeleteTask}
                                />
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
                                <Button onClick={this.renderAddTask}>Cancel</Button>
                            </>    
                            }
                            </Grid.Column>
                            <Grid.Column>
                        <h1>Completed:</h1>
                   
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
