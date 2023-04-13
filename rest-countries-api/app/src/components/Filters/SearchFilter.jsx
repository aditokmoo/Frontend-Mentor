import { useContext } from 'react'
// Context
import AppContext from '../../context/AppContext'
// React Icons
import { HiSearch } from 'react-icons/hi'

export const SearchFilter = () => {
    const { toggleTheme, searchCountries, searchRef } = useContext(AppContext);

    return (
        <div className="search-section">
            <form onSubmit={e => searchCountries(e)}>
                <div className="input-container">
                    <HiSearch className='icon' />
                    <input type="text" ref={searchRef} placeholder="Search for a country..." id="search_filter" className={toggleTheme ? 'dark-theme' : ''} />
                </div>
            </form>
        </div>
    )
}