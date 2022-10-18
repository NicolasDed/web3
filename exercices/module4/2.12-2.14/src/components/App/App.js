import axios from 'axios'
import Country from '../Display/country'
import { useEffect, useState } from "react"
import Countrydetail from '../Display/countrydetail'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [nbCountries, setNbCountries] = useState(0)

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const filterCountries = (input) => {
    let count = countries.filter(country => country.name.common.toLowerCase().includes(input)).length
    setNbCountries(count)
    setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(input)))
  }

  const handleInputChange = (e) => {
    filterCountries(e.target.value.toLowerCase())
  }

  return (
    <div>
      <form>
        find countries
        <input
          onChange={handleInputChange}
        />
      </form>
      <div>
        {
          nbCountries === 1 &&
          filteredCountries.map(filteredCountry => 
            <Countrydetail 
              key={filteredCountry.name.common} 
              name={filteredCountry.name.common}
              capital={filteredCountry.capital}
              area={filteredCountry.area}
              languages={filteredCountry.languages}
              flag={filteredCountry.flags.png}>
            </Countrydetail>
          )
        }
        {
          (nbCountries < 10 && nbCountries > 1) &&
          filteredCountries.map(filteredCountry => 
            <Country key={filteredCountry.name.common} country={filteredCountry}></Country>
          )
        }
        {
          (nbCountries > 10 || nbCountries < 1) &&
          <div>Too many or 0 matches, specify another filter</div>
        }
      </div>
    </div>
  )
  
}

export default App;
