import axios from "axios";
const url = "http://localhost:3001/api/persons"
//const url = "https://phonebook-back-sb2x.onrender.com/api/persons"

const getAll = () => {
 const request = axios.get(url)
 return request.then(response =>{
    return response.data
 })
}

const create = (newObject) =>{
 const request = axios.post(url, newObject)
 return request.then(response =>{
    return response.data
 })   
}

const deleted = (id) =>{
 const request = axios.delete(`${url}/${id}`)
 return request.then(response =>{
   return response.data
 })
}

const update = (id, updatedObject) => {
 const request = axios.put(`${url}/${id}`,updatedObject)
 return request.then(response => {
   response.data
 })
}

export default {getAll, create, deleted, update}