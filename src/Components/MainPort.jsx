import React from 'react'
import Hero from './Hero'
import styled from 'styled-components'
import AsideBar from './AsideBar'
import About from './About'
import Service from './Service'

const MainPort = () => {
  return (
    <Wrapper className='App'>
      <div className='aside'>
        <AsideBar />
      </div>
      <div>
        <Hero />
        <About />
        <Service />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display: flex;
background: gray;
  position: absolute;
  font-family: 'serif';
  padding-left: 50px;
  padding-right: 50px;
  
.aside{
  position: fixed;
}
  .App{
    background-color: black;
    display: flex;
    height: 100vh;
    width: 100%;
    opacity: 0.6;
    position: absolute;
  }
`
export default MainPort;