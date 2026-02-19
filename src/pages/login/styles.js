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
    max-width: 300px;
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
    max-width: 90%;
    line-height: 44px;
`

export const TitleLogin = styled.p`
    margin-bottom: ${({theme}) => theme.spacing.small};
    font-size: ${({theme}) => theme.spacing.large2x};
    font-family: ${({theme}) => theme.fonts.family};
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    margin-bottom: ${({theme}) => theme.spacing.large2x};
    font-family: ${({theme}) => theme.fonts.family};
    font-size: ${({theme}) => theme.spacing.large};
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
`

export const EsqueciText  = styled.p`
    line-height: ${({theme}) => theme.spacing.large};
    font-family: ${({theme}) => theme.fonts.family};
    font-size: ${({theme}) => theme.spacing.medium};
    font-style: normal;
    font-weight: 700;
    color: #E5E044;
    cursor: pointer;

    &:hover {
        text-decoration: underline; 
    }
` 

export const CriarText =  styled.p`
    font-family: ${({theme}) => theme.fonts.family};
    line-height: ${({theme}) => theme.spacing.large};
    font-size: ${({theme}) => theme.spacing.medium};
    color: ${({theme}) => theme.colors.highlight};
    font-style: normal;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        opacity: 0.8;
    }
`