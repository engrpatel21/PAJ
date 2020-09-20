import tokenService from "../services/tokenService";
const BASE_URL = "/api/users/";

export function getAllUsers() {
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
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
  return fetch(`${BASE_URL}/${user_id}/user`, {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  })
  .then(res => res.json())
}