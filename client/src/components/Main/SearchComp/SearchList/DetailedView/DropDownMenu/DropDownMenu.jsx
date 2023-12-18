import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { UserContext } from '../../../../../../context/UserContext'
import axios from 'axios'

function DropDownMenu({ book }) {
  const [ showAlert, setShowAlert ] = React.useState(false)
  const { username } = React.useContext(UserContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRead = async () => {
    const res = await axios.put(`http://localhost:3000/api/users/${username}`, {
      read: book[0].title
    })
    console.log(res)
    setShowAlert(true)
    setAnchorEl(null)
  }

  const handleReading = async () => {
    await axios.put(`http://localhost:3000/api/users/${username}`, {
      reading: book[0].title
    })
    setShowAlert(true)
    setAnchorEl(null)
  }

  const handleToRead = async () => {
    await axios.put(`http://localhost:3000/api/users/${username}`, {
      toread: book[0].title
    })
    setShowAlert(true)
    setAnchorEl(null)
  }


  return (
    <div id="dropdown-container">
      <Button
        // sx={{
          //   color: 'red',
        // }}
        className="drop-down-btn"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        READING OPTIONS
      </Button>
      {showAlert ? <>
                      <Alert severity="success" onClose={() => {setShowAlert(false)}} sx={{
                                                                                          marginTop: 2,
                                                                                          width: 200
                                                                                        }}>
                        <AlertTitle>Success!</AlertTitle>
                        The book was added successfully.
                      </Alert>
                    </> : <></>}
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleRead}>READ</MenuItem>
        <MenuItem onClick={handleReading}>READING</MenuItem>
        <MenuItem onClick={handleToRead}>TO READ</MenuItem>
      </Menu>
    </div>
  );
}

export default DropDownMenu;
