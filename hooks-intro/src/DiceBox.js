import React, { useState } from 'react'

const DiceBox = (props) => {
    // State
    const initState = [
        { s: false, num: 0 }, 
        { s: false, num: 0 }, 
        { s: false, num: 0 }, 
        { s: false, num: 0 }, 
        { s: false, num: 0 }
    ]
    const [die, setDie] = useState(initState)
    const [roll, setRoll] = useState(0)

    // Methods
    const dieNum = () => Math.ceil(Math.random() * 6)
    
    const rollDie = () => {
        if (roll === (props.maxRoll || 3)) {
            setRoll(0)
            setDie(initState)
        } else {
            setDie(die.map(die => die.s ? die : { s: false, num: dieNum() }))
            setRoll(roll + 1)
        }
    }
    const selectDie = dieNum => roll !== 0 && setDie(die.map((die, i) => i === dieNum ? { s: !die.s, num: die.num } : die))

    // Styles
    const styles = {
        die: {
            width: 100, height: 100, border: '1px solid black', borderRadius: 5,
            display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 40,
            fontWeight: 'lighter', fontFamily: 'sans-serif', margin: 3
        },
        container: {
            display: 'flex', flexDirection: props.direction === "left" ? "row" : "column"
        }
    }

    return (
        <div style={styles.container}>
            <h1>Roll: {roll}</h1>
            {die.map((d, i) =>
                <div
                    style={{
                        backgroundColor: d.s
                            ? "cornflowerblue"
                            : "white", ...styles.die
                    }}
                    onClick={() => selectDie(i)}>
                    {d.num}
                </div>
            )}
            <button onClick={rollDie}>Roll</button>
        </div>
    )
}

export default DiceBox