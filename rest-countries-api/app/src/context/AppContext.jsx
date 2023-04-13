import { createContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [ toggleTheme, setToggleTheme ] = useState(false);
	const [ countries, setCountries ] = useState([]);
	const [ originalCountries, setOriginalCountries ] = useState([]);
    const [ countryData, setCountryData ] = useState([]);

	const searchRef = useRef();

	useEffect(
		() => {
			if (toggleTheme) {
				document.body.classList.add('dark-theme');
			} else {
				document.body.classList.remove('dark-theme');
			}
		},
		[ toggleTheme]
	);

	useEffect(() => {
		fetchData();
	}, []);

	// Get Countries Data
	const fetchData = async () => {
		const res = await axios.get('https://restcountries.com/v3.1/all');
		const data = res.data;

		setCountries(data);
		setOriginalCountries(data);
	};

    // Get Single Country Data
    const getCountryData = async (nameId) => {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${nameId}`);
        const data = res.data;

        setCountryData(data);
    } 

	// Search Filter
	const searchCountries = (e) => {
		e.preventDefault();
		// Get Input Value
		let inputValue = searchRef.current.value;

		// Filter searched data
		const data = originalCountries.filter((country) => {
			if(country.name.common.toLowerCase().startsWith(inputValue.toLowerCase())) {
				return country
			}
		});

		// Display searched data or default data
		const searchedData = inputValue === '' ? originalCountries : data;

		// Update state with new data
		setCountries(searchedData)
	}

	return (
		<AppContext.Provider
			value={{
				countries,
                countryData,
				toggleTheme,
				searchRef,
				searchCountries,
				setToggleTheme,
                getCountryData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
