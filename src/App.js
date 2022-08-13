// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import EditPage from './routes/EditPage'
import LandingPage from './routes/LandingPage'
import NavBar from './components/NavBar'
import {useState, useEffect} from 'react'
import LocationFinder from './routes/LocationFinder';

const localUrl = 'http://localhost:9292/'
let apiURL = localUrl

function App() {
  const [allEntries, setAllEntries] = useState([])
  
  useEffect(() => {
    async function getFetch() {
      let resp = await fetch(apiURL+'entries')
      resp = await resp.json()
      setAllEntries(resp)
    }
    getFetch()
  }, [])

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<LandingPage allEntries={allEntries}/>}/>
        <Route path='/edit' element={<EditPage allEntries={allEntries} setAllEntries={setAllEntries}/>}/>
        <Route path='/locator' element={<LocationFinder allEntries={allEntries}/>}/>
      </Routes>
    </div>
  );
}

export {apiURL};
export default App;