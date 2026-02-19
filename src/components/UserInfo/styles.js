import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom: 24px;
` 

export const UserPicture = styled.img`
    border-radius: ${({theme}) => theme.borderRadius.full};
    border: 3px solid ${({theme}) => theme.colors.border};
    margin-right: ${({theme}) => theme.spacing.medium};
    width: ${({theme}) => theme.spacing.large2x};
    height: ${({theme}) => theme.spacing.large2x};
`

export const NameText = styled.div`
    font-family: ${({theme}) => theme.fonts.family};
    font-size: ${({theme}) => theme.spacing.large};
    color: ${({theme}) => theme.colors.success};
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
` 

export const Progress = styled.div`
    background-color: ${({theme}) => theme.colors.progressBg};
    width: 180px;
    height: 10px;
    border-radius: 5px;
    position: relative;
    &::after {
        width: ${({$percentual}) => $percentual}%;
        background-color: ${({theme}) => theme.colors.success};
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 10px;
        border-radius: 5px;
    }
` 