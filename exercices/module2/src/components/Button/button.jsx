const Button = ({func, text, delta}) => <button onClick={func} data-delta={delta}> {text} </button>

export default Button