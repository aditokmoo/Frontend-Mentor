import { useContext } from "react"
import AppContext from "../../context/AppContext"

export const SelectFilter = () => {
    const { toggleTheme } = useContext(AppContext);

    return (
        <div className="select-section">
            <select className={toggleTheme ? 'dark-theme' : ''}>
                <option value="">Filter by Region</option>
            </select>
        </div>
    )
}