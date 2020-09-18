import tokenService from './tokenService'
const BASE_URL = '/api/projects'

export function getAllProjects(){
    return fetch(BASE_URL,{
          headers: { Authorization: "Bearer " + tokenService.getToken() },
        },
        { mode: "cors" }
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

export function getOneProject(project_id){
    return fetch(`${BASE_URL}/${project_id}`,{
        headers: { Authorization: "Bearer " + tokenService.getToken() },
    },{mode: 'cors'})
    .then(res => res.json())
}

export function addProjectFeature(project_id, feature){
    return fetch(`${BASE_URL}/${project_id}/feature`,{
        method: 'POST',
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(feature)
    })
    .then(res => res.json())
}

export function addProjectContributors(project_id, contributor){
    return fetch(`${BASE_URL}/${project_id}`,{
        method: 'PUT',
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(contributor)
    })
    .then(res => res.json())
}