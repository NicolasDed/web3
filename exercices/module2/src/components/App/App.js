import Button from "components/Button/button"
import Display from "components/Display/display"
import { useState } from "react"

const App = () => {
    const [ counter, setCounter ] = useState(0)

    
    const changeCount = (delta) => setCounter(counter + delta)

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