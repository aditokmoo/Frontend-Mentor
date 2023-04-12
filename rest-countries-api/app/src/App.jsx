import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Context
import { AppContextProvider } from './context/AppContext';
// Components
import { Navbar } from './components/Navbar';
// Pages
import { Home } from './pages/Home';
// SCSS
import './scss/main.scss';

function App() {
  return (
   <Router>
    <AppContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </AppContextProvider>
   </Router>
  )
}

export default App
