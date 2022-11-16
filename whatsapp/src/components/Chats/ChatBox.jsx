import React from 'react';
import LeftSideBar from './Left/LeftSideBar';
import RightChatBox from './Right/RightChatBox';
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
        width:'25%'

    },
    rightContainer:{
        width:'75%'

    }

})

const ChatBox = ({classes}) => {
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
                <RightChatBox/>

</Box>

          </Box>
        </Dialog>


        </>

    );
};

export default withStyles(style)(ChatBox);