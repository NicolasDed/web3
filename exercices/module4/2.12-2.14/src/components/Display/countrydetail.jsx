const Countrydetail = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <div>capital {props.capital}</div>
            <div>area {props.area}</div>

            <h3>languages</h3>
            <ul>
                {Object.values(props.languages).map(lang => <li>{lang}</li>)}
            </ul>
            <img src={props.flag} alt="flag"></img>
        </div>
    )
}

export default Countrydetail