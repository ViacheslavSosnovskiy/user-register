import React from 'react'
import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'
import { getIsLoggedIn } from '../../redux/auth/authSelectors'
import { useSelector } from 'react-redux'

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  
  return (
   <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
   </header>
  )
}

export default AppBar