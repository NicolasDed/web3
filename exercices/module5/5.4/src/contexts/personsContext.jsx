import React from "react";
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import PersonsAPI from "services/persons";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [persons, setPersons] = useState([])

    const initialLoad = () => {
        PersonsAPI
          .getAll()
          .then(persons => setPersons(persons))
          .catch(error => console.warn(error))
      }
      useEffect(initialLoad, [])
    
      const upsertPerson = payload => {
        const foundPerson = persons.find(person => person.name === payload.name)
        if (foundPerson) {
          return updatePerson(foundPerson, payload)
        }
        createPerson(payload)
      }
    
      const updatePerson = (existingPerson, payload) => {
        const message = `${existingPerson.number} is already added to phonebook, replace the old number with a new one ?`
        const confirm = window.confirm(message)
        if (!confirm) return
        PersonsAPI
          .update(existingPerson, payload)
          .then(updatedPerson => {
            const newPersons = persons.map((listItem) => {
              if (listItem.id !== existingPerson.id) return listItem
              return updatedPerson
            })
            setPersons(newPersons)
          })
      }
    
      const createPerson = (payload) => {
        const person = {
          ...payload,
          id: uuidv4()
        }
        PersonsAPI
          .create(person)
          .then(createdPerson => {
            setPersons([...persons, createdPerson])
          })
      }
    
      const removePerson = (person) => {
        const confirmed = window.confirm("Are you sure ? ")
        if (!confirmed) return
        PersonsAPI
          .remove(person)
          .then(() => setPersons(persons.filter(listItem => listItem.id !== person.id)))
      }

    return (
        <>
            <Context.Provider value={{persons, upsertPerson, removePerson}}>
                { props.children }
            </Context.Provider>
        </>
    )
}

export {
    Context,
    ProviderWrapper,
}