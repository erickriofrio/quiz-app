// Styles
import './Navbar.css';
// Hooks
import { useState } from 'react'
// Components
import Button       from '@mui/material/Button'
import AppBar       from '@mui/material/AppBar'
import Toolbar      from '@mui/material/Toolbar'
import Typography   from '@mui/material/Typography'

const Navbar = () => {

  return (
    <AppBar component='nav' position='fixed' color="primary">
      <Toolbar disableGutters variant="dense">
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            marginLeft: 12
          }}>
            Quiz APP
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar