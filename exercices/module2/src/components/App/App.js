import Button from "components/Button/button"
import Display from "components/Display/display"
import { useState } from "react"

const App = () => {
    const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")))

    
    const changeCount = (delta) => {
        setCounter(counter + delta)
        localStorage.setItem("counter", JSON.stringify(counter + delta))
    }

    return (
        <div>
            <Display counter={counter} />
            <Button func={changeCount} text='increase' delta={+1} />
            <Button func={changeCount} text='decrease' delta={-1} />
            <Button func={changeCount} text='reset' delta={-counter} />
        </div>
    )
  }

  export default App