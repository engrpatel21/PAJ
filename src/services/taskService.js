import tokenService from './tokenService'
const BASE_URL = '/api/tasks'

export function getTasks(feature_id){
    return fetch(`${BASE_URL}/${feature_id}`,{
        headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function deleteTask(feature_id, task_id, status){
    return fetch(`${BASE_URL}/${feature_id}/${task_id}/${status}`,{
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
    })
    .then(res => res.json())
}

export function updateTaskStatus(board_id, board){
    return fetch(`${BASE_URL}/${board_id}`,{
        method: "PUT",
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(board)
    }, {mode: "cors"})
    .then(res => res.json())
}

export function updateTask(board_id, task){
    return fetch(`${BASE_URL}/edit/${board_id}`,{
        method: "PUT",
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(task)
    }, {mode: "cors"})
    .then(res => res.json())
}

export function addTask(feature_id,task){
    return fetch(`${BASE_URL}/${feature_id}`, {
        method: "POST",
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(task)
    }, {mode: "cors"})
    .then(res => res.json())
}