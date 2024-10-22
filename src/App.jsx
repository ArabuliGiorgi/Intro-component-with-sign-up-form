import './App.css'
import { useState } from 'react';
import { Container1, Container2 } from './styled-components/Containers';
import Field from './jsx-components/Field';

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <main>
      <Container1>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </Container1>
      <Container2>
        <div className="plan">
          <h1 className='font-bold text-[15px] leading-[26px] tracking-[0.27px] text-center text-white'>
          Try it free 7 days <span className='font-normal'>then $20/mo. thereafter</span></h1>
        </div>
        <div className="form">
          <Field placeholder={'First Name'} clicked={clicked}></Field>
          <Field placeholder={'Last Name'} clicked={clicked}></Field>
          <Field placeholder={'Email Address'} clicked={clicked}></Field>
          <Field placeholder={'Password'} clicked={clicked}></Field>
          <button className='submit-btn' onClick={() => setClicked(true)}><h1>CLAIM YOUR FREE TRIAL</h1></button>
          <h1 className='termsAndServices'>By clicking the button, you are agreeing to our <span className='text-[#FF7979] font-[700]'>Terms and Services</span></h1>
        </div>
      </Container2>
    </main>
  )
}

export default App