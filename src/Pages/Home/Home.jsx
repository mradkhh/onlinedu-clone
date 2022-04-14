import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from './Sections/Hero'
import Partner from './Sections/Partner'
import Comments from './Sections/Comments'

const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Partner/>
        <Comments/>
    </>
  )
}

export default Home