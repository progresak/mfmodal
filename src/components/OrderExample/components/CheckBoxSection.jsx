import React from 'react';
import styled from 'styled-components';
import { CenteredContainer, Label, MediumInput } from '../../common';

const CheckBoxSection = ({ title, label, imgElement = null, groupName }) => (
    <label htmlFor={groupName}>
        <Content>
            <InputContainer>
                <MediumInput id={groupName} type="checkbox" />
            </InputContainer>
            {imgElement
                ? (
                    <ImgContainer>
                        {imgElement}
                    </ImgContainer>
                )
                : null}
            <VerticalBody>
                <strong>{title}</strong>
                <Label>
                    {label}
                </Label>
            </VerticalBody>
        </Content>
    </label>
);

export default CheckBoxSection;

const VerticalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  margin-right: 20px;  
`;

const ImgContainer = styled.div`
    margin-right: 20px;
`;

const Content = styled(CenteredContainer)`
  cursor: pointer;
`;
