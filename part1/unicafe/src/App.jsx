import {useState} from 'react'

const StatiticLine = (props) => {
  const text = props.text
  const value = props.value
  return(
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral
  const average = (props.good-props.bad)/all
  const positive = props.good/all*100


  if (all===0){
    return (
      <div> 
        <p>No feedback given</p>
      </div>
    )
  }
    return (
    <div>
      <table>
        <tbody>
          <StatiticLine text="good" value={props.good}/>
          <StatiticLine text="neutral" value={props.neutral}/>
          <StatiticLine text="bad" value={props.bad}/>
          <StatiticLine text="all" value={all}/>
          <StatiticLine text="average" value={average}/>
          <StatiticLine text="positive" value={positive +"%"}/>
        </tbody>
      </table>
    </div>
  )

}

const Button = (props) => {
  const text = props.text
  const handleClick = props.handleClick
  return(
    <button onClick={() => handleClick()}>{text}</button> 
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text="good"/>
      <Button handleClick={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={()=>setBad(bad+1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
