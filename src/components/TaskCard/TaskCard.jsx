import React, { Component } from 'react';
import {Card, Button, Popup, Grid} from 'semantic-ui-react'
import TaskCardEM from '../TaskCard(EMode)/TaskCard(EMode)'

class TaskCard extends Component {
    state = { 
       task: this.props.task
    }
    renderEditTask = () => {
        this.setState({isEdit: !this.state.isEdit})
    }
    render() { 
        const {task, projectId, featureId, handleDeleteTask, handleUpdateTask} = this.props
        return ( 
            <>
            {!this.state.isEdit ? 
                 <Card.Group centered >
                 <Card>
                     <Card.Content>
                         <Card.Header>{task ? task.name : 'no task'}
                             <Grid.Column floated='right'>
                                {!this.state.isEdit ?
                                 <Popup content="Click to edit Task" trigger={<Button onClick={this.renderEditTask} icon='edit' />} /> : 
                                 'not edit'} 
                             </Grid.Column>
                         </Card.Header>
                         <Card.Meta>Head of Project Here</Card.Meta>
                         <Card.Description>
                         {task ? task.content : 'no content'} 
                         {task.taskStatus === 'Backlog' ? 'backlog' : 'notloaded'}
                         </Card.Description>
                     </Card.Content>
                     <Card.Content extra>
                     <div style={{padding:'0 4rem'}} className='ui two buttons'>
                         <Popup content="Delete Task"
                         trigger={
                            <Button 
                            basic color='red'
                            icon='trash alternate'
                            content='Delete'
                            onClick={()=> handleDeleteTask(projectId, featureId, task._id)}
                            />
                         }
                         />
                         </div>
                        {task.taskStatus === 'Backlog' ? 
                        <>
                        <div style={{padding:'0 4rem', marginTop:'.5rem'}} className='ui two buttons'>
                        <Popup content="Move To In Progress"
                         trigger={
                            <Button 
                            icon='pencil alternate'
                            basic color='green'
                            content='Start Working'
                            onClick={()=> handleUpdateTask(projectId, featureId, task._id, {
                                _id: task._id, 
                                taskStatus:'In Progress',
                                content: task.content,
                                name: task.name
                            })}
                            />}
                         />
                         </div>
                        </>
                        :
                        <>
                         <div style={{padding:'0 4rem', marginTop:'.5rem'}} className='ui two buttons'>
                        <Popup content="Move To Backlog"
                         trigger={
                            <Button 
                            icon='pencil alternate'
                            basic color='green'
                            content='Backlog'
                            onClick={()=> handleUpdateTask(projectId, featureId, task._id, {
                                _id: task._id, 
                                taskStatus:'Backlog',
                                content: task.content,
                                name: task.name
                            })}
                            />}
                         />
                         </div>
                         {task.taskStatus === 'Completed' ? 
                         
                         <>
                         <div style={{padding:'0 4rem', marginTop:'.5rem'}} className='ui two buttons'>
                         <Popup content="Move To In Progress"
                          trigger={
                             <Button 
                             icon='pencil alternate'
                             basic color='green'
                             content='Needs Work'
                             onClick={()=> handleUpdateTask(projectId, featureId, task._id, {
                                 _id: task._id, 
                                 taskStatus:'In Progress',
                                 content: task.content,
                                 name: task.name
                             })}
                             />}
                          />
                          </div>
                         </>


                         : 
                         <div style={{padding:'0 4rem', marginTop:'.5rem'}} className='ui two buttons'>
                         <Popup content="Move To Backlog"
                          trigger={
                             <Button 
                             icon='pencil alternate'
                             basic color='green'
                             content='Finished'
                             onClick={()=> handleUpdateTask(projectId, featureId, task._id, {
                                 _id: task._id, 
                                 taskStatus:'Completed',
                                 content: task.content,
                                 name: task.name
                             })}
                             />}
                          />
                          </div>
                         
                         }
                        
                         </>
                         }
                            </Card.Content>
                        </Card>
                        </Card.Group>
                        :
                        <TaskCardEM 
                            isEdit={this.state.isEdit}
                            renderEditTask={this.renderEditTask}
                            handleUpdateTask={handleUpdateTask} 
                            projectId={projectId}
                            featureId={featureId}
                            task={task}
                            />
                        }
                     </>
         );
    }
}
 
export default TaskCard;


