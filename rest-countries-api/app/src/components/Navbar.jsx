import { useContext } from 'react';
// Context
import AppContext from '../context/AppContext';
// React Icons
import { BsMoon, BsFillMoonFill } from 'react-icons/bs';

export const Navbar = () => {
    const { toggleTheme, setToggleTheme } = useContext(AppContext)

    return (
        <nav className={toggleTheme ? 'nav dark-theme' : 'nav'}>
            <div className="container">
                <div className="nav-section">
                    <h1>Where in the world?</h1>
                    <p onClick={() => setToggleTheme(prevState => !prevState)}>
                        {toggleTheme ? <BsFillMoonFill /> : <BsMoon />}
                        Dark Mode
                    </p>
                </div>
            </div>
        </nav>
    )
}