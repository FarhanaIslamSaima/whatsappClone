
import React,{useContext} from 'react';
import {withStyles,Dialog,makeStyles,Box,Typography,AppBar,Toolbar} from '@material-ui/core'
import pic from '../assets/code.png'
import { AccProvider } from '../../context/AccountContext';
import { GoogleLogin } from 'react-google-login';
import { addUser } from '../../Service/api';

const style={
    DialogPaper:{
        minWidth:'1000px',
        height:"800px",
    }
}
const useStyle=makeStyles({
  container:{
    display:'flex',
    padding:'40px',
    
    

  },
  leftContainer:{
     width:'80%'
  },
  rightContainer:{
    width:"40%"

  },
  desc:{
      display:'flex',
      flexDirection:'column',
      marginTop:'20px',
'&>*':{
  padding:'10px'
}
  },
  header:{
  height:'300px',
    backgroundColor:'#128C7E'
  }

})
const Login = ({classes}) => {
  const useClass=useStyle();
  const {account,setAccount}=useContext(AccProvider);
  const handleLogin=async(response)=>{

    setAccount(response.profileObj);
    addUser(response.profileObj);
    console.log(account);


  }
  const handleFail=async(response)=>{
    console.log(response)

  }
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
       <Box className={useClass.desc}>
        <Typography>1.Open Whatsapp One your phone</Typography>
        <Typography>2.Tap Menu : or settings and select whatsapp web</Typography>
        <Typography>3.point your phone on the screen to capture code</Typography>
        

       </Box>
      

       </Box>
       <Box className={useClass.rightContainer}>
        <Box className={useClass.displayImage}>
        <img src={pic} className={useClass.image}/>
        <GoogleLogin
    clientId="957266426303-107bdb8bcsvr3mvb0823aklpj5cim4vh.apps.googleusercontent.com"
    buttonText="Login"
    isSignedIn={true}
    onSuccess={handleLogin}
    onFailure={handleFail}
    cookiePolicy={'single_host_origin'}
  />

        </Box>
      
         </Box>

      </Box>

      </Dialog>
      
      
      </>
 
    );
};

export default withStyles(style)(Login);