import { useState, useContext } from 'react';
import AuthContext from '../../../../../../context/AuthProvider';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import axios from 'axios'

function DropDownMenu({ book }) {
  const [ showAlert, setShowAlert ] = useState(false)
  const { auth } = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRead = async () => {
    const res = await axios.put(`http://localhost:3000/api/users/${auth.username}`, {
      read: book[0].title
    })
    console.log(res)
    setShowAlert(true)
    setAnchorEl(null)
  }

  const handleReading = async () => {
    await axios.put(`http://localhost:3000/api/users/${auth.username}`, {
      reading: book[0].title
    })
    setShowAlert(true)
    setAnchorEl(null)
  }

  const handleToRead = async () => {
    await axios.put(`http://localhost:3000/api/users/${auth.username}`, {
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
          { auth ? <>
                          <Alert severity="success" onClose={() => {setShowAlert(false)}} sx={{ marginTop: 2, width: 200}}>
                            <AlertTitle>Success!</AlertTitle>
                            The book was added successfully.
                        </Alert>
                      </> : 
                      <>
                      <Alert severity="info" onClose={() => {setShowAlert(false)}} sx={{ marginTop: 2, width: 200}}>
                      <AlertTitle>Info</AlertTitle>
                            Please log in to add books to your lists.
                      </Alert>
                      </>}
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
