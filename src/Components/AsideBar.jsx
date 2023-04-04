import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom'
import {FaFacebook, FaHome, FaPortrait} from 'react-icons/fa'
import {ImProfile} from 'react-icons/im'
import {SiServerless} from 'react-icons/si'
import {GrMail} from 'react-icons/gr'
import {BsTwitter, BsInstagram, BsGithub, BsLinkedin, BsFillStarFill, BsGoogle, BsFillSuitHeartFill} from 'react-icons/bs'

const AsideBar = () => {
  return (
    <Wrapper>
      <div>
        <div className='port-image'>
          <Zoom cascade>
            <img src="../img/hero-bg.jpg" alt="" />
          </Zoom>
        </div>

        <div className='port'>
          <ol>
            <Fade left>
              <Link> <li> Home  <FaHome /></li></Link>
              <Link> <li>  About  <ImProfile/></li></Link>
              <Link><li>Experience  <BsFillStarFill /></li></Link>
              <Link><li>Service  <SiServerless /></li></Link>
              <Link><li>Portfolio  <FaPortrait /></li></Link>
              <Link><li>Contact  <GrMail /></li></Link>
            </Fade>
          </ol>
        </div>

        <div className='links'>
          <Slide bottom >
            <Link><FaFacebook/></Link>
            <Link><BsTwitter/></Link>
            <Link><BsInstagram/></Link>
            <Link><BsGithub/></Link>
            <Link><BsLinkedin/></Link>
            <Link><BsGoogle/></Link>
          </Slide>
        </div>

        <div className='text'>
          <p>Designed by Stevo_dev | Built with <BsFillSuitHeartFill /></p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
background-color: white;
height: 100vh;
/* width: 22%; */
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;


  .port-image img{
    height: 200px;
    width: 95%;
    padding-left: 10px;
  }

  .port a{
    text-decoration: none;
    color: white;
  }

  li{
    list-style: none;
    padding: 10px 15px;
    background-color: black;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    width:80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ol{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .links{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .links a{
    color: white;
    background-color: black;
    border-radius: 20px;
    padding: 5px 8px;
  }

  .text{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text svg{
    color: red;
  }
`
export default AsideBar;