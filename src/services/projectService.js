import tokenService from './tokenService'
const BASE_URL = '/api/projects'

export function getAllProjects(){
    return fetch(
        BASE_URL,
        {
          headers: { Authorization: "Bearer " + tokenService.getToken() },
        },
        { mode: "cors" }
      ).then((res) => res.json());
}