import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [ toggleTheme, setToggleTheme ] = useState(false);
	const [ countries, setCountries ] = useState([]);
    const [ countryData, setCountryData ] = useState([]);

	useEffect(
		() => {
			if (toggleTheme) {
				document.body.classList.add('dark-theme');
			} else {
				document.body.classList.remove('dark-theme');
			}
		},
		[ toggleTheme ]
	);

	useEffect(() => {
		fetchData();
	}, []);

	// Get Countries Data
	const fetchData = async () => {
		const res = await axios.get('https://restcountries.com/v3.1/all');
		const data = res.data;

		setCountries(data);
	};

    // Get Single Country Data
    const getCountryData = async (nameId) => {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${nameId}`);
        const data = res.data;

        setCountryData(data);
    } 

	return (
		<AppContext.Provider
			value={{
				countries,
                countryData,
				toggleTheme,
				setToggleTheme,
                getCountryData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
