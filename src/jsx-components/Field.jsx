import './Field.css'
import styled from 'styled-components'
import { useState } from 'react';

export default function Field({placeholder, clicked}){
    const [inputName, setInputName] = useState('normal');
    const [value, setValue] = useState('');
    const getValue = (event) => {
        setValue(event.target.value);
    }
    if(clicked && value === ''){
        setInputName('error');
    }

    return(
        <>
            <InputField 
            type="text" 
            placeholder={placeholder}
            onChange={getValue}
            className={inputName}
            />
        </>
    )
}

const InputField = styled.input`
    border: 1px solid #DEDEDE;
    border-radius: 5px;
    width: 100%;
    height: 56px;
`;