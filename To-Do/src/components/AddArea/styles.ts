import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #FFF;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;

    .image{
        margin-right: 5px;
    }

    input{
        background: transparent;
        border: 0;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }
    input::placeholder{
        color: #FFF;
    }
`