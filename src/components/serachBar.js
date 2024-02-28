import "./searchBar.css"
function SearchBar({ funcRegion, funcName}) {

    const handleSelectChange = (event) => {

        funcRegion(event.target.value)
    };
    const handleInputChange = (event) => {

        funcName(event.target.value)
    };

    return <div className="search">
        <div className='input-container'>
            <input onChange={handleInputChange} className="searchbar" placeholder="Search for a Country..."></input>
        </div>
        <select onChange={handleSelectChange} className="region-filter">

            <option>Filter by Region</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>


        </select>
    </div>

}

export default SearchBar