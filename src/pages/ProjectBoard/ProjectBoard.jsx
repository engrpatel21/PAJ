import React, { Component } from 'react';
// import ProjectBoard from '../../pages/ProjectBoard/ProjectBoard'
import TaskCard from '../../components/TaskCard/TaskCard'
import TaskCardEM from '../../components/TaskCard(EMode)/TaskCard(EMode)'

import { Grid, Divider,  Button, Popup } from 'semantic-ui-react'
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
        console.log(this.state.tasks)
    }

    handleUpdateTask = async (project_id, feature_id, task_id, taskData) =>{
        const task = await projectApi.updateFeatureTask(project_id, feature_id, task_id, taskData)
        this.setState({
            tasks: this.state.tasks.map(t => t._id === task._id ? task : t)
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
                        <h1>Backlog:</h1>
                            {this.state.tasks? this.state.tasks.map( task => 
                                
                                <>
                                    {task.taskStatus === 'Backlog' ? 

                                        <TaskCard 
                                        key={task._id}
                                        task={task}
                                        projectId={projectId}
                                        featureId={featureId}
                                        handleDeleteTask={this.handleDeleteTask}
                                        handleUpdateTask={this.handleUpdateTask} 
                                        renderAddTask={this.renderAddTask}
                                        handleUpdateTaskStatus={this.handleUpdateTaskStatus}
                                        />
                                        :
                                        ''                                  
                                    }
                                </>

                            
                            ):
                            ''
                            }
                            {this.state.addTask ?  
                            <>
                                 <div>
                                    <Grid>
                                    <Grid.Column textAlign="center">
                                        <Popup content="Click to add a Task" trigger={<Button 
                                        onClick={this.renderAddTask} 
                                        size='tiny'
                                        content='Add Task' 
                                        color='blue' 
                                        icon="plus"/>} />
                                    </Grid.Column>
                                    </Grid>
                                </div>
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
                        <h1>In Progress:</h1>
                        {this.state.tasks? this.state.tasks.map( task => 
                                
                                <>
                                    {task.taskStatus === 'In Progress' ? 

                                        <TaskCard 
                                        key={task._id}
                                        task={task}
                                        projectId={projectId}
                                        featureId={featureId}
                                        handleDeleteTask={this.handleDeleteTask}
                                        handleUpdateTask={this.handleUpdateTask} 
                                        renderAddTask={this.renderAddTask}
                                        handleUpdateTaskStatus={this.handleUpdateTaskStatus}
                                        />
                                        :
                                       ''                                  
                                    }
                                </>

                            
                            ):
                            ''
                            }
                    </Grid.Column>
                    <Grid.Column>
                        <h1>Completed:</h1>
                        {this.state.tasks? this.state.tasks.map( task => 
                                
                                <>
                                    {task.taskStatus === 'Completed' ? 

                                        <TaskCard 
                                        key={task._id}
                                        task={task}
                                        projectId={projectId}
                                        featureId={featureId}
                                        handleDeleteTask={this.handleDeleteTask}
                                        handleUpdateTask={this.handleUpdateTask} 
                                        renderAddTask={this.renderAddTask}
                                        handleUpdateTaskStatus={this.handleUpdateTaskStatus}
                                        />
                                        :
                                       ''                                  
                                    }
                                </>

                            
                            ):
                            ''
                            }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </>
         );
    }
}
 
export default ProjectBoard;
