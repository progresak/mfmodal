import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import Portal from '../Portal';
import { CloseElement } from './components';
import { Backdrop, ModalContainer, Header, MyFoxLogo, ModalBody, HeaderTitle, Content } from './style';

const Modal = ({
    isActive,
    portalContainerId,
    onClose,
    children,
    modalTitle = '',
    unmountOnClose = false,
    closeOnBackdropClick = false,
}) => {
    useEffect(() => {
        if (isActive) {
            ReactTooltip.rebuild();
        }
    }, [isActive]);

    if (!isActive && unmountOnClose) {
        return null;
    }

    return (
        <Portal containerId={portalContainerId}>
            <ModalContainer isActive={isActive}>
                <Backdrop onClick={closeOnBackdropClick ? () => onClose() : null} />
                <ModalBody>
                    <Header>
                        <MyFoxLogo>
                            my
                            <strong>Fox</strong>
                        </MyFoxLogo>
                        <HeaderTitle>{modalTitle}</HeaderTitle>
                        <CloseElement onClick={() => onClose()} />
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
