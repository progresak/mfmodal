import styled, { css } from 'styled-components';

const openSansFontFamily = css`
  font-family: "Open Sans",serif ;
`;

export const SubSectionTitle = styled.h2`
  ${openSansFontFamily};
  
  margin: 15px 0;
  font-size: 18px;
  font-weight: lighter;
  color: #000;
`;

export const Label = styled.span`
  ${openSansFontFamily};
  
  padding: 10px 0;
  font-size: 14px;
  color: #2ca63d;
`;

export const Paragraph = styled.p`
  ${openSansFontFamily};
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  color: #000;
`;
