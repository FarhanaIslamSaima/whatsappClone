import React,{useContext} from 'react';
import {Box,makeStyles,Typography} from '@material-ui/core'
import { PersonProfile } from '../../../context/PersonContext';
const useStyle=makeStyles({
    header:{
        display:'flex',
        background:'lightgrey'
    },
    image:{
      borderRadius:'50%',
      width:'50px',
      padding:'10px'
    },
    leftSide:{
      display:'flex',
      alignItems:'center'
    }

})


const Header = () => {
    const classes=useStyle();
    const {person} =useContext(PersonProfile);
    return (
      <Box className={classes.header}>
        <Box className={classes.leftSide}>
        <img src={person.imageUrl} className={classes.image}/>
        <Typography>{person.name}</Typography>
        </Box>
        <Box className={classes.rightSide}>

        </Box>

      </Box>
    );
};

export default Header;