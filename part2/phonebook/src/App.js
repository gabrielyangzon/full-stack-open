import React , {useEffect, useState} from 'react'
import axios from 'axios'

import Input from './components/Input'
import Title from './components/Title'

import personService from './services/personService'

function App() {
  const[persons,setPersons] = useState([])
  const [newName, setNewName] = useState({id : "" ,name:"" , number:""})
  const [searchField, setSearchField] = useState("")
  const [filteredPersons,setFilteredPesons] = useState([...persons])
  const [error , setError] = useState("")
   
  const [refresh,setFresh] = useState(false);

  useEffect(() => {
    personService
      .getAll()
      .then(data => {
            console.log(data)
            setPersons(data)
            setFilteredPesons(data)
        })
      .catch(error => console.log(error))
  },[refresh])


  /// when user click add button
  function addPersonHandler(event){
    event.preventDefault()

    // check if user input has values
    if(newName.name === "" || newName.number ==="" ) {
      setError("Please input all fields") 
      return
    }

    // check if user already exist
    let checkIfPersonExist = persons.find(person => person.name.toLowerCase() === newName.name.toLowerCase())

     // if person does not exist
    if(!checkIfPersonExist){
 
        let newPerson = { 
            id: Math.floor(Math.random() * Date.now()),
            name: newName.name , 
            number : newName.number
        }

        
        // add new user
        personService.create(newPerson)
            .then(response => {

              if(response.status=== 201) 
              {
                setPersons(curr => {
                    setFilteredPesons(curr.concat(newPerson))
                    return curr.concat(newPerson)

                })
                  clear()
              }      
        })

 
    }
    //if person exist
    else{


     let isReplace = window.confirm(`${newName.name} is already added to phonebook, do you want to replace the old number with new one?` )

          
          if(isReplace){

              // replace user phonenumber
              let updatedPerson ={
                  id: checkIfPersonExist.id,
                  name: checkIfPersonExist.name , 
                  number : newName.number
              }

                personService.update(updatedPerson.id , updatedPerson)
                  .then(response => {
                    console.log(response)
                     if(response === 200){
                     
                         alert(`${newName.name} phonenumber updated`)
                         setFresh(true)
                         clear();
                     }  
                  })
          } 
    }

    
   
  }

  /// when user change input textbox
  function onChangeInputHandler(event){
     let key = event.target.name
     let value = event.target.value
    setNewName(curr =>  {return {...curr,  [key] : value  } } )
  }


  /// when user filter persons
  function onFilterChangeHandler(event){
    let key = event.target.value 

    setSearchField(key)

    let filteredData = key === "" ? persons : persons.filter(person => person.name.toLowerCase().includes(key))
    setFilteredPesons(filteredData)
  }

   /// when user click deletebutton
  function onDeleteHandler(id){
     let personToDelete = persons.find(p => p.id === id)
     let isOk = window.confirm(`Delete ${personToDelete.name} ?`)

     if(isOk){
        personService.deletePerson(id).then(response => {

          // if successfully deleted
         if(response.status === 200){

                // update state
                setPersons(current => {
                   let updatedPersons = current.filter(p => p.id !== id)
                   clear()

                  setFilteredPesons(updatedPersons)
                  
                  return updatedPersons
              })
         }
         // if not deleted
         else{
           alert("Something wrong happened please try again")
         }

      })



         
     }
  }


  function clear(){
      setNewName({id : "" ,name:"" , number:""})
      setSearchField("")
      setError("")
  }

  return (
    <div>
    
     <Title text="Phonebook" />
     <Filter 
      label="Filter shown with"
      value={searchField} 
  
      onFilter={onFilterChangeHandler}/>

      <Title text="Add new Person" />
      <PersonForm 
        onAddPerson={addPersonHandler} 
        newName={newName} 
        onChange={onChangeInputHandler}
            error={error}/>


      <Title text="Numbers" />
      <Persons data={filteredPersons} onDelete={onDeleteHandler}/>
    </div>
  )
}


function Filter({label,onFilter,value}){
  return(
    <>
    <Input 
            label={label}
            name=""
            value={value}
            onChange={onFilter}
          />
    </>
    )
}


function PersonForm({onAddPerson,newName,onChange , error}) { 

  return(<>
      <form  onSubmit={onAddPerson}>
          
            <Input 
              label="name"
              name="name" 
              value={newName.name}
              onChange={onChange}/> 

            <Input  
              label="number" 
              name="number" 
              value={newName.number} 
              onChange={onChange}/>

            <div>
            <button type="submit">add</button>
            </div>
          
      </form>
      <p style={{color:"red"}}>{error}</p>
  </>)
 }


function Persons({data , onDelete}) {

  let component = data.length === 0 ? 
      <tr><td>No data</td></tr> :
     data.map(person => { 
      return  (
                <tr key={person.id}>
                  <td>{person.name}</td> 
                  <td>{person.number}</td>
                  <td><button onClick={()=>onDelete(person.id)}>delete</button></td>
                </tr>
            )
     })

  return(
    <>
    <p><b>Count:</b> {data.length}</p>
       <table>
        <tbody>
         {component}
         </tbody>
       </table>
    </>
  )
}

export default App;
