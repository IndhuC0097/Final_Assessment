import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#9C27B0' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          EmployeeApp
        </Typography>
        <Box>
          <IconButton color="inherit">
            <Home />
          </IconButton>
          <IconButton color="inherit">
            <Add />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
