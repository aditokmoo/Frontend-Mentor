import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Context
import { AppContextProvider } from './context/AppContext';
// Components
import { Navbar } from './components/Navbar';
// Pages
import { Home } from './pages/Home';
import { FlagPage } from './pages/FlagPage';
// SCSS
import './scss/main.scss';

function App() {
  return (
   <Router>
    <AppContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<FlagPage />} />
      </Routes>
    </AppContextProvider>
   </Router>
  )
}

export default App
