import axios from 'axios'

///dev
//const baseUrl = 'http://localhost:3001/api/persons'

///build
const baseUrl = '/api/persons'

const getAll = () => {
    
   return axios
    .get(baseUrl)
    .then(response => response.data)
    .catch(err => console.log(err))

}

const create = (newPerson) => {
    console.log(newPerson)
        return axios.post(baseUrl,newPerson)
        .then(response => response)
        .catch(error => {
            console.log(error)
            return error.response
    })
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
        .catch(error => {
            console.log(error)
            return error.response
        })
}

export default {
    getAll : getAll,
    create: create,
    update : update,
    deletePerson : deletePerson
}