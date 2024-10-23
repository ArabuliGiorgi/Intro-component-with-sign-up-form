import "./Field.css";
import styled from "styled-components";
import errorImage from "/images/icon-error.svg";
import { useState, useEffect } from "react";

export default function Field({ placeholder, setValues, errors, name }) {
  const [isError, setIsError] = useState(false);
  const getValue = (event) => {
    setValues(prevValues => ({
        ...prevValues,
        [name]: event.target.value,
    }));
  };

  useEffect(() => {
    if(errors[name] != ""){
        setIsError(true);
    }else{
        setIsError(false);
    }
  }, [errors.clickNumber]);

  return (
    <div className="mb-[16px] lg:mb-[20px]">
      <div className="flex items-center">
        <InputField
          type={`${placeholder == "Password" ? "password" : "text"}`}
          placeholder={isError ? "" : placeholder}
          onChange={(event) => {
            getValue(event);
            if(isError){
                setIsError(false);
            }
          }}
          argument={`${isError}`}
          className="InputField"
        />
        <img
          src={errorImage}
          alt="error"
          className={`ml-[-53px] ${isError ? "visible" : "invisible"}`}
        />
      </div>
      <h1 className={`${isError ? "block" : "hidden"}`} id="error-message">
        {errors[name]}
      </h1>
    </div>
  );
}

const InputField = styled.input`
  border: ${(props) =>
    props.argument == "true" ? "2px solid #FF7979" : "1px solid #DEDEDE"};
  border-radius: 5px;
  width: 100%;
  height: 56px;
  padding-left: 20px;

  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.25px;
  text-align: left;
  color: ${(props) => (props.argument == "true" ? "#FF7979" : "#3D3B48")};
  caret-color: #5e54a4;
`;