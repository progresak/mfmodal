import React from 'react';
import styled from 'styled-components';
import { Label } from '../../../common';

const CheckBoxSection = ({ title, label, ImgElement = null, groupName }) => (
    <label htmlFor={groupName}>
        <Content>
            <Checkbox id={groupName} type="checkbox" />
            {ImgElement
                ? (
                    <ImgContainer>
                        {ImgElement}
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

const Content = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
