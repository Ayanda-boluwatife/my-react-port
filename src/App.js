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
 
  

  
`
export default App;
