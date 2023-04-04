import React from 'react';
import styled from 'styled-components'

const AsideBar = () => {
  return (
    <Wrapper>
      <div>
        <div className='port-image'>
          <img src="../img/hero-bg.jpg" alt="" />
        </div>
        
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  
  .port-image img{
    height: 200px;
  }
`
export default AsideBar;