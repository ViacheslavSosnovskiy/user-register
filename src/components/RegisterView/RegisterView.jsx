import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/authOperations'
import { useNavigate } from 'react-router-dom'

const RegisterView = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = e => {
        const {name, value} = e.target

        switch (name) {
            case 'name':
                return setName(value)
            case 'email':
                return setEmail(value)     
            case 'password':
                return setPassword(value)
            default:
                return   
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register({name, email, password}))
        navigate('/login')
        resetForm()
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setPassword('')
    }

    const isDisabledBtn = name && email && password ? true : false


  return (
   <form onSubmit={handleSubmit}>
        <label>
            name
            <input type='text' name='name' value={name} onChange={handleChange} />
        </label>
        <label>
            email
            <input type='text' name='email' value={email} onChange={handleChange} />
        </label>
        <label>
            password
            <input type='text' name='password' value={password} onChange={handleChange} />
        </label>

        <button type='submit' disabled={!isDisabledBtn}>submit</button>
   </form>
  )
}

export default RegisterView