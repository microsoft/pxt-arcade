import React from 'react';
import './App.css';

import GamePlayer from './components/GamePlayer';

const App: React.FC = () => {
    return (
        <div className="App">
            <GamePlayer />
        </div>
    );
}

export default App;
