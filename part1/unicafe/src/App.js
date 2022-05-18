import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
    
  )
}

const Feedback = ({handleGood, handleNeutral, handleBad}) => {
  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
    </div>
    
  )
}

const Statistics = ({goodCount, neutralCount, badCount}) => {
  return (
    <div>
      <h2>statistics</h2>
      <p>good {goodCount}</p>
      <p>neutral {neutralCount}</p>
      <p>bad {badCount}</p>
      
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  

  return (
    <div>
      <Feedback handleGood={handleGoodClick} handleNeutral={handleNeutralClick} handleBad={handleBadClick} />
      <Statistics goodCount={good} neutralCount={neutral} badCount={bad} />
    </div>
  )
}

export default App;
