import React, {useState} from "react"

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input id="location" value={location} placeholder="Location" onChange={e => setLocation(e.target.value)} />
          <button>Submit</button>
        </label>
      </form>
    </div>
  )
}

export default SearchParams