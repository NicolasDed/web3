import personService from "../../services/persons"
import utils from "../../utils/utils"

const Number = (props) => {

    const handleDelete = () => {
        if (window.confirm(`Delete ${props.name} ?`)) {
            personService
                .deleteOne(props.id)
                .then(() => {
                    const arrayCopy = Array.from(props.collection)
                    const deletedPersonIndex = utils.findIndexWithId(arrayCopy, props.id)
                    arrayCopy.splice(deletedPersonIndex, 1)
                    props.func(arrayCopy)
                })
        }
    }

    return (
        <div>
            {props.name} {props.number}
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default Number