import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h3`
    font-family: ${({theme}) => theme.fonts.family};
    font-size: ${({theme}) => theme.spacing.large};
    color: ${({theme}) => theme.colors.text};
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    margin-bottom: 24px;
`

export const TitleHighlight = styled.h3`
    color: ${({theme}) => theme.colors.textHighlight};
    font-family: ${({theme}) => theme.fonts.family};
    font-size: ${({theme}) => theme.spacing.large};
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    margin-bottom: 24px;
`

export const Column = styled.div`
    flex:${({$flex}) => $flex};
    padding-right: 24px;

`