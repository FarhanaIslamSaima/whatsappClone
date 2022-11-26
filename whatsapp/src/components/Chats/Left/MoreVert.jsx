import React,{useState} from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {Menu,MenuItem} from '@material-ui/core'

const MoreVert = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    
    return (
        <>
        <MoreVertIcon onClick={handleClick} style={{cursor:'pointer'}}/>

        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}

        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
     </>
       
    );
};

export default MoreVert;