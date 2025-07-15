import React from 'react'
import Container from '../global/Container'
import Logo from './logo'
import Pages from './pages'
import SideBar from './sidebar'

function NavBar() {
  return (
    <nav className='fixed top-0 left-0 w-full  border-b-1 mb-10 bg-gray-100 dark:bg-gray-950 dark:border-gray-500 z-20  '>
          <Container className={"w-full flex justify-between py-4 "}>
            <Logo/>
            <Pages/>
            <SideBar/>
          </Container>
    </nav>
  )
}

export default NavBar