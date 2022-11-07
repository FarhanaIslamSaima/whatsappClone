import React, { Children } from 'react';
import { createContext,useState } from 'react';
export const AccProvider=createContext(null);


const AccountContext = ({children}) => {
    const [account,setAccount]=useState();
    return (
        <AccProvider.Provider value={{
            account,
            setAccount
        }}>
            {children}

        </AccProvider.Provider>
    );
};

export default AccountContext;