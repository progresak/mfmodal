import React from 'react';
import styled from 'styled-components';

const renderOptions = (nodes, groupName) => nodes.map(({ id, label }) => {
    const elementIdentifier = `${groupName}-${id}`;

    return (
        <LabelElement key={id} htmlFor={elementIdentifier}>
            <Input id={elementIdentifier} type="radio" name={groupName} />
            {label}
        </LabelElement>
    );
});

const RadioSelect = ({
    options,
    groupName,
}) => (
    <Container>
        {renderOptions(options, groupName)}
    </Container>
);

export default RadioSelect;

const Container = styled.div`
    
`;
const LabelElement = styled.label`
    margin-right: 20px;
    font-size: 14px;
    font-weight: bold;
  display: inline-block;
`;
const Input = styled.input`
    margin-right: 10px;
  transform: scale(1.3);
`;
