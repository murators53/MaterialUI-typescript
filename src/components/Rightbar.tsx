import { Box, Avatar, AvatarGroup,ImageList,ImageListItem } from '@mui/material'
import Typography from '@mui/material/Typography'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{
      display: {
        xs: 'none', sm: 'block'
      }
    }}>

      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={8}>
          <Avatar alt="Baki Akturk" src="https://avatars.githubusercontent.com/u/108583086?s=48&v=4" />
          <Avatar alt="Mehmet Can Seyhan" src="https://avatars.githubusercontent.com/u/19333878?s=64&v=4" />
          <Avatar alt="Furkan Evin" src="https://avatars.githubusercontent.com/u/109925130?s=64&v=4" />
          <Avatar alt="Agnes Walker" src="https://avatars.githubusercontent.com/u/3948692?v=4" />
          <Avatar alt="Trevor Henderson" src="https://avatars.githubusercontent.com/u/62759730?s=64&v=4" />
          <Avatar alt="Trevor Henderson" src="https://avatars.githubusercontent.com/u/62759730?s=64&v=4" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} gap={5} mt={2} mb={2}>Latest Post</Typography>
        <ImageList cols={3} rowHeight={100}>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format&dpr=2" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format&dpr=2" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=121&h=121&fit=crop&auto=format&dpr=2" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} gap={5} mt={2} mb={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/108583086?s=48&v=4" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://avatars.githubusercontent.com/u/19333878?s=64&v=4" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://avatars.githubusercontent.com/u/3948692?v=4" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar