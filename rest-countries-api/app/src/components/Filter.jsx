// Components
import { SearchFilter } from "./Filters/SearchFilter"
import { SelectFilter } from "./Filters/SelectFilter"

export const Filter = () => {
    return (
        <div className="filter-section">
            <SearchFilter />
            <SelectFilter />
        </div>
    )
}