import React from 'react'
import { createContext, useState } from 'react';

const StatusContext = createContext({});

export const StatusProvider = ({children}) => {
    const [status, setstatus] = useState(false);

    return (
    <StatusContext.Provider value={{status, setstatus}}>
        {children}
    </StatusContext.Provider>
  )
}

export default StatusContext
