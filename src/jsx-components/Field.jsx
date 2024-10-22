import './Field.css'
import styled from 'styled-components'
import errorImage from '/images/icon-error.svg'
import { useState, useEffect } from 'react';

export default function Field({placeholder, clicked}){
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [value, setValue] = useState('');
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const getValue = (event) => {
        setValue(event.target.value);
    }
    useEffect(() => {
        if(clicked){
            if (value === '') {
                setErrorMessage(`${placeholder} cannot be empty`);
                setIsError(true);
            } else {
                setIsError(false);
                if(placeholder == "Email Address" && !regex.test(value.trim())){
                    setIsError(true);
                    setErrorMessage('Looks like this is not an email');
                }
                if(placeholder == "Password" && value.length < 6){
                    setIsError(true);
                    setErrorMessage('Password is too short');
                }
            }
        }
    }, [clicked, value]);

    return(
        <div className='mb-[16px] lg:mb-[20px]'>
            <div className='flex items-center'>
                <InputField 
                type={`${placeholder == "Password" ? 'password' : 'text'}`}
                placeholder={placeholder}
                onChange={getValue}
                argument={isError}
                className='InputField'
                />
                <img src={errorImage} alt="error" className={`ml-[-53px] ${isError ? 'visible' : 'invisible'}`}/>
            </div>
            <h1 className={`${isError ? 'block' : 'hidden'}`} id='error-message'>{errorMessage}</h1>
        </div>
    )
}

const InputField = styled.input`
    border: ${(props) => props.argument ? '2px solid #FF7979' : '1px solid #DEDEDE'};
    border-radius: 5px;
    width: 100%;
    height: 56px;
    padding-left: 20px;

    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.25px;
    text-align: left;
    color: ${(props) => props.argument ? '#FF7979' : '#3D3B48'};
    caret-color: #5E54A4;
`;