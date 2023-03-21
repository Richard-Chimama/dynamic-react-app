import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;

    & > div {
        border-right: 1px solid #d9d9d9;
        border-top: 1px solid #d9d9d9;
        padding-right: 0.7rem;
        padding-left: 0.7rem;
        padding-top: 0.7rem;
    }

    & > div:hover{
        cursor: pointer;
    }

`

export const header = styled.h4`
    text-align: center;
    margin: 0 auto;
    width: fit-content;
`

export const year = styled(header)`
    font-size: 14px;
    margin-bottom: 1rem;
`

export const Image = styled.img`
    width: 300px;
    height: 500px;
`
