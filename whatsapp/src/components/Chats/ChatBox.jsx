import React,{useContext} from 'react';
import LeftSideBar from './Left/LeftSideBar';
import RightChatBox from './Right/RightChatBox';
import pic from './assets/pic.jpg'
import { PersonProfile } from '../../context/PersonContext';
import {Box,Dialog,withStyles,AppBar,Toolbar,makeStyles} from '@material-ui/core'
const style={
    dialogpaper:{
       minWidth:'1800px',
      borderRadius:'0px',
       height:'1000px'
    }
}
const useStyle=makeStyles({
    header:{
        height:'150px',
    backgroundColor:'#128C7E'
    },
    container:{
        display:'flex'

    }
    ,
    leftContainer:{
        width:'25%',
        height:'1000px',
         borderRight:'1px solid #eddfdf'
    },
    rightContainer:{
        width:'75%'

    }

})

const ChatBox = ({classes}) => {
    const {person}=useContext(PersonProfile);
    const useClass=useStyle();
    return (
        <>
           <AppBar >
        <Toolbar className={useClass.header}>
         

        

        </Toolbar>
      </AppBar>
     
        <Dialog open={true} classes={{paper:classes.dialogpaper}}>
          <Box className={useClass.container}>
            <Box className={useClass.leftContainer}>
                <LeftSideBar/>

            </Box>
            <Box className={useClass.rightContainer}>
               {person?<RightChatBox/>:<img src={pic}></img>} 

</Box>

          </Box>
        </Dialog>


        </>

    );
};

export default withStyles(style)(ChatBox);