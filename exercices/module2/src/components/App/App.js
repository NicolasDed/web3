import Button from "components/Button/button"
import Display from "components/Display/display"
import { useState } from "react"

const App = () => {
    const [ counter, setCounter ] = useState(0)

    const increase = () => setCounter(counter + 1)

    const decrease = () => setCounter(counter - 1)
  
    const reset = () => setCounter(0)

    return (
        <div>
            <Display counter={counter} />
            <Button onClick={increase} text='increase' />
            <Button onClick={decrease} text='decrease' />
            <Button onClick={reset} text='reset' />
        </div>
    )
  }

  export default App