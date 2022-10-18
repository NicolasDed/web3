import BadButton from "../Button/badButton"
import GoodButton from "../Button/goodButton"
import OkButton from "../Button/okButton"
import ResetButton from "../Button/resetButton"
import { Context as CountersContext } from "../../contexts/countersContext"
import { useContext } from "react"

const App = () => {

  const { good, ok, bad } = useContext(CountersContext)

  return (
    <div>
      <ul>
        <li>
          Good : {good}
          <GoodButton />
        </li>
        <li>
          Ok : {ok}
          <OkButton />
        </li>
        <li>
          Bad : {bad}
          <BadButton />
        </li>
      </ul>
      <ResetButton />
    </div>
  );
}

export default App;
