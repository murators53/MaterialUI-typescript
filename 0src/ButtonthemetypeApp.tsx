import { Button, styled, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';

function App() {

  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.info.main,
    color: '#888',
    margin: 5,
    "&:hover": {
      backgroundColor: 'lightblue'
    },
    "&:disabled": {
      backgroundColor: 'gray',
      color: 'white'
    }
  }))
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<SettingsIcon />} variant="contained" color="info" size="small">settings</Button>
      <Button startIcon={<AddIcon />} variant="contained" color="success" size="small">Add new post</Button>
      <Button variant="outlined" disabled>Outlined</Button>
      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
      </Typography>
      <BlueButton>My button</BlueButton>
      <BlueButton>another button</BlueButton>
    </div>
  );
}

export default App;
