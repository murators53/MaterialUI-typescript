import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Mail, Notifications, Pets } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display:'flex'
  },
  
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display:'none'
  }
  
}))

const Navbar = () => {
  const [open, setOpen]=useState(false)
  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'darkblue' }}>
      <StyledToolbar>
        <Typography variant='h6' sx={{
          display: {
            xs: "none", sm: "block"
          }
        }}> React Ors
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search > <InputBase placeholder="..' "/></Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <Mail color="inherit" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications color="inherit" />
          </Badge>
          <Avatar sx={{ width: '30px', height: '30px' }} alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/64844876?v=4" 
          onClick={e=> setOpen(true)}/>
        </Icons>
        <UserBox>
          <Avatar sx={{ width: '30px', height: '30px' }} onClick={e=> setOpen(true)} alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/64844876?v=4" />
          <Typography variant='body1'>Murat</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar