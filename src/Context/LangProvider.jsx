import React from 'react'
import { createContext, useState } from 'react';

const LangContext = createContext({});

export const LangProvider = ({children}) => {


    const [english, setenglish] = useState(true);
  return (
    <LangContext.Provider value={{english, setenglish}}>
        {children}
    </LangContext.Provider>
  )
}

export default LangContext
