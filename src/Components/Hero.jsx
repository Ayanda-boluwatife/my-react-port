import React from 'react'
import styled from 'styled-components'
import Typical from 'react-typical'
import Slide from 'react-reveal/Slide';

const Hero = () => {
  return (
    <Wrapper>
        <div className='hero'>
            <div>
                <h4>I'm</h4>
                <Slide bottom cascade>
                    <h2>Ayanda Boluwatife</h2>
                </Slide>
                <Slide left cascade>
                    <Typical
                        steps={[
                            'Im a Web-Deveolper', 
                            1000, 
                            'Im a Web-Designer!',
                            500,
                            'Im a UI/UX Designer',
                            500,
                            'Im a Freelancer',
                            500,
                            'Im a MERN-Stack']}
                        loop={Infinity}
                        wrapper="h4"
                    />
                </Slide>
            </div>
            <div>
                <div>
                    <button>Hire Me</button>
                </div>
                <div>
                    <button>Read Docs</button>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

    padding-left: 50px;
    padding-top: 100px;

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .hero{
        background-color: white;
        height: 70vh;
        min-width: 900px;
    }
`
export default Hero