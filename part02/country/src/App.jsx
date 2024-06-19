import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [country, setCountry] = useState([]);
  const [filterCountry, setFilterCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountry(response.data);
    });
  }, []);

  const handleFilterCountry = (event) => {
    setFilterCountry(event.target.value);
    setSelectedCountry(null);
  };

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
  };

  const filterCountries = country.filter((country) =>
    country.name.common.toLowerCase().includes(filterCountry.toLowerCase())
  );

  return (
    <div>
      <div>
        find countries
        <input value={filterCountry} onChange={handleFilterCountry} />
      </div>

      {selectedCountry ? (
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Population: {selectedCountry.population}</p>
          <ul>
            {Object.values(selectedCountry.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
          <img
            src={selectedCountry.flags.png}
            alt={selectedCountry.name.common}
          />
        </div>
      ) : filterCountries.length <= 10 ? (
        filterCountries.map((country) => (
          <div key={country.cca2}>
            <div>{country.name.common}</div>
            <button onClick={() => handleShowDetails(country)}>
              Show Details
            </button>
          </div>
        ))
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </div>
  );
}

export default App;
