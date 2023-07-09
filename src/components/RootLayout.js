import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col min-h-screen'>
        <div className='flex-grow'>
          <Outlet />
        </div>

      </div>

      <Footer />
    </>


  )
}

export default RootLayout
