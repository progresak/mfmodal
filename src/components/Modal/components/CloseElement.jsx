import React from 'react';
import styled from 'styled-components';
import { FOX_COLOR } from '../constants';

const CloseElement = ({ onClick }) => (
    <WrapperElement onClick={(e) => onClick(e)}>
        <i className="fa fa-times" />
    </WrapperElement>
);

const WrapperElement = styled.div`
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 22px;
  text-align: center;
  border-radius: 5px;
  background-color: ${FOX_COLOR};
  ${(props) => props.onClick && 'cursor: pointer;'}
  
  &:hover {
    background-color: #db3832;
  }
`;

export default CloseElement;
