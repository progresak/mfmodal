import styled from 'styled-components';

export const Divider = styled.div`
    border-bottom: 1px solid #dae2e6;
    padding-top: 20px;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    ${({ variant }) => variant === 'primary' && 'background-color: #2ca63d;'}
    ${({ variant }) => variant === 'secondary' && 'background-color: #0e52a4;'}
    border: none;
    border-radius: 7px;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    margin-right: 15px;
    margin-top: 15px;
    min-width: 200px;
    font-size: 16px;
    font-weight: bold;
    padding: 15px 30px;
    text-decoration: none;
  }

  &:hover {
    ${({ variant }) => variant === 'primary' && 'background-color: #3dc420;'}
    ${({ variant }) => variant === 'secondary' && 'background-color: #1d60ad;'}
  }
`;

export const CenteredContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
  
    ${({ horizontal }) => horizontal && 'flex-direction: column;'}
`;

export const MediumInput = styled.input`
    height: 16px;
    width: 16px;
`;
