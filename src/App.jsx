import React, { useState } from 'react';

import './App.css';
import { Button, Modal, OrderExample, SubSectionTitle } from './components';

const App = () => {
    const [isActive, toggleModal] = useState(true);

    return (
        <div className="App">
            <header className="App-header">
                <h1>MyFox modal component</h1>
                <Button variant="primary" onClick={() => toggleModal(!isActive)}>
                    Open modal
                </Button>
                <SubSectionTitle>Nedělal jsem hover tooltip na informaci, nechtěl jsem používat externí knihovny - máte vlastní implementaci?</SubSectionTitle>
                <SubSectionTitle>Selectboxy, checkboxy je třeba napojit do vaší aplikace, poté začnou fungovat</SubSectionTitle>
                <SubSectionTitle>Úpravy na email kratochvil.lukas9@gmail.com</SubSectionTitle>
                <SubSectionTitle>
                    Repository s kódem k nalezení na &nbsp;
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href="https://github.com/progresak/mfmodal" target="_blank">https://github.com/progresak/mfmodal</a>
                    {' '}
                    ve složce &nbsp;
                    <strong>src/components</strong>
                </SubSectionTitle>
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
