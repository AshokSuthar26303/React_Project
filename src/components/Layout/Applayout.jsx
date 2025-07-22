import React from 'react'
import Header from '../Ui/Header'
import Footer from '../Ui/Footer'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Applayout