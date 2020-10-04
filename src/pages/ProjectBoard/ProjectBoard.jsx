import React, { Component } from 'react';
import Kanbaan from '../../components/KanbaanBoard/KanbaanBoard'
import * as taskApi from '../../services/taskService'
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm'
import {Portal, Button} from 'semantic-ui-react'

class ProjectBoard extends Component {
    state = { 
        taskBoard: null,
        addTask: false
    }

    renderAddTask = () => {
        this.setState({addTask: !this.state.addTask})
    }

    async componentDidMount(){
        const taskBoard = await taskApi.getTasks(this.props.match.params.featureId)
        this.setState({ taskBoard})
    }
    handleAddTasks = async (taskData) => {
        const newBoard = await taskApi.addTask(this.props.match.params.featureId, taskData)
        this.setState({taskBoard: newBoard})
     
    }

    handleDeleteTask = async (taskId, status) => {
        const newBoard = await taskApi.deleteTask(this.props.match.params.featureId, taskId, status)
        this.setState({taskBoard: newBoard})
    }

    handleUpdateStatus = async (boardId, board) => {
        const newBoard = await taskApi.updateTaskStatus(boardId, board)
        this.setState({taskBoard: newBoard})
    }

    handleEditTask = async (boardId, task) => {
        const updatedTask = await taskApi.updateTask(boardId, task)
        const taskBoard = {...this.state.taskBoard}
        taskBoard[updatedTask.taskStatus].items = taskBoard[updatedTask.taskStatus].items.map(i=> i._id === updatedTask._id ? updatedTask : i)
        this.setState({taskBoard})
    }

    render() { 
        const {taskBoard, addTask} = this.state
        return ( 
          <>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Button content='Add Task' onClick={()=>this.renderAddTask()}/>
            </div>
            {taskBoard ? <Kanbaan 
                            taskBoard={taskBoard} 
                            deleteTask={this.handleDeleteTask} 
                            featureId={this.props.match.params.featureId}
                            updateStatus = {this.handleUpdateStatus}
                            editTask={this.handleEditTask}
                        /> : ''}
            <Portal onClose={this.renderAddTask} open={addTask} >
                        <AddTaskForm
                            handleAddTasks={this.handleAddTasks}
                            renderAddTask={this.renderAddTask}
                        />
                </Portal> 
          </>
        );
    }
}
 
export default ProjectBoard;
