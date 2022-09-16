const Button = ({func, text, delta}) => {
    return (
        <button onClick={(e) => {
            func(parseInt(e.target.dataset.delta))
        }} data-delta={delta}> {text} </button>
    )
}

export default Button