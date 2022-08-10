// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import EditPage from './routes/EditPage'
import LandingPage from './routes/LandingPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
        <h1>My app</h1>
      <Routes>
        <Route path='/' element={<LandingPage />}>

        </Route>
        <Route path='/edit' element={<EditPage />}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
