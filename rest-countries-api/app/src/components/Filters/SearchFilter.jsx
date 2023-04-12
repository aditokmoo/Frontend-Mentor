import { useContext } from 'react'
// Context
import AppContext from '../../context/AppContext'
// React Icons
import { HiSearch } from 'react-icons/hi'

export const SearchFilter = () => {
    const { toggleTheme } = useContext(AppContext);

    return (
        <div className="search-section">
            <form>
                <div className="input-container">
                    <HiSearch className='icon' />
                    <input type="text" placeholder="Search for a country..." id="search_filter" className={toggleTheme ? 'dark-theme' : ''} />
                </div>
            </form>
        </div>
    )
}