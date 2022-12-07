import React from 'react';
import {Box,makeStyles} from '@material-ui/core'
import pic from './assets/bg.jpeg'
const useStyle=makeStyles({
    container:{
        background:`url(${pic})`,
        height:'720px'

    }
})

const Body = () => {
    const classes=useStyle();
    return (
     <Box className={classes.container}>

     </Box>
    );
};

export default Body;