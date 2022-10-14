import { useState } from "react"
import Countrydetail from "./countrydetail"

const Country = (props) => {

    const [showDetails, setShowDetails] = useState(false)

    const handleShow = () => {
        setShowDetails(!showDetails)
    }

    return (
        <div>
            {
                showDetails
                ? <Countrydetail
                    key={props.country.name.common} 
                    name={props.country.name.common}
                    capital={props.country.capital}
                    area={props.country.area}
                    languages={props.country.languages}
                    flag={props.country.flags.png}>
                </Countrydetail>
                : <div>
                    {props.country.name.common}
                    <button onClick={handleShow}>show</button>
                </div>
            }
        </div>
    )
}

export default Country