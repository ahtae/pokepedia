import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import pokeBall from '../../assets/images/logo.png';
import './Styles.scss';

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <AppBar>
        <Toolbar className="navbarContainer__navbar">
          <img
            src={pokeBall}
            alt="Poke ball"
            className="navbarContainer__navbar__logo"
          />
          <Typography variant="h5">pokepedia</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
