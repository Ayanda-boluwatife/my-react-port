import React from 'react'
import Hero from './Hero'
import styled from 'styled-components'
import AsideBar from './AsideBar'
import About from './About'

const MainPort = () => {
  return (
    <Wrapper className='App'>
      <div>
        <AsideBar />
      </div>
      <div>
        <Hero />
        <About />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display: flex;
width: 100%;
  

  .App{
    background-color: black;
    display: flex;
    height: 100vh;
    width:100%;
    opacity: 0.6;
    position: absolute;
  }
`
export default MainPort;