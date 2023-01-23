import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
    
   return axios
    .get(baseUrl)
    .then(response => response.data)
    .catch(err => console.log(err))

}

const create = (newPerson) => {
    console.log(newPerson)
 return axios.post(baseUrl,newPerson)
}


const deletePerson = (personId) => {
    console.log(personId)
 return axios.delete(`${baseUrl}/${personId}`)
                .then(response => response.status)
                .catch(err => err)
}

const update =(id,updatedPerson) => {
    return axios.put(`${baseUrl}/${id}`,updatedPerson)
        .then(response => response.status)
}

export default {
    getAll : getAll,
    create: create,
    update : update,
    deletePerson : deletePerson
}