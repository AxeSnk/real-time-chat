import React from 'react';

import LongPulling from './LongPulling';
import EventSourcing from './EventSourcing';
import Websock from './Websock';
import './app.css';

const App = () => {
  return (
    <div>
      <Websock/>
    </div>
  )
};

export default App;