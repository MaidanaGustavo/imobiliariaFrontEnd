import {ThemeProvider} from 'styled-components';
import defaultTheme from '../../styles/themes/default';
import GlobalStyle from '../../styles/global';
//import Header from '../Header';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../../Routes';
function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes />
      
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
