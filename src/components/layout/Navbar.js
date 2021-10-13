import React from 'react';
import PropTypes from 'prop-types';
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.defaultProps = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

UserItem.PropTypes = {
    user: PropTypes.object.isRequired,
    icon: PropTypes.object.isRequired,
}

export default Navbar;
