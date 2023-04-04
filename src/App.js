import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from 'styled-components';
import MainPort from './Components/MainPort';

function App() {
  return (
    <Wrapper>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPort />}/>
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
  font-family: 'serif';
  

  
`
export default App;
