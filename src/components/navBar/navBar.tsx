import * as React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import logoSVG from '../../assets/images/logo.svg';
import ButtonInvite from '../UI/buttonInvite';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" className="fixed">
        <Toolbar className="flex justify-between lg:justify-around">
          <img src={logoSVG} alt="Logo" />
          <IconButton
            id="basic-button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className="lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <ButtonInvite title="Request Invite" hideOnLg />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ mt: '40px', marginLeft: '-5%' }}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
            slotProps={{
              paper: {
                style: {
                  width: '80%',
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: '20px'
                }
              }
            }}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Careers</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
