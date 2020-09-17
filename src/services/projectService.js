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
        headers: {'content-type': 'appliceation/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(project)
    }, {mode: "cors"})
    .then(res => res.json())
}