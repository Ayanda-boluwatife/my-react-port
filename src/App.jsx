import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AsideBar from './Components/AsideBar';
import styled from 'styled-components';
import MainPort from './Components/MainPort';

function App() {
  return (
    <Wrapper>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AsideBar />}/>
          <Route path="/main_port" element={<MainPort />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  background-image: url("./img/hero-bg.jpg");
  background-position: center;
  background-size: cover;
  height: 100vh;
  width:100%;
  position: relative;
  .App{
    background-color: black;
    height: 100vh;
    width:100%;
    opacity: 0.6;
    position: absolute;
  }
`
export default App;
