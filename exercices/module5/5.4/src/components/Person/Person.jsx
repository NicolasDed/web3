import React, { useContext } from "react"
import { Context as PersonsContext } from '../../contexts/personsContext'

const Person = ({ person }) => {

  const { removePerson } = useContext(PersonsContext)

  const handleDeleteClick = e => {
    e.preventDefault()
    removePerson(person)
  }

  return (
    <p>
      {person.name} : {person.number} <button onClick={handleDeleteClick}>Delete</button>
    </p>
  )

}

export default Person