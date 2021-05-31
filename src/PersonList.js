import React from 'react'
import Person from './Person'

function PersonList(props) {

    const personMap = props.persons.map(person => (<Person key={person.id} person={person}> {person.description} </Person>))
    return (
        <section>
            {personMap}
        </section>
    )
}

export default PersonList
