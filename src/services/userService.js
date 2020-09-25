import tokenService from "../services/tokenService";
const BASE_URL = "/api/users";

export function getAllUsers() {
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function addFriend(friend){
  return fetch(`${BASE_URL}/friends`,{
    method: 'POST',
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(friend)
    }, {mode: "cors"})
    .then(res => res.json())
}

export function getUserProjects(user_id){
  return fetch(`${BASE_URL}/${user_id}/projects`,{
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  })
  .then(res => res.json())
}

export function getUserMessages(user){
  return fetch(`${BASE_URL}/${user._id}/messages`,{
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  })
  .then(res => res.json())
}

export function getOneUser(user_id){
  return fetch(`${BASE_URL}/user`, {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  })
  .then(res => res.json())
}

export function differentUser(user_id){
  return fetch(`${BASE_URL}/${user_id}/another`, {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  })
  .then(res => res.json())
}


export function getAllUserProjects(){
  return fetch('/api/projects', {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  })
  .then(res => res.json())
}

export function updateUserInfo(userData){
  console.log(userData)
  return fetch(`${BASE_URL}`,{
      method: 'PUT',
      headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(userData)
  }, {mode: "cors"})
  .then(res => res.json())
}