import React, { useState, useEffect} from 'react';
import Physician from './Physician';
import * as api from './API';

const App = () => {

  const [physicians, setPhysicians] = useState([]);

  useEffect(() => {
    api.getPhysicians().then(data => setPhysicians(data))
  }, []) 

  return (
    <div className="App">
      <Physician physicians={physicians} />
    </div>
  );
}

export default App;
