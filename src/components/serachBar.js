import "./searchBar.css"

function SearchBar() {

    return <div className="search">
        <input className="searchbar"></input>
        <select className="region-filter">
            <option>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>


        </select>
    </div>

}

export default SearchBar