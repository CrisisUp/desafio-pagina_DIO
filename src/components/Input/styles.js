import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;
    display: flex;
    align-items: center;
    margin-bottom: ${({theme}) => theme.spacing.large};
`

export const IconContainer = styled.div`
    margin-right: ${({theme}) => theme.spacing.medium};
    color: #8647AD; 
`

export const InputText = styled.input`
    height: ${({theme}) => theme.spacing.large2x};
    font-family: ${({theme}) => theme.fonts.family};
    color: ${({theme}) => theme.colors.text};
    background: transparent;
    flex: 1;
    border: 0;
`

export const ErrorText = styled.p`
    font-size: ${({theme}) => theme.spacing.medium};
    font-family: ${({theme}) => theme.fonts.family};
    color: ${({theme}) => theme.colors.error};
    margin-top: -15px; 
    margin-bottom: 10px;
`