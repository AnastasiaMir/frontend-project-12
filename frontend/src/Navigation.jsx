import { Container, Navbar, Button } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes.js';

export default () => {

  
    return (
      
      <Navbar className="shadow-sm navbar navbar-expand-lg navbar-light bg-white" bg="white" expand="lg">
      <Container>
      <BrowserRouter>
        <Navbar.Brand href={routes.mainPage()}>Hexlet Chat 
        </Navbar.Brand>
        </BrowserRouter>
        <Button variant="secondary bg-blue">Зарегистрироваться</Button>
        </Container>
    </Navbar>
    );
  };

