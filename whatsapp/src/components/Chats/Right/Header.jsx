import React,{useContext} from 'react';
import {Box,makeStyles} from '@material-ui/core'
import { PersonProfile } from '../../../context/PersonContext';
const useStyle=makeStyles({
    header:{
        display:'flex'
    }

})


const Header = () => {
    const classes=useStyle();
    const {person} =useContext(PersonProfile);
    return (
      <Box className={classes.header}>
        <Box className={classes.leftSide}>
        <img src={person.imageUrl}/>
        </Box>
        <Box className={classes.rightSide}>

        </Box>

      </Box>
    );
};

export default Header;