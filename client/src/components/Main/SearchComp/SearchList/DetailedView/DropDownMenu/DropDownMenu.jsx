import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { UserContext } from '../../../../../../context/UserContext'
import axios from 'axios'

function DropDownMenu({ book }) {
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
    await axios.put(`http://localhost:3000/api/users/${username}`, {
      read: book[0].title
    })
  }

  const handleReading = async () => {
    await axios.put(`http://localhost:3000/api/users/${username}`, {
      reading: book[0].title
    })
  }

  const handleToRead = async () => {
    await axios.put(`http://localhost:3000/api/users/${username}`, {
      toread: book[0].title
    })
  }


  return (
    <div>
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
