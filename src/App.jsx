import "./App.css";
import { useState } from "react";
import { Container1, Container2 } from "./styled-components/Containers";
import Field from "./jsx-components/Field";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  function validate() {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let newErrors = { ...errors };
    if (values.firstName === "") {
      newErrors.firstName = "First Name cannot be empty";
    } else {
      newErrors.firstName = "";
    }
    if (values.lastName === "") {
      newErrors.lastName = "Last Name cannot be empty";
    } else {
      newErrors.lastName = "";
    }
    if (values.email === "") {
      newErrors.email = "Email cannot be empty";
    } else if(!regex.test(values.email.trim())){
      newErrors.email = "Looks like this is not an email";
    }else{
      newErrors.email = "";
    }
    if (values.password === "") {
      newErrors.password = "Password cannot be empty";
    } else if(values.password.length < 6){
      newErrors.password = "Password is too short";
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
  }

  return (
    <main>
      <Container1>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </Container1>
      <Container2>
        <div className="plan">
          <h1 className="font-bold text-[15px] leading-[26px] tracking-[0.27px] text-center text-white">
            Try it free 7 days{" "}
            <span className="font-normal">then $20/mo. thereafter</span>
          </h1>
        </div>
        <div className="form">
          <Field
            placeholder={"First Name"}
            name="firstName"
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
          ></Field>
          <Field
            placeholder={"Last Name"}
            name="lastName"
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
          ></Field>
          <Field
            placeholder={"Email Address"}
            name="email"
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
          ></Field>
          <Field
            placeholder={"Password"}
            name="password"
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
          ></Field>
          <button className="submit-btn" onClick={validate}>
            <h1>CLAIM YOUR FREE TRIAL</h1>
          </button>
          <h1 className="termsAndServices">
            By clicking the button, you are agreeing to our{" "}
            <span className="text-[#FF7979] font-[700]">
              Terms and Services
            </span>
          </h1>
        </div>
      </Container2>
    </main>
  );
}

export default App;