import styled from 'styled-components';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Mainpage from './pages/Mainpage';

const StyledWrapper = styled.div`
  
`

function App() {
  return (
    <StyledWrapper>

      {/* <div>
        <div>
          <Link to="/">Home Page</Link>
        </div>
        <div>
          <Link to="/login">Login Page</Link>
        </div>
        <div>
          <Link to="/register">Register Page</Link>
        </div>
        <div>
          <Link to="/add-word">Add Word Page</Link>
        </div>
      </div> */}
      
        <Switch>

          {/*  */}
          <Route path="/register">
            <RegisterPage />
          </Route>

          {/*  */}
          <Route path="/login">
            <LoginPage />
          </Route>
          
          {/*  */}
          <Route path="/">
            <Mainpage />
          </Route>

        </Switch>
        
    </StyledWrapper>
  );
}


export default App;

//แยกหน้่า