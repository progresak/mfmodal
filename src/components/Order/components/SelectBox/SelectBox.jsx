import React from 'react';
import styled from 'styled-components';
import { BOX_BORDER_RADIUS } from './constnats';
import { Label, Paragraph } from '../../../common';

const SelectBox = ({
    id,
    headingColor,
    label,
    content,
    title,
    isSelected = false,
}) => (
    <Container isSelected={isSelected}>
        <Header color={headingColor}>
            {title}
        </Header>
        <Content>
            <BodyLabel htmlFor={`sel-${id}`}>
                <RadioInput type="radio" id={`sel-${id}`} />
                <BodyContent>
                    <Paragraph>
                        {content}
                    </Paragraph>
                    <Label>
                        {label}
                    </Label>
                </BodyContent>
            </BodyLabel>
        </Content>
    </Container>
);

export default SelectBox;

const Container = styled.div`
  max-width: 400px;
  border-radius: ${BOX_BORDER_RADIUS};
  margin-bottom: 10px;
  border: 1px solid #d8d9da;
  &:hover {
    box-shadow: 0 0 5px 0 #0075EB;
  }
  
  ${(props) => (props.isSelected ? 'border-color: #0075ec;' : null)};
  ${(props) => (props.isSelected ? 'box-shadow: 0px 0px 5px 0px #0075EB;' : null)};
`;

const BodyLabel = styled.label`
  cursor: pointer;
  display: flex;
  padding: 10px 20px 0 0;
`;

const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

const RadioInput = styled.input`
    margin-right: 10px;
    transform: scale(1.3);
`;

const Header = styled.div`
    color: white;
    padding: 10px 15px;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: ${BOX_BORDER_RADIUS} ${BOX_BORDER_RADIUS} 0 0;
    background-color: ${(props) => (props.color ? props.color : '#062238')};
`;

const Content = styled.div`
    background-color: #e9ebec;
    padding: 10px;
  border-radius: 0 0 ${BOX_BORDER_RADIUS} ${BOX_BORDER_RADIUS};
`;
