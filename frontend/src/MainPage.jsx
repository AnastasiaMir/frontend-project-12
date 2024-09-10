import { Link } from 'react-router-dom';

export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/*">Page One</Link>
      </li>
      <li>
        <Link to="/login">Page Two</Link>
      </li>
    </ul>
  </nav>
);