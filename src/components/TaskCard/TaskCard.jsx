import React, { Component } from 'react';
import {Card, Button, Icon, Grid} from 'semantic-ui-react'
import TaskCardEM from '../TaskCard(EMode)/TaskCard(EMode)'

class TaskCard extends Component {
    state = { 
        isEdit: false,
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
                                {!this.state.isEdit ? <Button onClick={this.renderEditTask} icon='edit' /> : 'not edit'} 
                             </Grid.Column>
                         </Card.Header>
                         <Card.Meta>Head of Project Here</Card.Meta>
                         <Card.Description>
                         {task ? task.content : 'no content'} 
                         </Card.Description>
                     </Card.Content>
                     <Card.Content extra>
                     <div className='ui two buttons'>
                         <Button 
                             basic color='red'
                             onClick={()=> handleDeleteTask(projectId, featureId, task._id)}
                             >
                             DELETE
                         </Button>
                         </div>
                         
                        
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


