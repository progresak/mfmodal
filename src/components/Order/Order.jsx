import React from 'react';
import { SubSectionTitle } from '../common/typography';
import { CheckBoxSection, SelectBox } from './components';
import { paymentTypeOptions, subscriptionTypes } from './data';
import { Button, Divider } from '../common';
import RadioSelect from './components/RadioSelect/RadioSelect';
import SmartPosImage from './components/SmartPosImage';
import styled from 'styled-components';

const subscriptons = subscriptionTypes.map(({ id, ...props }) => <SelectBox {...props} key={id} id={id} />);

const Order = () => (
    <>
        <SubSectionTitle>Vyberte verzi</SubSectionTitle>
        <div>
            {subscriptons}
        </div>
        <Divider />
        <div>
            <SubSectionTitle>Počet extra uživatelů</SubSectionTitle>
        </div>
        <Divider />
        <div>
            <SubSectionTitle>Frekvence placení</SubSectionTitle>
            <RadioSelect options={paymentTypeOptions} groupName="payOptions" />
        </div>
        <Divider />
        <div>
            <SubSectionTitle>Doplňky</SubSectionTitle>
            <CheckBoxSection
                groupName="addons"
                ImgElement={<SmartPosImage />}
                title="Platební terminál SumUp"
                label="0 Kč bez DPH (zdarma přii objednání ročního plánu Standard/Premium)"
            />
        </div>
        <Divider />
        <div>
            <SubSectionTitle>Doprava</SubSectionTitle>
            <CheckBoxSection
                groupName="delivery"
                title="Poštovné a balné"
                label="99 Kč bez DPH"
            />
        </div>
        <Divider />
        <div>
            <SubSectionTitle>
                Vybráno:
            </SubSectionTitle>
            <SummaryContainer>
                <strong>1x myFox STANDARD</strong>
                <br />
                <span>1 uživatel, roční platba, 1x SumUp, 1x poštovné a balné</span>
                <PayElement>K platbě: 4788 Kč</PayElement>
            </SummaryContainer>
            <Button variant="secondary">Předchozí krok</Button>
            <Button variant="primary">Další krok</Button>
        </div>
    </>
);

const SummaryContainer = styled.div`
  background-color: #bfc2c4;
  padding: 15px;
  margin: 15px 0;
`;

const PayElement = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 16px;
  color: #676767;
  font-weight: bold;
`;
export default Order;
