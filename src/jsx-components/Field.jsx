import './Field.css'
import styled from 'styled-components'
import errorImage from '/images/icon-error.svg'
import { useState, useEffect } from 'react';

export default function Field({placeholder, clicked}){
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [value, setValue] = useState('');
    const getValue = (event) => {
        setValue(event.target.value);
    }
    useEffect(() => {
        if (clicked && value === '') {
            setIsError(true);
        } else {
            setIsError(false);
        }
    }, [clicked, value]);

    return(
        <>
            <div className='flex items-center'>
                <InputField 
                type="text" 
                placeholder={placeholder}
                onChange={getValue}
                argument={isError}
                />
                <img src={errorImage} alt="error" className={`ml-[-53px] ${isError ? 'visible' : 'invisible'}`}/>
            </div>
            <h1 className={`${isError ? 'block' : 'hidden'}`} id='error-message'>{errorMessage}</h1>
        </>
    )
}

const InputField = styled.input`
    border: ${(props) => props.argument ? '2px solid #FF7979' : '1px solid #DEDEDE'};
    border-radius: 5px;
    width: 100%;
    height: 56px;
    padding-left: 20px;
`;