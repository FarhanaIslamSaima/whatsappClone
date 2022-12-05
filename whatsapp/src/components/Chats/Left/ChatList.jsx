import React,{useContext,useState} from 'react';
import { useEffect } from 'react';
import { AccProvider } from '../../../context/AccountContext';
import { PersonProfile } from '../../../context/PersonContext';
import { getAllUser } from '../../../Service/api';
import {Typography,Box,makeStyles} from '@material-ui/core'
import { addUserEach } from '../../../Service/api';
const useStyle=makeStyles({
    image:{
        borderRadius:'50%',
        width:'55px',
        padding:'20px 10px'
    },
    container:{
        display:'flex',
        alignItems:'center'
    
    },
    text:{
        padding:'20px 10px',
        fontWeight:'bold',
        cursor:'pointer'

    }
})

const ChatList = () => {
    const classes=useStyle();
    const {account}=useContext(AccProvider);
    const {person,setPerson}=useContext(PersonProfile);

    const [user,setUser]=useState();
  


    useEffect(()=>{
        const getUserData=async()=>{
            const data=await getAllUser();
      
            setUser(data.data);
            console.log(data);

        }
        getUserData();

    },[])
    const handleClick=async(item)=>{
        const data={
            senderId:account.googleId,
            recieverId:item.googleId
        }
       await addUserEach(data);
        setPerson(item);
    

    }
    console.log(person);

    return (
   user && user.map(item=>(
     item.googleId!=account.googleId &&
    <Box className={classes.container} onClick={(e)=>handleClick(item)}>
    
        <img src={item.imageUrl} className={classes.image}/>
        <Typography className={classes.text}>{item.name}</Typography>
  
    </Box>

   ))
    );
};

export default ChatList;