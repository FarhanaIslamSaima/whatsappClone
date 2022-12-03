import React,{useState,useContext} from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {Menu,MenuItem} from '@material-ui/core'
import { GoogleLogout } from 'react-google-login';
import { AccProvider } from '../../../context/AccountContext';

const MoreVert = () => {
  const {setAccount}=useContext(AccProvider);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      const logoutSuccess=()=>{
        console.log("You have been logged out successfully");
        setAccount('');
        console.clear();

      }
 
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
        <MenuItem onClick={handleClose}>

        <GoogleLogout
       clientId="957266426303-107bdb8bcsvr3mvb0823aklpj5cim4vh.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logoutSuccess}
    >
    </GoogleLogout>
        </MenuItem>
      </Menu>
     </>
       
    );
};

export default MoreVert;