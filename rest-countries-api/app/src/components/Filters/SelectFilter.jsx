import { useContext } from "react"
import AppContext from "../../context/AppContext"

export const SelectFilter = () => {
    const { toggleTheme, selectCountries } = useContext(AppContext);

    return (
        <div className="select-section">
            <select onChange={e => selectCountries(e)} className={toggleTheme ? 'dark-theme' : ''}>
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}