const StatisticLine = (props) => {
    if(isNaN(props.value)) {
        return (
            <tr>
                <td>no {props.text}</td>
            </tr>
        )
    }
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value} {props.unit}</td>
        </tr>
    )
}

export default StatisticLine