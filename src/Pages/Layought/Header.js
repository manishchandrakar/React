import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../../Style/header.module.css';
import Profile from './Profile';
import UserContext from './UserContext';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const loggedInUser = useContext(UserContext);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement the search logic here using the 'searchQuery' state
    alert('You are searching for: ' + searchQuery);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbarContainer}>
        <Link to="/" className={styles.logo}>
          My Logo
        </Link>

        {/* Hamburger Icon */}
        <div className={styles.hamburgerIcon} onClick={handleMenuToggle}>
          &#9776;
        </div>

        {/* Navigation Menu */}
        <ul className={`${styles.navMenu} ${showMenu ? styles.showMenu : ''}`}>
  <li className={styles.navItem}>
    <NavLink to="/" activeClassName={styles.activeLink} exact>
      Home
    </NavLink>
  </li>
  <li className={styles.navItem}>
    <NavLink to="/about" activeClassName={styles.activeLink}>
      About
    </NavLink>
  </li>
  <li className={styles.navItem}>
    <NavLink to="/contact" activeClassName={styles.activeLink}>
      Contact
    </NavLink>
  </li>
  <li className={styles.navItem}>
    <NavLink to="/services" activeClassName={styles.activeLink}>
      Services
    </NavLink>
  </li>
  {/* Add more navigation items as needed */}
  <li className={styles.navItem}>
    <Link to="/dashboard">Dashboard</Link>
  </li>
</ul>

        <div className={styles.searchForm}>
          <form onSubmit={handleSearchSubmit}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className={styles.searchButton} type="submit">
              Search
            </button>
            <Link to="/login" className={styles.authLink}>
              Login
            </Link>
          </form>
        </div>
      </nav>
    </header>
  ); // Remove the extra closing header tag

  // Conditionally render the profile outside the header element
  { loggedInUser && <Profile user={loggedInUser} /> }
}

export default Header;
