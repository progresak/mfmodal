import React from 'react';
import styled from 'styled-components';
import { Label, MediumInput, Paragraph } from '../../common';

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
                <InputContainer>
                    <MediumInput type="radio" id={`sel-${id}`} />
                </InputContainer>
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

const BOX_BORDER_RADIUS = '5px';

const Container = styled.div`
  max-width: 430px;
  border-radius: 6px;
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

const InputContainer = styled.div`
    text-align: center;
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
