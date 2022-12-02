import { createContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react'

export const AppContext = createContext();

const AppContextProvider = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {

  const [currQuiz, setCurrQuiz] = useState()

  return (
    <AppContext.Provider value={{
      currQuiz,
      setCurrQuiz
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider