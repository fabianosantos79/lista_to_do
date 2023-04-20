import styled from 'styled-components' 

export const Container = styled.div`
    background: #ad5389;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #3c1053, #ad5389);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #3c1053, #ad5389); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #797A81;
    min-height: 100vh;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    padding-bottom: 20px;
    margin-top: 20px;
`