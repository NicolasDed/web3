import { useState } from 'react'
import Button from '../Button/button'
import StatisticLine from '../Display/statisticline'
import Loading from '../Loading/loading'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [loading, setLoading] = useState(true)

  const all = good + neutral + bad
  const average = (good - bad)/all
  const positive = good / all * 100

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  setTimeout(
    () => {setLoading(!loading)},
    3000
  )

  const Statistics = () => {
    if(all === 0) {
      return (
        <div>no feedback yet</div>
      )
    }
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine value={good} text='good'></StatisticLine>
            <StatisticLine value={neutral} text='neutral'></StatisticLine>
            <StatisticLine value={bad} text='bad'></StatisticLine>
            <StatisticLine value={all} text='all'></StatisticLine>
            <StatisticLine value={average} text='average'></StatisticLine>
            <StatisticLine value={positive} text='positive' unit='%'></StatisticLine>
          </tbody>
        </table>
      </div>
    )
  }

  if (!loading) {
    return (
      <div>
        <Loading text='Loading screen'></Loading>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Give feedback</h1>
        <Button func={handleGood} text='good'></Button>
        <Button func={handleNeutral} text='neutral'></Button>
        <Button func={handleBad} text='bad'></Button>
  
        <h1>Statistics</h1>
        <Statistics></Statistics>
      </div>
    )
  }
}

export default App