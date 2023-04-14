import { createContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [ toggleTheme, setToggleTheme ] = useState(false);
	const [ countries, setCountries ] = useState([]);
	const [ originalCountries, setOriginalCountries ] = useState([]);
    const [ countryData, setCountryData ] = useState([]);
	const [ originalSearchedCountries, setOriginalSearchedCountries ] = useState([]);

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
		// Original state
		setOriginalSearchedCountries(searchedData)
	}

	// Select Filter
	const selectCountries = (e) => {
		// Get Select and Input Value
		const selectValue = e.target.value
		const inputValue = searchRef.current.value;
		let data;

		if(inputValue === '') {
			data = originalCountries.filter(country => {
				if(selectValue === country.region) {
					return country
				}
			})
		} else {
			data = originalSearchedCountries.filter(country => {
				if(selectValue === country.region) {
					return country
				}
			})
		}

		// Display searched or default data
		const selectedData = e.target.value === '' ? originalCountries : data;

		// Update state with new data
		setCountries(selectedData)
	}

	return (
		<AppContext.Provider
			value={{
				countries,
                countryData,
				toggleTheme,
				searchRef,
				searchCountries,
				selectCountries,
				setToggleTheme,
                getCountryData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
