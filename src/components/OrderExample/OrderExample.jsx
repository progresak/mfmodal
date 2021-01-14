import React from 'react';
import styled from 'styled-components';
import { CheckBoxSection, SelectBox, RadioSelect, SmartPosImage } from './components';
import { Button, CenteredContainer, Divider, Label, Paragraph, SubSectionTitle } from '../common';

const OrderExample = () => (
    <>
        <NoTopMarginSubSectionTitle>Vyberte verzi</NoTopMarginSubSectionTitle>
        <div>
            <SelectBox {...{
                id: 1,
                title: 'Pokladna',
                content: 'Pokladna s kartotékou pro každého. Jednoduché, rychlé a intuitivní používání. Bez kalendáře.',
                label: 'Měsíční cena 199 Kč',
                headingColor: '#00aeeb',
            }}
            />
            <SelectBox {...{
                id: 2,
                title: 'Standard',
                content: 'Kompletní rezervační systém s kartotékou, SMS připomínkami, pokladnou, jednoduchým skladem a webovou stránku.',
                label: 'Měsíční cena 399 Kč',
                headingColor: '#dc6249',
                isSelected: true,
            }}
            />
            <SelectBox {...{
                id: 3,
                title: 'Premium',
                content: 'Kompletní rezervační systém se všemi funkcemi a neomezeným počtem zaměstnanců (kalendářů).',
                label: 'Měsíční cena 1099 Kč',
                headingColor: '#cd9c24',
            }}
            />
        </div>
        <Divider />
        <div>
            <CenteredContainer vertical>
                <InlineSubSectionTitle>Počet extra uživatelů</InlineSubSectionTitle>
                <NumberInput type="number" step={1} min={0} />
                <InfoIcon>i</InfoIcon>
            </CenteredContainer>
            <Label>měsíční cena 149 Kč</Label>
        </div>
        <Divider />
        <div>
            <SubSectionTitle>Frekvence placení</SubSectionTitle>
            <RadioSelect
                groupName="payOptions"
                options={[
                    { id: 1, label: 'Roční', selected: true },
                    { id: 2, label: 'Půlroční' },
                    { id: 3, label: 'Měsíční' },
                ]}
            />
        </div>
        <Divider />
        <div>
            <SubSectionTitle>Doplňky</SubSectionTitle>
            <CheckBoxSection
                groupName="addons"
                imgElement={<SmartPosImage />}
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
                <Paragraph>
                    <strong>1x myFox STANDARD</strong>
                    <br />
                    1 uživatel, roční platba, 1x SumUp, 1x poštovné a balné
                </Paragraph>
                <PayElement>K platbě: 4788 Kč</PayElement>
            </SummaryContainer>
            <Button variant="secondary">Předchozí krok</Button>
            <Button variant="primary">Další krok</Button>
        </div>
    </>
);

const NoTopMarginSubSectionTitle = styled(SubSectionTitle)`
    margin-top: 0;
`;

const InlineSubSectionTitle = styled(SubSectionTitle)`
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const InfoIcon = styled.span`
  margin-left: 10px;
  font-size: 16px;
  font-family: "Times New Roman",serif;
  background-color: #cdcdcd;
  padding: 6px 12px;
  color: white;
  font-style: italic;
  font-weight: bold;
  border-radius: 30px;
  cursor: help;
`;

const NumberInput = styled.input`
  text-align: right;
  border-radius: 5px;
  border: 1px solid #868889;
  width: 60px;
  font-size: 14px;
  padding: 8px 0;
`;

const SummaryContainer = styled.div`
  background-color: #d5d9dc;
  padding: 15px;
  margin: 10px 0;
`;

const PayElement = styled.span`
  display: block;
  margin-top: 15px;
  font-size: 16px;
  color: #676767;
  font-weight: bold;
`;

export default OrderExample;
