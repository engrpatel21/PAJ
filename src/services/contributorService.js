import tokenService from './tokenService'
const BASE_URL = '/api/contributors'

export function addContributor(project_id, contributor){
    return fetch(`${BASE_URL}/${project_id}`,{
        method: "POST",
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(contributor)})
    .then(res => res.json())
}

export function getContributors(project_id){
    return fetch(`${BASE_URL}/${project_id}`,{
        headers: { Authorization: "Bearer " + tokenService.getToken() },
        },
        { mode: "cors" }
      ).then((res) => res.json());
}

export function updateContributor(contributor_id, contributor){
    return fetch(`${BASE_URL}/${contributor_id}`,{
        method: "PUT",
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(contributor)
    }, {mode: "cors"})
    .then(res => res.json())
}

export function deleteContributor(project_id, contributor_id, user_id){
    return fetch(`${BASE_URL}/${project_id}/${contributor_id}/${user_id}`,{
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    })
    .then(res => res.json())
}