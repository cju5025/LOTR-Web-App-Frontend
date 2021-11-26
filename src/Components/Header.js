import '../CSS/Header.css';

import { Link } from 'react-router-dom';

function Header () {
    return (
    <div id="header">
        <Link to='/sign-in'>Sign In</Link>
        <Link to='/sign-up'>Sign Up</Link>
    </div>
    )
}

export default Header;