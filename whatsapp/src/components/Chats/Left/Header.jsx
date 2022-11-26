import React,{useContext} from 'react';
import {AccProvider} from '../../../context/AccountContext'
import {Box,makeStyles} from '@material-ui/core'
import GroupIcon from '@material-ui/icons/Group'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat'
import MoreVert from './MoreVert';

const useStyle=makeStyles({
    container:{
    display:'flex',
    background:'lightgrey'
    },
    leftContainer:{
        width:'65%',
        marginLeft:'auto'

    },
    rightContainer:{
        width:'35%',
       
        display:'flex',
        padding:'15px',
        '&>*':{
            margin:'8px'
        }

    },
    image:{
        borderRadius:'50%',
        padding:'10px',
        width:'50px',
        height:'50px'
    }

})


const Header = () => {
    const {account}=useContext(AccProvider);
    console.log(account)
    
    const classes=useStyle();
    return (
        <Box className={classes.container}>
            <Box className={classes.leftContainer}>

           <img src={account.imageUrl} className={classes.image}/>

            </Box>
            <Box className={classes.rightContainer}>
                <GroupIcon/>
                <DonutLargeIcon/>
            <MoreVert/>


            </Box>

        </Box>
       
    );
};

export default Header;