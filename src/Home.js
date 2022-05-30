import React from 'react'
import Conatiner2 from './components/Conatiner2'
import Container1 from './components/Container1'
import Container3 from './components/Container3'
import Container4 from './components/Container4'
import Footer from './components/Footer'
// import Scrool from './components/Scrool.tsx'
const Home = () => {
  return (
    <div>
       <Container1/>
       <Conatiner2/>
       <Container3/>
       <Container4/>
       {/* <Footer/> */}
    </div>
  )
}

export default Home