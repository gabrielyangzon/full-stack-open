import React , {useState} from 'react'

import Input from './components/Input'
import Title from './components/Title'


function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState({id : "" ,name:"" , number:""})
  const [searchField, setSearchField] = useState("")
  const [filteredPersons,setFilteredPesons] = useState([...persons])
  const [error , setError] = useState("")

  /// when user click add button
  function addPersonHandler(event){
    event.preventDefault()

    if(newName.name === "" || newName.number ==="" ) {
      setError("Please input all fields") 
      return
    }

    let checkIfPersonExist = persons.find(person => person.name.toLowerCase() === newName.name.toLowerCase())

    if(!checkIfPersonExist){

      let newPerson = { 
          id: Math.floor(Math.random() * Date.now()),
          name: newName.name , 
          number : newName.number
      }
      console.log(newPerson)
      setPersons(curr => {
        setFilteredPesons(curr.concat(newPerson))
        return curr.concat(newPerson)
      })
      

      setNewName({id : "" ,name:"" , number:""})
      setSearchField("")
      setError("")
    }else{
      alert(`${newName.name} is already added to phonebook` )
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
      <Persons data={filteredPersons}/>
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


function Persons({data}) {

  let component = data.length === 0 ? <p>No data</p> : data.map(person => <p key={person.id}>{person.name} : {person.number}</p>)

  return(
    <>
    <p><b>Count:</b> {data.length}</p>
     {component}
    </>
  )
}

export default App;
