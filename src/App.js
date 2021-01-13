import React, { useState } from 'react'
import logo from './logo.svg';
import Modal from './components/Modal/Modal';
import Order from './components/Order/Order';

import './App.css';
import { Button } from './components/common';

const App = () => {
  const [isActive, toggleModal] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="primary" onClick={() => toggleModal(!isActive)}>
          Open modal
        </Button>
        <Modal
            isActive={isActive}
            portalContainerId="modal"
            onClose={() => toggleModal(false)}
            modalTitle="Objednávka krok 1 ze 3"
        >
          <Order />
        </Modal>
      </header>
    </div>
  );
}

// const MyFox = () => {
//
//
//   return (
//       <OpenSansFontFamily>
//         <h1>MyfoxApp</h1>
//         <p>
//           This is text
//         </p>
//
//           <Order />
//         </Modal>
//       </OpenSansFontFamily>
//   );
// };

export default App;
