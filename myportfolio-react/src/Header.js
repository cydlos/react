import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';

const Header = () => {
  return (
    <header>
      <div className="btn-container d-flex">
        <Box className="button-51 mt-5 p-4" style={{ fontSize: '22px' }}>Welcome to my Portfolio!</Box>
      </div>
    </header>
  );
}

export default Header;
