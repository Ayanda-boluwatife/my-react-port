import React from 'react'
import styled from 'styled-components'
import Typical from 'react-typical'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const Hero = () => {
  return (
    <Wrapper>
        <div className='hero'>
            <div className='flex'>
                <div>
                    <h4>I'm</h4>
                    <Slide bottom cascade>
                        <h2>Ayanda Boluwatife</h2>
                    </Slide>
                    <Slide left cascade>
                        <Typical
                            steps={[
                                "I'm a Web-Developer", 
                                3000, 
                                "I'm a Web-Designer",
                                3000,
                                "I'm a UI/UX Designer",
                                3000,
                                "I'm a Freelancer",
                                3000,
                                "I'm a MERN-Stack",
                                3000,]}
                            loop={Infinity}
                            wrapper="h4"
                        />
                    </Slide>
                </div>
                <Zoom cascade>
                    <div>
                        <img src="/img/profile.png" alt="" />
                    </div>
                </Zoom>
            </div>
            <div className='btn-div'>
                <Fade left>
                    <div>
                        <button className='btn-1'>Resume</button>
                    </div>
                </Fade>
                <Fade right>
                    <div>
                        <button className='btn-2'>Hire Me</button>
                    </div>
                </Fade>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

    padding-top: 50px;
    padding-left: 400px;

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .hero{
        height: 80vh;
        opacity: 0.7;
        padding: 20px;
        display: flex;
        font-size: 2.5vw;
        flex-direction: column;
        justify-content: center;
        background-color: white;
    }

    button{
        font-size: 2vw;
        cursor: pointer;
        color: white;
        padding: 15px 150px;
        border-radius: 10px;
    }

    .btn-div{
        display:flex;
        justify-content:space-between;
        width: 100%
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

    .flex{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .flex img{
        height: 330px;
    }
`
export default Hero