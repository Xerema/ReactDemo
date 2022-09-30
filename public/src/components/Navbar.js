import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    <i className='fab fa-typo3'/>Raipia
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                            Experience
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
                            About me
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    </>
  );
}

export default Navbar;