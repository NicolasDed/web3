import React, { useState, useContext } from 'react'
import { Context as PersonsContext } from '../../contexts/personsContext'

import AddPerson from "components/AddPerson/AddPerson"
import Person from "components/Person/Person"
import FilterPersons from 'components/FilterPersons/FilterPersons'



const App = () => {

  const [filterValue, setFilterValue] = useState('')

  const { persons } = useContext(PersonsContext)

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPersons filterValue={filterValue} changeFilter={setFilterValue} />
      <h2>Add a new</h2>
      <AddPerson />
      <h2>Numbers</h2>
      {filteredPersons.map(person => <Person key={person.id} person={person} />)}
    </div>
  )

}

export default App