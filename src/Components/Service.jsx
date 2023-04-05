import React from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import { BsAirplaneFill } from 'react-icons/bs'

const Service = () => {
  return (
    <Wrapper>
        <div className="hero">
            <div className='service'>
              <Slide left cascade>
                <h1>Service</h1>
              </Slide>
            </div>
            <div className="main-serve">
               <div className="flex-1">
                    <Fade left cascade>
                        <div className="web-design">
                            <span><BsAirplaneFill /></span>
                            <h1>Web-Design</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae, aperiam sed recusandae quaerat necessitatibus totam ea deleniti quos ex excepturi sunt autem doloribus. Commodi modi fugiat, maxime quibusdam a doloribus asperiores eveniet dicta rem non illo sapiente architecto dolore!</p>
                        </div>
                    </Fade>
                    <Fade right cascade>
                        <div className="web-design">
                            <span><BsAirplaneFill /></span>
                            <h1>Web-Development</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae, aperiam sed recusandae quaerat necessitatibus totam ea deleniti quos ex excepturi sunt autem doloribus. Commodi modi fugiat, maxime quibusdam a doloribus asperiores eveniet dicta rem non illo sapiente architecto dolore!</p>
                        </div>
                    </Fade>
               </div>
               <div className="flex-2">
                    <Fade left cascade>
                        <div className="web-design">
                            <span><BsAirplaneFill /></span>
                            <h1>Freelancer</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae, aperiam sed recusandae quaerat necessitatibus totam ea deleniti quos ex excepturi sunt autem doloribus. Commodi modi fugiat, maxime quibusdam a doloribus asperiores eveniet dicta rem non illo sapiente architecto dolore!</p>
                        </div>
                    </Fade>
                    <Fade right cascade>
                        <div className="web-design">
                            <span><BsAirplaneFill /></span>
                            <h1>UI/UX Designer</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae, aperiam sed recusandae quaerat necessitatibus totam ea deleniti quos ex excepturi sunt autem doloribus. Commodi modi fugiat, maxime quibusdam a doloribus asperiores eveniet dicta rem non illo sapiente architecto dolore!</p>
                        </div>
                    </Fade>
               </div>
            </div>
            <div className='btn-view'>
                <button>View More</button>
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

    .service h1{
        font-size: 3vw;
        padding: 20px;
    }

    .flex-1, .flex-2{
        display: flex;
        gap: 20px;
        padding: 20px;
    }

    svg{
        color: black;
        font-size: 3vw;
    }

    .web-design{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .btn-view{
        display: flex;
        justify-content: center;
    }

    .btn-view button{
        padding: 10px 30px;
        border: none;
        background-color: gray;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }
`
export default Service