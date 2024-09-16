import { Container } from 'react-bootstrap';
import Navigation from './Navigation.jsx';

export default (props) => {
    return (
        <Container fluid className="h-100 p-0">
          <Navigation />
          {props.children}
        </Container>
      );
}


