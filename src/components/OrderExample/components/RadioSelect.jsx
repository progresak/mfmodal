import React from 'react';
import styled from 'styled-components';
import { MediumInput } from '../../common';

const renderOptions = (nodes, groupName) => nodes.map(({ id, label }) => {
    const elementIdentifier = `${groupName}-${id}`;

    return (
        <LabelElement key={id} htmlFor={elementIdentifier}>
            <Input id={elementIdentifier} type="radio" name={groupName} />
            <span>{label}</span>
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
    display: flex;
    flex-direction: row;
`;

const LabelElement = styled.label`
    margin-right: 20px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
`;

const Input = styled(MediumInput)`
    margin-top: 0;
    margin-right: 10px;
`;
