import { Container, Navbar, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, userAuth} from './slices/authSlice.js';
import { useSelector } from 'react-redux';


export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userAuth);
  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/login'); 
  };

  const toHomePage = () => {
    navigate('/');
  };
  
    return (   
      <Navbar className="shadow-sm navbar navbar-expand-lg navbar-light bg-white" bg="white" expand="lg">
      <Container>
     
        <Navbar.Brand onClick={toHomePage} role="button">Hexlet Chat 
        </Navbar.Brand>

        {Object.keys(user).length !== 0
          ? (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text id="headerUsername">
                {user.name}
              </Navbar.Text>
              <Button type="primary" onClick={handleLogout}>выйти</Button>
            </Navbar.Collapse>
          )
          : null}
        </Container>
    </Navbar>
    );
  };

