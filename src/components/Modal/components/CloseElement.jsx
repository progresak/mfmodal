import React from 'react';
import styled from 'styled-components';
import { FOX_COLOR } from '../constants';

const CloseElement = ({ onClick }) => (
    <WrapperElement onClick={(e) => onClick(e)}>
        <Background>
            <Cross />
        </Background>
    </WrapperElement>
);

const Cross = styled.div`
  height: 20px;
  width: 3px;
  background-color: #fff;
  transform: rotate(90deg);
  Z-index: 2;
`;

const Background = styled.div`
  height: 20px;
  width: 3px;
  margin-left: 12px;
  background-color: #fff;
  transform: rotate(45deg);
  z-index: 1;
`;

const WrapperElement = styled.div`
  width: 27px;
  height: 26px;
  padding-top: 4px;
  border-radius: 5px;
  background-color: ${FOX_COLOR};
  ${(props) => props.onClick && 'cursor: pointer;'}
`;

export default CloseElement;
