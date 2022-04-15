import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from './Sections/Hero'
import Partner from './Sections/Partner'
import Comments from './Sections/Comments'
import About from './Sections/About'
import Validity from './Sections/Validity'
import Popular from './Sections/Popular'
import Vebinar from './Sections/Vebinar'
import Professor from './Sections/Professor'

const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Partner/>
        <Comments/>
        <About/>
        <Validity/>
        <Popular/>
        <Vebinar/>
        <Professor/>
    </>
  )
}

export default Home