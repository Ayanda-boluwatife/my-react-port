import React from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';
// import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'

const Hero = () => {
  return (
    <Wrapper>
        <div className='hero'>
            <div className='about'>
              <Slide left cascade>
                <h1>About Me</h1>
              </Slide>
            </div>
            <div className='main-about'>
              <Zoom cascade>
                <img src="/img/about.jpg" alt="" />
              </Zoom>
              <div className='about-text'>
                <Slide left cascade>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla ducimus a harum exercitationem adipisci quasi, numquam velit sunt illo architecto cupiditate ab amet beatae quam aspernatur accusamus minima. Ipsum.</p>
                </Slide>
                <div className='btn-div'>
                  <button className='btn-2'>Explore More</button>
                  <button className='btn-1'>Hire Me</button>
                </div>
              </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

    padding-left: 400px;
    padding-top: 50px;

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .hero{
        background-color: white;
        opacity: 0.7;
        display: flex;
        gap: 20px;
        flex-direction: column;
        padding: 20px;
    }

    .about h1{
      font-size: 3vw;
    }

    .main-about{
      display: flex;
      align-items: center;
      gap: 40px;
      font-size: 25px;
    }

    .main-about img{
      height: 300px;
    }

    .btn-div{
        display:flex;
        width: 100%;
        gap: 30px;
    }
    button{
        padding: 10px 30px;
        cursor: pointer;
        border-radius: 10px;
        font-size: 2vw;
        color: white;
    }


    .btn-1{
        background-color: black;
        color: white;
        border: none;
    }

    .btn-2{
        background-color: gray;
        border: none;
    }

    .about-text{
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
`
export default Hero