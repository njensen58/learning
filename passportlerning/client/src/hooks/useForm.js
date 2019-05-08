import { useState } from 'react'

function useForm(inputs, submitCb){
  const [ formInputs, setFormInputs ] = useState(inputs)
  const handleChange = e => {
    const { name, value } = e.target
    setFormInputs(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    submitCb(formInputs)
    setFormInputs(inputs)
  }
  return { formInputs, handleChange, handleSubmit}
}

export default useForm