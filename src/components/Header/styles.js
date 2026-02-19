import styled  from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

export const Wrapper = styled.div`
    background-color: ${({theme}) => theme.colors.background};
    width: 100%;
    height: 47px;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const BuscarInputContainer = styled.div`
    border-radius: ${({theme}) => theme.borderRadius.small};
    background: ${({theme}) => theme.colors.inputBg};
    margin: 0 ${({theme}) => theme.spacing.medium};
    height: ${({theme}) => theme.spacing.large2x};
    width: 275px;
    padding: 2px 5px;
    display:flex;
`

export const Menu = styled.a`
    margin-right: ${({theme}) => theme.spacing.medium};
    font-family: ${({theme}) => theme.fonts.family};
    font-size: ${({theme}) => theme.spacing.large};
    color: ${({theme}) => theme.colors.text};
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
`

export const MenuRight = styled.a`
    margin-right: ${({theme}) => theme.spacing.medium};
    line-height: ${({theme}) => theme.spacing.large};
    font-family: ${({theme}) => theme.fonts.family};
    font-size: ${({theme}) => theme.spacing.medium};
    color: ${({theme}) => theme.colors.textGray};
    text-decoration: none;
    font-style: normal;
    cursor: pointer
`

export const UserPicture = styled.img`
    border: 3px solid ${({theme}) => theme.colors.border};
    border-radius: ${({theme}) => theme.borderRadius.full};
    margin-right: ${({theme}) => theme.spacing.medium};
    width: ${({theme}) => theme.spacing.large2x};
    height: ${({theme}) => theme.spacing.large2x};
`

export const Input = styled.input`
    color: ${({theme}) => theme.colors.text};
    background: transparent;
    flex: 1;
    border: 0;
`