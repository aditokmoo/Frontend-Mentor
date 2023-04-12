import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [ toggleTheme, setToggleTheme ] = useState(false);

    useEffect(() => {
        if(toggleTheme) {
            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
        }
      }, [toggleTheme]);

    return <AppContext.Provider value={{
        toggleTheme,
        setToggleTheme
    }}>
        {children}
    </AppContext.Provider>
}

export default AppContext