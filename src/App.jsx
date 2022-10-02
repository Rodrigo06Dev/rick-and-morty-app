import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import getRandomNumber from '../src/utils/getRandomNumber.js'
import LocationInfo from "./components/LocationInfo";
import CardInfo from "./components/CardInfo";
import  FilterList  from "./components/FilterList";
import ErrorScreen from "./components/ErrorScreen";
import head from '../src/assets/head.png'


function App() {
 
  const [location, setLocation] = useState()
  const [inputSearch, setInputSearch] = useState();
  const [nameLocation, setNameLocation] = useState()
  const [errorBG, setErrorBG] = useState(false)

useEffect(() => {
  let id = getRandomNumber();
  if (inputSearch) {
    id = inputSearch;
  }

  const url = `https://rickandmortyapi.com/api/location/${id}`;

axios.get(url)
 .then(res => {
    setErrorBG(false)
    setLocation(res.data)
})
 .catch(err => setErrorBG(true))
}, [inputSearch])


const handleSubmit = e => {
  e.preventDefault();
  setInputSearch(e.target.locationId.value)
  e.target.locationId.value = ''
}

const handleChange = e => {
  if(e.target.value === ''){
    return setNameLocation();
  }
  let url = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
  axios.get(url)
  .then(res => setNameLocation(res.data.results))
  .catch(err => console.log(err))
}


  return (
    <div className="App">
      <header className="head__image">
        <img src={head} alt="head" />
      </header>
      <main className="container">
        <h1 className="container__title">Rick and Morty Wiki</h1>
        <form onSubmit={handleSubmit} className='form__search'>
          <input
            id="locationId"
            type="text"
            placeholder="Enter location between 1 and 126 or the name of your favorite location"
            onChange={handleChange}
            className='search__text'
          />
          <button className="search__btn">Search</button>
        </form>
        <FilterList 
          nameLocation = {nameLocation}
          setInputSearch = {setInputSearch}
          setNameLocation = {setNameLocation}
        />
        {
          errorBG ?
          <ErrorScreen /> 
          :
          <>
            <LocationInfo location = {location}/>
            <div className="list__residents">
              {
                location?.residents.map(url => (
                  <CardInfo
                    key ={url}
                    url = {url}
                  />
                ))
              }
            </div>
            
          </>
        }      
      </main>
      
    </div>
  );
}

export default App;
