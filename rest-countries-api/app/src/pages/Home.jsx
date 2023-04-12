import { useContext } from "react"
// Context
import AppContext from "../context/AppContext"
// Components
import { Filter } from "../components/Filter";

export const Home = () => {
    const { toggleTheme } = useContext(AppContext);

    return (
        <header className={toggleTheme ? "header dark-theme" : "header"}>
            <div className="container">
                <div className="header-section">
                    <Filter />
                </div>
            </div>
        </header>
    )
}