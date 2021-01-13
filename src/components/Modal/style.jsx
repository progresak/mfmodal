import styled from 'styled-components';
import { MODAL_BORDER_COLOR, MODAL_BORDER_RADIUS, HEADER_BACKGROUND_COLOR, FOX_COLOR, MODAL_CONTENT_BACKGROUND_COLOR } from './constants';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  font-family: "Open Sans",serif ;
  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;
`;

export const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.3;
  pointer-events: initial;
  transition: opacity 350ms cubic-bezier(.4, 0, .2, 1);
  ${(props) => props.onClick && 'cursor: pointer;'}
`;

export const ModalBody = styled.div`
  background-color: white;
  box-shadow: 0 15px 24px -6px rgba(0, 0, 0, .1), 0 -5px 24px -6px rgba(0, 0, 0, .15); // TODO
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
  width: 95%;
  max-width: 800px;
  border-radius: ${MODAL_BORDER_RADIUS};
  border: 1px solid ${MODAL_BORDER_COLOR};
  max-height: 98%;
  pointer-events: initial;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-property: opacity, transform;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
  padding: 20px;
  background-color: ${HEADER_BACKGROUND_COLOR};
  border-radius: ${MODAL_BORDER_RADIUS} ${MODAL_BORDER_RADIUS} 0 0;
  color: white;
`;

export const HeaderTitle = styled.h1`
    font-size: 18px;
 
`;

export const MyFoxLogo = styled.span`
    font-size: 32px;
    color: ${FOX_COLOR};
    font-weight: 100;
    margin-left: 10px;
`;

export const Content = styled.div`
  padding: 30px;
  background-color: ${MODAL_CONTENT_BACKGROUND_COLOR};
  border-radius: 0 0 ${MODAL_BORDER_RADIUS} ${MODAL_BORDER_RADIUS};
  overflow: auto;
`;
