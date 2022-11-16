import React,{useContext} from 'react';
import { AccProvider } from '../context/AccountContext';
import Login from './Login/Login';
import ChatBox from './Chats/ChatBox';

const MessageBox = () => {
    const {account}=useContext(AccProvider);
    return (

<>
{ account ? <ChatBox/>:<Login/>}

</>

    );
};

export default MessageBox;