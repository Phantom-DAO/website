import './App.css';
import About from './components/About/About';
import Auction from './components/Auction/Auction';
import Header from './components/Header/Header';
import ProtocolBasics from './components/ProtocolBasics/ProtocolBasics';
import TreasuryMakeup from './components/TreasuryMakeup/TreasuryMakeup';

import Partner from "./components/Partner/Partner";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Drawer } from '@material-ui/core';
import { useState } from 'react';
import PhantomDrawer from './components/Drawer/Drawer';
import Accelerator from './components/Accelerator/accelerator';

function App() {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <div>
      <Header onMenuClick={() => setShowDrawer(true)}/>
      <About />
      <TreasuryMakeup/>
      <ProtocolBasics/>
      <Accelerator/>
      <Partner />
      <Footer />
      <Drawer
      anchor={'left'}
      open={showDrawer}
      onClose={() => setShowDrawer(false)}
    >
      <PhantomDrawer/>
    </Drawer>
    </div>
  );
}

export default App;
