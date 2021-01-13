import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Order from './components/Order/Order';

import './App.css';
import { Button } from './components/common';

const App = () => {
    const [isActive, toggleModal] = useState(true);

    return (
        <div className="App">
            <header className="App-header">
                <h1>MyFox modal component</h1>
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
};

export default App;
