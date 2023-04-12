import { useContext } from "react"
import AppContext from "../context/AppContext"

export const Countries = () => {
    const { countries, toggleTheme } = useContext(AppContext)

    return (
        <div className="countries-section">
            {countries.map(({ flags, name, population, region, capital }, index) => (
                <div className={toggleTheme ? 'country dark-theme' : 'country'} key={index}>
                    <div className="image">
                        <img src={flags.png} alt={flags.alt} />
                    </div>
                    <div className="content">
                        <h3>{name.common}</h3>
                        <ul>
                            <li>Population: <span>{population}</span></li>
                            <li>Region: <span>{region}</span></li>
                            <li>Capital: <span>{capital}</span></li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}