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

    @media only screen and (min-width: 1150px) {
        h1{
            font-size: 50px;
            line-height: 55px;
            letter-spacing: -0.52px;
            text-align: left;
        }
        p{
            font-size: 16px;
            font-weight: 500;
            line-height: 26px;
            text-align: left;
            letter-spacing: 0.4px;
        }
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
    .submit-btn{
        width: 100%;
        height: 56px;
        border-radius: 5px;
        background-color: #38CC8B;
        box-shadow: 0px -4px 0px 0px #00000017 inset;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .submit-btn:hover{
        background-color: #77E2B3;
        cursor: pointer;
    }
    .submit-btn h1{
        font-size: 15px;
        font-weight: 600;
        line-height: 26px;
        text-align: center;
        letter-spacing: 1px;
        color: #FFFFFF;
    }
    .termsAndServices{
        font-size: 11px;
        font-weight: 500;
        line-height: 21px;
        text-align: center;
        color: #BAB7D4;
        margin-top: 8px;
        padding: 0 15px;
    }

    @media only screen and (min-width: 1150px){
        .plan{
            padding: 17px 0;
        }
        .form{
            padding: 40px;
        }
        .termsAndServices{
            line-height: 26px;
            padding: 0;
        }
    }
`;

export {Container1, Container2};