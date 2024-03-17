import phonebookService from "../services/phonebook"

const Numbers = ({persons, setPersons, newFilter}) => {

    const handleRemoveClick = (person) => {

        if (window.confirm(`Delete ${person.name}?`)) {
            
            // Make an http GET request to get updated data after delete.
            // phonebookService
            //     .remove(person.id)
            //     .then(() => {
            //         phonebookService
            //             .getAll()
            //             .then(response => {
            //                 setPersons(response)
            //             })
            //     })

            // Update in JS, no need to make an HTTP request.
            phonebookService
                .remove(person.id)

            const newPersons = persons.filter(originalPerson => originalPerson.id != person.id)
            setPersons(newPersons)
        }        
    }

    const filteredPersons = persons.filter(person => (person.name.toLowerCase()).includes(newFilter.toLowerCase()))
    return (
        <ul>
        {filteredPersons.map(person => <li key={person.id}>{person.name} {person.number} <button onClick={() => handleRemoveClick(person)} >delete</button></li>)}
        </ul> 
    )
}

export default Numbers