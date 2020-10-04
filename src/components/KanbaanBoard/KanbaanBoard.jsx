import React, { useState } from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm'
import CardComp from '../../components/Card/Card'
import { Button, Popup, Portal } from 'semantic-ui-react'
import * as taskApi from '../../services/taskService'
import { useEffect } from 'react';
import tokenService from '../../services/tokenService'
const BASE_URL = '/api/tasks'







const KanbanBoard = (props) => {

    const [tasks, setTasks] = useState([])
    const columnsFromBackend = {
        'Backlog': {
          name: "Backlog",
          items: []
        },
        'In Progress':{
            name: 'In Progress',
            items: []
        },
        'Completed':{
            name: 'Completed',
            items: []
        }
    
      };
    const [columns, setColums] = useState(null)
  

    useEffect(()=> setColums(props.taskBoard), [props.taskBoard])


    const onDragEnd = (result, columns, setColums) => {
        if(!result.destination) return;
        const {source, destination} = result
        if( source.droppableId !== destination.droppableId){
            const idx = columns[source.droppableId].items.findIndex(i => i._id === result.draggableId)
            columns[source.droppableId].items[idx].taskStatus = destination.droppableId
            const sourceCol = columns[source.droppableId]
            const destCol = columns[destination.droppableId]
            const sourceItems = [...sourceCol.items]
            const destItems = [...destCol.items]
            const [removed] = sourceItems.splice(source.index, 1)
            console.log(removed)
            destItems.splice(destination.index, 0, removed)
            console.log(columns)
            setColums({
                ...columns,
                [source.droppableId]: {
                    ...sourceCol,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destCol,
                    items: destItems
                }
            })
            props.updateStatus(removed._id, source.droppableId, destination.droppableId, removed)
        }else{
            const column = columns[source.droppableId]
            const copiedItems = [...column.items]
            const [removed] = copiedItems.splice(source.index, 1)
            copiedItems.splice(destination.index, 0, removed)
            setColums({
                ...columns,
                [source.droppableId] : {
                    ...column,
                    items: copiedItems
                }
            })
        }
    }
    



   
    
    return ( 
        <> 
        {columns ? 
        <div> 
            
     
            <div style={{ display: 'flex', justifyContent:'center', height: '100%' }}>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColums)}>
                    {columns ? Object.entries(columns).map(([id, col]) =>{
                        return(
                            <div key={id} >
                            {id === 'backlog' || id === 'inProgress' || id === 'completed' ? 
                            <div key={id} style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                              }} >
                            <h2>{col.name}</h2>
                            <div style={{margin: 8}}>
                            <Droppable droppableId={id} >
                                {(provided, snapshot) =>{
                                    return(
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{
                                                background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                padding: 4,
                                                width: 250,
                                                minHeight: 500
                                            }}
                                        >   
                                            {col.items ? col.items.map((item, index) =>{
                                                return(
                                                    <Draggable key={`${item._id}`} draggableId={`${item._id}`} index={index} >
                                                       {(provided, snapshot) => {
                                                            return(
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{
                                                                        userSelect: 'none',
                                                                        padding: 16,
                                                                        margin: ' 0 0 8px 0',
                                                                        minHeight: '50px',
                                                                        background: snapshot.isDragging ? '#263b4a' : '#456c86',
                                                                        color: 'white',
                                                                        ...provided.draggableProps.style,
                                                                        cursor: 'default'
                                                                    }}
                                                                >
                                                                     <CardComp task={item} deleteTask={props.deleteTask}/>
                                                                        {item.taskStatus === 'backlog' && columns.backlog.items.length -1 === index ? 'show me' : 'dont'}
                                                               </div>
                                                           )
                                                       }}
                                                    </Draggable>
                                                )
                                            }) : ''}
                                            {provided.placeholder}
                                        </div>
                                    )
                                }}
                            </Droppable>
                            </div>
                           
                        </div>
                        : '' }
                        </div>
                        )
                    }) : ''}
                </DragDropContext>
                    
            </div>
            </div>
            :
            ''}
         
        </>
     );
}
 
export default KanbanBoard;

// class KanbanBoard extends Component {
//     state = { 
//         colums: {
//             'col1': {
//                 name: 'todo',
//                 items: [
//                     {
//                         id: '1',
//                         content: 'first task'
//                     },
//                     {
//                         id: '2',
//                         content: 'second task'
//                     }
//                 ]
//             }
//         }
//      }
    
   
//     onDragEnd = ( result, columns, setColums) => {
//         if(!result.destination) return
//         const { source ,destination } = result
//         const colum = columns[source.droppableId]
 
//         const copiedItems = [...colum.items]
//         const [removed] = copiedItems.splice(source.index, 1)
//         copiedItems.splice(destination.index, 0, removed)
     
//     }
    

//     render() { 
//         const {colums} = this.state
//         return ( 
//             <>
//             <h1>Project Board Page</h1>
       


//             {/* <Divider>
//             </Divider>
//             <Grid columns={3} divided>
//                 <Grid.Row>
//                     <Grid.Column>
//                         <h1>Backlog:</h1>
                           
//                     </Grid.Column>
//                     <Grid.Column>
//                         <h1>In Progress:</h1>
                        
//                     </Grid.Column>
//                     <Grid.Column>
//                         <h1>Completed:</h1>
                        
//                     </Grid.Column>
//                 </Grid.Row>
//             </Grid> */}
//             </>
//          );
//     }
// }
 
// export default KanbanBoard;


// add card 
// {this.state.tasks? this.state.tasks.map( task => 
                                
//     <>
//         {task.taskStatus === 'Backlog' ? 

//             <TaskCard 
//             key={task._id}
//             task={task}
//             projectId={projectId}
//             featureId={featureId}
//             handleDeleteTask={this.handleDeleteTask}
//             handleUpdateTask={this.handleUpdateTask} 
//             renderAddTask={this.renderAddTask}
//             handleUpdateTaskStatus={this.handleUpdateTaskStatus}
//             owner = {this.state.project.owner._id ? this.state.project.owner : 'not loading'}
//             contributors = {this.state.project.contributors.length? this.state.project.contributors : ''}
//             />
//             :
//             ''                                  
//         }
//     </>


// ):
// ''
// }
// {this.state.addTask ?  
// <>
//      <div>
//         <Grid>
//         <Grid.Column textAlign="center">
//             <Popup content="Click to add a Task" trigger={<Button 
//             onClick={this.renderAddTask} 
//             size='tiny'
//             content='Add Task' 
//             color='blue' 
//             icon="plus"/>} />
//         </Grid.Column>
//         </Grid>
//     </div>
// </>
// : 
// <>  
//     <TaskCardEM 
//     handleAddTask={this.handleAddTask} 
//     renderAddTask={this.renderAddTask}
//     owner = {this.state.project.owner._id ? this.state.project.owner : 'not loading'}
//     contributors = {this.state.project.contributors.length? this.state.project.contributors : ''}
//     projectId={projectId} 
//     featureId={featureId}/>

// </>    
// }
// </Grid.Column>
// <Grid.Column>
// <h1>In Progress:</h1>
// {this.state.tasks? this.state.tasks.map( task => 
    
//     <>
//         {task.taskStatus === 'In Progress' ? 

//             <TaskCard 
//             key={task._id}
//             task={task}
//             projectId={projectId}
//             featureId={featureId}
//             handleDeleteTask={this.handleDeleteTask}
//             handleUpdateTask={this.handleUpdateTask} 
//             renderAddTask={this.renderAddTask}
//             handleUpdateTaskStatus={this.handleUpdateTaskStatus}
//             />
//             :
//            ''                                  
//         }
//     </>


// ):
// ''
// }

//Completed
// {this.state.tasks? this.state.tasks.map( task => 
                                
//     <>
//         {task.taskStatus === 'Completed' ? 

//             <TaskCard 
//             key={task._id}
//             task={task}
//             projectId={projectId}
//             featureId={featureId}
//             handleDeleteTask={this.handleDeleteTask}
//             handleUpdateTask={this.handleUpdateTask} 
//             renderAddTask={this.renderAddTask}
//             handleUpdateTaskStatus={this.handleUpdateTaskStatus}
//             />
//             :
//            ''                                  
//         }
//     </>


// ):
// ''
// }