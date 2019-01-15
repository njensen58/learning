import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [count, setCount] = useState(0)
    const [characters, setCharacters] = useState([])
    const [color, setColor] = useState("blue")
    const styles = { width: 200, height: 200, backgroundColor: color }

    function handleSubmit(e){
        e.preventDefault()
        setCount(e.target.count.value)
    }

    function checkKeyPressed(e){
        switch(e.code){
            case "KeyB":
                setColor("blue")
                break;
            case "KeyG":
                setColor("green")
                break;
            case "KeyR":
                setColor("red")
                break;
            case "KeyY":
                setColor("yellow")
                break;
            case "KeyP":
                setColor("purple")
                break;
            case "KeyO":
                setColor("orange")
                break;
            default:
                setColor("black")
        }
    }

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => {
                setCharacters(res.data.results)
            })
    })

    useEffect(() => {
        window.addEventListener("keydown", checkKeyPressed)
        return () => {
            window.removeEventListener("keydown", checkKeyPressed)
        }
    })


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count / 2)}>1/2</button>
            <button onClick={() => setCount(count * 2)}>x2</button>
            <form onSubmit={handleSubmit}>
                <input type="number" name="count" />
                <button>Submit</button>
            </form>
            <div style={styles}></div>
            <div>
                { characters.map(char => <h1 key={char.name}>{char.name}</h1>) }
            </div>
        </div>
    )
}

export default App