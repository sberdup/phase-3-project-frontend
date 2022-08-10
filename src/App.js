// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import EditPage from './routes/EditPage'
import LandingPage from './routes/LandingPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <h1>My app</h1>
      <Routes>
        <NavBar />
        <Route path='/' element={<LandingPage />} />
        <Route path='edit' element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
