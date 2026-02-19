import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    background-color: #3B4651;
    position: relative;
    margin-bottom: 24px;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: 180px;
`

export const Content = styled.div`
    padding: ${({theme}) => theme.spacing.medium};
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const UserInfo = styled.div`
    margin-bottom: ${({theme}) => theme.spacing.medium};
    display: flex;
    flex-direction: row;
    div {
        margin-left: ${({theme}) => theme.spacing.medium};
    }

    h4{
        font-family: ${({theme}) => theme.fonts.family};
        font-size: ${({theme}) => theme.spacing.large};
        color: ${({theme}) => theme.colors.text};
        font-style: normal;
        font-weight: 700;
        line-height: 25px;
    }

    p {
        font-family: ${({theme}) => theme.fonts.family};
        font-size: ${({theme}) => theme.spacing.medium};
        color: ${({theme}) => theme.colors.textGray};
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
    }
`

export const UserPicture = styled.img`
    border: 3px solid ${({theme}) => theme.colors.border};
    width: ${({theme}) => theme.spacing.large2x};
    height: ${({theme}) => theme.spacing.large2x};
    border-radius: ${({theme}) => theme.borderRadius.full};
`

export const PostInfo = styled.div`

    margin-bottom: ${({theme}) => theme.spacing.medium};

    h4{
        font-family: ${({theme}) => theme.fonts.family};
        font-size: ${({theme}) => theme.spacing.large};
        color: ${({theme}) => theme.colors.text};
        font-style: normal;
        font-weight: 700;
        line-height: 25px;
    }

    p {
        font-family: ${({theme}) => theme.fonts.family};
        font-size: ${({theme}) => theme.spacing.medium};
        line-height: ${({theme}) => theme.spacing.medium2x};
        font-style: normal;
        font-weight: 400;
    }
`

export const HasInfo = styled.div`
    margin-top: ${({theme}) => theme.spacing.medium};

    h4{
        line-height: ${({theme}) => theme.spacing.medium2x};  
        font-family: ${({theme}) => theme.fonts.family};
        font-size: ${({theme}) => theme.spacing.small};
        color: ${({theme}) => theme.colors.textGray};
        font-style: normal;
        font-weight: 700;
    }

    p {
        font-family: ${({theme}) => theme.fonts.family};
        font-style: normal;
        font-weight: 700;
        font-size: ${({theme}) => theme.spacing.medium2x};
        line-height: 22px;
    }
`