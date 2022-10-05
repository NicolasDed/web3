import { useState } from 'react'
import Button from '../Button/button'
import Anecdote from '../Display/anecdote'
import Vote from '../Display/vote'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [indexMostVotes, setIndexMostVotes] = useState(0)

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const copy = {...votes}
    copy[selected] += 1
    const arr = Object.values(copy)
    const max = Math.max(...arr)
    const index = arr.indexOf(max)
    setIndexMostVotes(index)
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote array={anecdotes} index={selected}></Anecdote>
      <Vote array={votes} index={selected}></Vote>
      
      <Button func={handleVote} text='vote'></Button>
      <Button func={handleAnecdote} text='next anecdote'></Button>

      <h1>Anecdote with most votes</h1>
      <Anecdote array={anecdotes} index={indexMostVotes}></Anecdote>
      <Vote array={votes} index={indexMostVotes}></Vote>
    </div>
  )
}

export default App