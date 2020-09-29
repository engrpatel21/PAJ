import tokenService from './tokenService'
const BASE_URL = '/api/features'

export function getAllFeatures(project_id){
    return fetch(`${BASE_URL}/${project_id}`,{
        headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function createFeature(project_id, feature){
    return fetch( `${BASE_URL}/${project_id}`,{
        method: "POST",
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(feature)
    }, {mode: "cors"})
    .then(res => res.json())

}

export function updateFeature(feature_id, feature){
    return fetch(`${BASE_URL}/${feature_id}`,{
        method: "PUT",
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(feature)
    }, {mode: "cors"})
    .then(res => res.json())
}

export function deleteFeature(feature_id){
    return fetch(`${BASE_URL}/${feature_id}`,{
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    })
    .then(res => res.json())
}