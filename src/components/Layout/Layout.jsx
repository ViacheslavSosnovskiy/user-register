import React from 'react'
import AppBar from '../AppBar/AppBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <AppBar />
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </>
  )
}

export default Layout