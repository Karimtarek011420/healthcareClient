import React from 'react'
import { createContext, useState } from 'react';

const PageContext = createContext({});

export const PageProvider = ({children}) => {

    const [Page, SetPage] = useState({});
  return (
    <PageContext.Provider value={{Page, SetPage}}>
        {children}
    </PageContext.Provider>
  )
}

export default PageContext
