import Number from "../Display/number"
import { useState, useEffect } from "react"
import personService from "../../services/persons"
import utils from "../../utils/utils"

// npm run server & npm start
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    // Name already existing
    const existingNamePerson = persons.filter(person => person.name === newName)
    if (existingNamePerson.length > 0) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)) {
        personService
          .updateOne(existingNamePerson[0].id, personObject)
          .then(updatedPerson => {
            console.log(updatedPerson);
              const arrayCopy = Array.from(persons)
              const updatedPersonIndex = utils.findIndexWithId(arrayCopy, updatedPerson.id)
              arrayCopy[updatedPersonIndex] = updatedPerson
              setPersons(arrayCopy)
              setNewName('')
              setNewNumber('')
          })
      }
    }

    else {
      personService
        .createOne(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with
        <input
          value={filterValue}
          onChange={handleFilterChange}
        />
      </div>
      <h2>Add a new number</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          filterValue.length === 0
          ? persons
            .map(person =>
              <Number 
                key={person.id} 
                id={person.id} 
                name={person.name} 
                number={person.number} 
                func={setPersons} 
                collection={persons}>  
              </Number>
            )
          : persons
            .filter(p => p.name.toLowerCase().includes(filterValue.toLowerCase()))
            .map(person =>
              <Number 
                key={person.id} 
                id={person.id} 
                name={person.name} 
                number={person.number} 
                func={setPersons} 
                collection={persons}>  
              </Number>
            )
        }
      </div>
    </div>
  )
}

export default App;
