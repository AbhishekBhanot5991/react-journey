import React, { useState } from "react"; //first step is to import React, useState we need to add when we are defining useState variable
 // also we need to import userContext
import UserContext from "./userContext";
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    ) //4th step
} //2nd step add {children} in parameter 

export default UserContextProvider // 3rd step