import { useDispatch, useSelector } from 'react-redux'
import { getUserName } from '../../redux/auth/authSelectors'
import { logOut } from '../../redux/auth/authOperations'

const UserMenu = () => {
    const dispatch = useDispatch()
    const name = useSelector(getUserName)

  return (
    <div>
        <p>welcome {name}</p>
        <button type='button' onClick={() => dispatch(logOut())}>log out</button>
    </div>
  )
}

export default UserMenu