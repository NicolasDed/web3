import Button from "components/Button/button"
import Display from "components/Display/display"
import useLocalStorage from "hooks/useLocalStorage"

const App = () => {
    const [ counter, setCounter ] = useLocalStorage("counter", 0)

    const handleClick = (e) => {
        setCounter(counter + parseInt(e.target.dataset.delta))
    }

    return (
        <div>
            <Display counter={counter} />
            <Button func={handleClick} text='increase' delta={+1} />
            <Button func={handleClick} text='decrease' delta={-1} />
            <Button func={handleClick} text='reset' delta={-counter} />
        </div>
    )
  }

  export default App