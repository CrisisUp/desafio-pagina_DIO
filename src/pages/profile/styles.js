import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

export const Column = styled.div`
    flex: 1;
    padding-right: 24px;

    form {
        max-width: 350px;
        margin-top: 40px;
    }
`

export const Title = styled.h2`
    font-family: ${({theme}) => theme.fonts.family};
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;

    color: ${({theme}) => theme.colors.text};
`