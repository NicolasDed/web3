import { useState, useEffect } from 'react'
import { Routes, Route, Link, useMatch } from "react-router-dom"
import { Layout } from 'antd'
import About from '../Content/about'
import AddAnecdote from '../Content/addAnecdote'
import Anecdote from '../Content/anecdote'
import ListAnecdotes from '../Content/listAnecdotes'
import SourceCode from '../Footer/sourceCode'

const { Header, Footer, Content } = Layout

const App = () => {
  console.log("RENDERED");

  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  useEffect(() => {
    console.log("useEffect");
    if (notification) {
      setTimeout(
        setNotification(""),
        5000
      )
    }
  }, [anecdotes.length])

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  // const vote = (id) => {
  //   const anecdote = anecdoteById(id)

  //   const voted = {
  //     ...anecdote,
  //     votes: anecdote.votes + 1
  //   }

  //   setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  // }
  
  const match = useMatch('/anecdotes/:id')
  const anecdote = match
    ? anecdoteById(Number(match.params.id))
    : null

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`${anecdote.content} created by ${anecdote.author}`)
  }

  const padding = {
    paddingRight: 5
  }

  return (
    <>
      <Layout>
        <Header>
          <Link style={padding} to="/">anecdotes</Link>
          <Link style={padding} to="/create">create new</Link>
          <Link style={padding} to="/about">about</Link>

          {notification}
        </Header>

        <Content>
          <Routes>
            <Route path='/' element={<ListAnecdotes anecdotes={anecdotes} />} />
            <Route path='/create' element={<AddAnecdote anecdotes={anecdotes} addNew={addNew} />} />
            <Route path='/about' element={<About />} />
            <Route path='/anecdotes/:id' element={<Anecdote anecdote={anecdote} />} />
          </Routes>
        </Content>
        
        <Footer>
          <SourceCode />
        </Footer>
      </Layout>
    </>
  )
}

export default App
