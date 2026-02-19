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

export const Wrapper = styled.div`
    max-width: 350px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    margin-top: ${({theme}) => theme.spacing.large};
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    display: flex;
`

export const Title = styled.h2`
    margin-bottom: ${({theme}) => theme.spacing.large};
    font-size: ${({theme}) => theme.spacing.large2x};
    font-family: ${({theme}) => theme.fonts.family};
    color: ${({theme}) => theme.colors.text};
    font-style: normal;
    font-weight: 700;
    width: 320px;
    line-height: 44px;
`

export const TitleLogin = styled.p`
    margin-bottom: ${({theme}) => theme.spacing.large};
    font-size: ${({theme}) => theme.spacing.large2x};
    font-family: ${({theme}) => theme.fonts.family};
    color: ${({theme}) => theme.colors.success};
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    margin-bottom: ${({theme}) => theme.spacing.large2x};
    font-family: ${({theme}) => theme.fonts.family};
    font-size: ${({theme}) => theme.spacing.large};
    line-height: 25px;
    font-style: normal;
    font-weight: 400;
`

export const EsqueciText  = styled.p`
    font-family: ${({theme}) => theme.fonts.family};
    line-height: ${({theme}) => theme.spacing.large};
    font-size: ${({theme}) => theme.spacing.medium};
    color: ${({theme}) => theme.colors.text};
    font-style: normal;
    font-weight: 700;
` 

export const CriarText = styled.span`
    font-family: ${({theme}) => theme.fonts.family};
    line-height: ${({theme}) => theme.spacing.large};
    font-size: ${({theme}) => theme.spacing.medium};
    color: ${({theme}) => theme.colors.success};
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`

