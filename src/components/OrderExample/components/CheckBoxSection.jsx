import React from 'react';
import styled from 'styled-components';
import { CenteredContainer, Label } from '../../common';

const CheckBoxSection = ({ title, label, imgElement = null, groupName }) => (
    <label htmlFor={groupName}>
        <Content>
            <Checkbox id={groupName} type="checkbox" />
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

const Checkbox = styled.input`
  margin-right: 20px;
  transform: scale(1.5);
`;

const ImgContainer = styled.div`
    margin-right: 20px;
`;

const Content = styled(CenteredContainer)`
  cursor: pointer;
`;
