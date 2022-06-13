import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import BackButton from './components/BackButton/BackButton';

import Home from './components/Home/Home';

import Header from './components/Header/Header';

import PlacesMenu from './components/Pages/Places/Menu/PlacesMenu';

import FactionsMenu from './components/Pages/Factions/Menu/FactionsMenu';

 
import Story from './components/Pages/Story/Story';
import History from './components/Pages/History/History';


import PCAlan from './components/Pages/Players/PCAlan';
import PCThex from './components/Pages/Players/PCThex';
import PCCastor from './components/Pages/Players/PCCastor';
import PCVin from './components/Pages/Players/PCVin';

import NPCMenu from './components/Pages/People/menu/NPCMenu';

import Amulet from './components/Pages/Story/Amulet';





function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <div className='content'>
          <Routes>
           

            <Route path="/"element={<Home />} />
            <Route path="/places"element={<PlacesMenu />} />
    
            <Route path="/factions"element={<FactionsMenu />} />
        
            

            <Route path="/people"element={<NPCMenu />} />
        

            <Route path="/story"element={<Story />} />
            <Route path='/story/amulet'element={<Amulet />} />
            <Route path="/history"element={<History />} />

            <Route path="/Alan"element={<PCAlan />} />
            <Route path="/Castor"element={<PCCastor />} />
            <Route path="/Thex"element={<PCThex />} />
            <Route path="/Vin"element={<PCVin />} />

            
          </Routes>
        </div>

        <BackButton />
        
      </div>
    </Router>
  );
}

export default App;
