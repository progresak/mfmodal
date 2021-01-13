import React from 'react';
import Portal from '../Portal';
import { CloseElement } from './components';
import { Backdrop, ModalContainer, Header, MyFoxLogo, ModalBody, HeaderTitle, Content } from './style';

const Modal = ({
    isActive,
    portalContainerId,
    onClose,
    modalTitle = '',
    children,
}) => {
    if (!isActive) {
        return null;
    }

    return (
        <Portal containerId={portalContainerId}>
            <ModalContainer>
                <Backdrop />
                <ModalBody>
                    <Header>
                        <MyFoxLogo>
                            my
                            <strong>Fox</strong>
                        </MyFoxLogo>
                        <HeaderTitle>{modalTitle}</HeaderTitle>
                        <CloseElement onClick={() => onClose()}>
                            x
                        </CloseElement>
                    </Header>
                    <Content>
                        {children}
                    </Content>
                </ModalBody>
            </ModalContainer>
        </Portal>
    );
};

export default Modal;
