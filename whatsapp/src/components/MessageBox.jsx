import React,{useContext} from 'react';
import { AccProvider } from '../context/AccountContext';
import Login from './Login/Login';
import ChatBox from './Chats/ChatBox';
import {Box} from '@material-ui/core'
const MessageBox = () => {
    const {account}=useContext(AccProvider);
    return (

<>
{ account ? <ChatBox/>:<Box><Login/></Box>}

</>

    );
};

export default MessageBox;