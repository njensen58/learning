import { useState } from 'react'

const Form = props => {
    const initState = props.inputs
    const [inputs, setInputs] = useState(initState)
    const handleChange = e => setInputs({...inputs, [e.target.name]: e.target.value})
    const handleSubmit = e => {
        e.preventDefault()
        props.submit(inputs)
        setInputs(initState)
    }
    return props.render({ inputs, handleChange, handleSubmit })
}

export default Form