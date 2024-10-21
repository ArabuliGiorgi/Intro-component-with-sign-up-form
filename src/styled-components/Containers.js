import styled from 'styled-components'

const Container1 = styled.div`
    width: 100%;
    max-width: 525px;
    h1{
        font-size: 28px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: -0.29px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 16px;
    }
    p{
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        letter-spacing: 1.2px;
    }
`;

const Container2 = styled.div`
    width: 100%;
    max-width: 540px;
    .plan{
        box-shadow: 0px 8px 0px 0px #00000025;
        background-color: #5E54A4;
        border-radius: 10px;
        width: 100%;
        padding: 18px 66px;
        margin-bottom: 24px;
    }
    .form{
        box-shadow: 0px 8px 0px 0px #00000025;
        background-color: white;
        border-radius: 10px;
        width: 100%;
        padding: 24px;
    }
`;

export {Container1, Container2};