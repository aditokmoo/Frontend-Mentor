import { useState } from 'react';
// Components
import { TabSection } from './components/TabSection';
import { FormSection } from './pages/FormSection';
// CSS
import './App.css';

function App() {
  const [ activeTab, setActiveTab ] = useState(0);

  const nextStep = () => {
      if(activeTab < 4) {
          setActiveTab(prevTab => prevTab + 1)
      }
  }

  const prevStep = (e) => {
    e.preventDefault()

    if(activeTab > 0) {
      setActiveTab(prevTab => prevTab - 1)
    }
  }

  return (
    <>
      <header>
        <div className='header'>
          <div className='tab'>
            <TabSection activeTab={activeTab}  />
          </div>
          <div className='form'>
            <FormSection activeTab={activeTab} setActiveTab={setActiveTab}  nextStep={nextStep} prevStep={prevStep} />
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
