import styled from 'styled-components'

export const Form = styled.form`
    width: 60%;
    margin: 0 auto;
    position: sticky;
    top: 0.8rem;

    & > input, select{
        width: 1;
        height: 40px;
        padding-left: 10px;
        border-radius: 7px;
        font-size: 16px;
        outline: none;
    }

    & > input{
        width: 75%;
        margin-right: 7px;
    }
`
