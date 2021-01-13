import React, { useState } from 'react';

import './App.css';
import { Button, Modal, OrderExample } from './components';

const App = () => {
    const [isActive, toggleModal] = useState(false);

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
                    <OrderExample />
                </Modal>
            </header>
        </div>
    );
};

export default App;
