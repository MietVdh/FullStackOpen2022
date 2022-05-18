import { useState } from 'react'

const Button = ({ handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Anecdotes = ({ anecdotes, selected, points, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    "Adding manpower to a late software project makes it later!",
    "The best way to get a project done faster is to start sooner",
    "How does a project get to be a year late?... One day at a time.",
    "Every good work of software starts by scratching a developer's personal itch",
    "A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.",
    "Before software can be reusable it first has to be usable.",
    "Why do we never have time to do it right, but always have time to do it over?",
    "A good way to stay flexible is to write less code."
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const updatePoints = (index) => {
    const copy = [...points]
    copy[index] += 1
    setPoints(copy)
  }

  const handleNext = () => {
    const randNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randNum)
  }

  const handleVote = () => {
    updatePoints(selected)
  }

  const maxPoints = () => {
    const copy = [...points]
    if (copy.length == 0) {
      return 0
    }
    let max = 0
    let maxIdx = 0

    for (let i = 1; i < copy.length; i++) {
      if (copy[i] > max) {
        max = copy[i]
        maxIdx = i
      }
    }

    return maxIdx
  }

  return (
    <div>
      <Anecdotes anecdotes={anecdotes} title="Anecdote of the day" selected={selected} points={points}/>
      <Button handleClick={handleNext} text="Next anecdote" />
      <Button handleClick={handleVote} text="Vote" />
      <Anecdotes anecdotes={anecdotes} title="Anecdote with most votes" selected={maxPoints()} points={points} />
    </div>
  )
}

export default App;
