import React, { useEffect, useState } from 'react';
import './Kiosk.css';
import './Fonts.css';
import { Kiosk } from './Models/Kiosk';
import MainMenu from './Components/MainMenu';
import { KioskState } from './Models/KioskState';
import EnterHighScore from './Components/EnterHighScore';

const kioskSingleton: Kiosk = new Kiosk();
kioskSingleton.initialize().catch(error => alert(error));

function App() {
  const[state, setState] = useState(kioskSingleton.state);

  useEffect(() => {
    kioskSingleton.onNavigated = () => {
      setState(kioskSingleton.state);
    };
  }, []);

  switch(state) {
      case KioskState.MainMenu:
        return (<MainMenu kiosk={kioskSingleton} />)
      case KioskState.EnterHighScore:
        return (<EnterHighScore kiosk={kioskSingleton} />)
    }

  return (<div />)
}

export default App;