import tokenService from './tokenService'
const BASE_URL = '/api/projects'

export function getAllProjects(){
    return fetch(BASE_URL,{
          headers: { Authorization: "Bearer " + tokenService.getToken() },
        },
        { mode: "cors" }
      ).then((res) => res.json());
}

export function getOneProject(project_id) {
    return fetch(`${BASE_URL}/${project_id}`,{
     headers: {
         Authorization: "Bearer " + tokenService.getToken()},
     }, {mode: "cors"}
     ).then((res) => res.json());
}

export function createProject(project){
    return fetch(BASE_URL, {
        method: "POST",
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(project)
    }, {mode: "cors"})
    .then(res => res.json())
}



export function updateProject(project_id, project){
    return fetch(`${BASE_URL}/${project_id}`,{
        method: "PUT",
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(project)
    }, {mode: "cors"})
    .then(res => res.json())
}



export function deleteProjectFeature(project_id, feature_id){
    return fetch(`${BASE_URL}/${project_id}/features/${feature_id}`,{
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    })
    .then(res => res.json())
}
