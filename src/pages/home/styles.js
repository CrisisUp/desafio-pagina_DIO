import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
     margin-bottom: ${({theme}) => theme.spacing.large};
     font-size: ${({theme}) => theme.spacing.large2x};
    font-family: ${({theme}) => theme.fonts.family};
    color: ${({theme}) => theme.colors.text};
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
`

export const TitleHighlight = styled.span`
    color: ${({theme}) => theme.colors.highlight};
`

export const TextContent = styled.p`
    margin-bottom: ${({theme}) => theme.spacing.large};
    font-size: ${({theme}) => theme.spacing.medium2x};
    font-family: ${({theme}) => theme.fonts.family};
    color: ${({theme}) => theme.colors.text};
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    width: 420px;
`
    