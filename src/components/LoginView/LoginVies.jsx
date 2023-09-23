import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../../redux/auth/authOperations'
import { getUserToken } from '../../redux/auth/authSelectors'

const LoginView = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isUserExist = useSelector(getUserToken)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        isUserExist && navigate('/')
    }, [isUserExist, navigate])

    const handleChange = e => {
        const {name, value} = e.target

        switch (name) {
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
        dispatch(logIn({email, password}))
        resetForm()
    }

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

    const isDisabledBtn = email && password ? true : false

  return (
   <form onSubmit={handleSubmit}>
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

export default LoginView