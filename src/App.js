// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import EditPage from './routes/EditPage'
import LandingPage from './routes/LandingPage'
import NavBar from './components/NavBar'
import {useState, useEffect} from 'react'

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
        <Route path='/' element={<LandingPage allEntries={allEntries}/>}>

        </Route>
        <Route path='/edit' element={<EditPage />}>

        </Route>
      </Routes>
    </div>
  );
}

export {apiURL};
export default App;