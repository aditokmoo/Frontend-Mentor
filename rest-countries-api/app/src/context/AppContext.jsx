import { createContext, useEffect, useState } from "react";
import  axios  from 'axios';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [ toggleTheme, setToggleTheme ] = useState(false);
    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        if(toggleTheme) {
            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
        }
      }, [toggleTheme]);

      useEffect(() => {
        fetchData();
      }, [])

      // Get Countries Data
      const fetchData = async () => {
            const res = await axios.get('https://restcountries.com/v3.1/all');
            const data = res.data;

            setCountries(data)
        }
        
    return <AppContext.Provider value={{
        countries,
        toggleTheme,
        setToggleTheme
    }}>
        {children}
    </AppContext.Provider>
}

export default AppContext