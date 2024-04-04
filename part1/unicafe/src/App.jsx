import { useState } from 'react'

const StatisticLine = (props) => {
return (
    <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
    </tr>
)
}

const Stats = (props) => {
    const all = props.good + props.neutral + props.bad

    if (all !== 0) {
        return (

            <div>
                <table>
                <StatisticLine text={"Good: "} value={props.good} />
                <StatisticLine text={"Neutral: "} value={props.neutral} />
                <StatisticLine text={"Bad: "} value={props.bad} />
                <StatisticLine text={"Total: "} value={all} />
                <StatisticLine text={"Average: "} value={Math.round((props.good - props.bad) / all * 100)/100} />
                <StatisticLine text={"Positive: "} value={Math.round(props.good / all * 100 * 100)/100 + "%"} />
                </table>
            </div>
        )
    } else {
        return (

            <div>
                <p>
                    No Feedback given
                </p>
            </div>
        )
    }
}

const Button = (props) => {
    return (
        <button onClick={props.clickHandler}>
            {props.text}
        </button>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give Feedback</h1>

            <Button clickHandler={() => setGood(good + 1)} text="Good" />
            <Button clickHandler={() => setNeutral(neutral + 1)} text="Neutral" />
            <Button clickHandler={() => setBad(bad + 1)} text="Bad" />

            <h1>Statistics</h1>

            <Stats good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App
