import React, { useEffect, useState } from 'react';
import './Kiosk.css';
import './Fonts.css';
import { Kiosk } from './Models/Kiosk';
import MainMenu from './Components/MainMenu';
import { KioskState } from './Models/KioskState';
import EnterHighScore from './Components/EnterHighScore';
import AddingGame from './Components/AddingGame';

const kioskSingleton: Kiosk = new Kiosk();
kioskSingleton.initialize().catch(error => alert(error));

function App() {
  const[state, setState] = useState(kioskSingleton.state);

  useEffect(() => {
    window.onhashchange = onHashChange;
    onHashChange();

    kioskSingleton.onNavigated = () => {
      setState(kioskSingleton.state);
    };
  }, []);

  switch(state) {
      case KioskState.MainMenu:
        return (<MainMenu kiosk={kioskSingleton} />)
      case KioskState.EnterHighScore:
        return (<EnterHighScore kiosk={kioskSingleton} />)
      case KioskState.AddingGame:
        return (<AddingGame kiosk={kioskSingleton} />)
    }

  return (<div />)
}

function onHashChange() {
  const hash = window.location.hash;
  const match = /pub:((?:\d{5}-\d{5}-\d{5}-\d{5})|(?:_[a-zA-Z0-9]+))/.exec(hash);
  if (match) {
    kioskSingleton.launchGame(match[1], true);
  }
}

export default App;