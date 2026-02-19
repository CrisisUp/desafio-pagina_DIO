import styled, {css}  from 'styled-components';

export const ButtonContainer = styled.button`
    border-radius: ${({theme}) => theme.borderRadius.full};
    padding: 2px ${({theme}) => theme.spacing.medium};
    color: #${({theme}) => theme.colors.text};
    background: #565656;
    position: relative;
    min-width: 120px;
    cursor: pointer;
    width: 100%;

    &:hover {
        opacity: 0.8;
    }
    
    ${({$variant}) => $variant !== "primary" && css`
        background: ${({theme}) => theme.colors.primary};
        height: ${({theme}) => theme.spacing.large2x};
        min-width: 167px;
        
        &::after {
            border: 1px solid ${({theme}) => theme.colors.primary};
            content: '';
            position: absolute;
            top: -5px;
            left: -6px;
            width: calc(100% + ${({theme}) => theme.spacing.medium});
            height: calc(100% + ${({theme}) => theme.spacing.medium});
            border-radius: ${({theme}) => theme.borderRadius.full};
        }
    `}
`