// Footer.js
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id="footer">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/yellow">yellow</Link>
    </div>
  );
}

export default Footer;
