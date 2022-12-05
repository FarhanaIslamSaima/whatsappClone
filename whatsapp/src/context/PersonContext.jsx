import React,{useState} from 'react';
import { createContext } from 'react';
export const PersonProfile=createContext(null);




const PersonContext = ({children}) => {
    const [person,setPerson]=useState([]);
    return (
     <PersonProfile.Provider value={
        {
            person,
            setPerson
        }
     }>
        {children};

     </PersonProfile.Provider>
    );
};

export default PersonContext;