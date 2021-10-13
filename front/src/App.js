import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <AppStyled>
      <header className="header">Welcome to Goals App</header>
      <Switch>
        <Route path={'/home'} component={HomePage} />
        <Route path={'/'} component={AuthPage} />
      </Switch>
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  text-align: center;
  padding: 70px;
  
  .header {
    color: #6401f8;
    font-size: 52px;
    font-weight: bold;
  }

`;
