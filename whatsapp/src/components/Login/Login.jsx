
import React from 'react';
import {withStyles,Dialog,makeStyles,Box,Typography,AppBar,Toolbar} from '@material-ui/core'
const style={
    DialogPaper:{
        minWidth:'1000px',
        height:"800px",
    }
}
const useStyle=makeStyles({
  container:{
    display:'flex'
    

  },
  leftContainer:{
     width:'60%'
  },
  rightContainer:{
    width:"40%"

  },
  header:{
  height:'300px',
    backgroundColor:'green'
  }

})
const Login = ({classes}) => {
  const useClass=useStyle();
    return (
      <>
            <AppBar >
        <Toolbar className={useClass.header}>
         

        

        </Toolbar>
      </AppBar>
 
           <Dialog open={true} classes={{paper:classes.DialogPaper}}>
      <Box className={useClass.container}>
       <Box className={useClass.leftContainer}>
        <Typography variant={'h4'}>To use Whatsapp On your Computer</Typography>

       </Box>
       <Box className={useClass.rightContainer}>

         </Box>

      </Box>

      </Dialog>
      
      
      </>
 
    );
};

export default withStyles(style)(Login);