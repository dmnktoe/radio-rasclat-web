import Box from './components/Box/Box';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Gradient from './components/Gradient';
import styled from 'styled-components';
import Marquee3k from 'marquee3000';

function App() {
  Marquee3k.init()
  return (
    <div className="App">
      <Header/>
      <Container>
        <div className="marquee3k" data-speed="0.25">
          <h3>Radio Rasclat&nbsp;→&nbsp;alles auf einen Blick&nbsp;→&nbsp;</h3>
        </div>
        <Box>
          Cookies!
        </Box>
      </Container>
    </div>
  );
}

export default App;
