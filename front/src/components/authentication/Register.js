import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { validateEmail } from '../../utils';
import { clientConfig } from '../../utils/client.config';
import genericFetch from '../../utils/genericFetch';
import { useHistory } from 'react-router-dom';


const eInputsMap = {
  FULL_NAME: 'fullName',
  EMAIL: 'email',
  PASSWORD: 'password'
};

const errorsDesc = {
  EMAIL: 'please enter a valid email',
  PASSWORD: 'password should contain at least 6 digits'
};

const Register = ({ onRegistred }) => {
  const history = useHistory();
  const [userInputs, setUserInputs] = useState({ fullName: '', email: '', password: '' });
  const [errors, setErrors] = useState({ email: { error: false, desc: '' }, password: { error: false, desc: '' } });

  const onInputChange = (e, inputId) => {
    const value = e.target.value;
    setUserInputs({ ...userInputs, [inputId]: value });
    setErrors({ ...errors, [inputId]: { error: false, desc: '' } });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (validateFormInputs()) {
      const response = await genericFetch(clientConfig.registerUrl, 'POST', userInputs);
      if (response) {
        onRegistred();
      }
    }
  };

  const validateFormInputs = () => {
    const validations = {};

    if (!validateEmail(userInputs.email)) {
      validations.email = { error: true, desc: errorsDesc.EMAIL };
    }
    if (userInputs.password.length < 6) {
      validations.password = { error: true, desc: errorsDesc.PASSWORD };
    }

    setErrors({ ...errors, ...validations });
    return (!validations?.password?.error && !validations?.email?.error);
  };

  return (
    <RegisterStyled>
      <header className={'title'}>Sign up</header>
      <form onSubmit={onSubmitForm}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField required id={eInputsMap.FULL_NAME} label="Full Name" variant="outlined" fullWidth
                       value={userInputs.fullName}
                       onChange={(e) => {
                         onInputChange(e, eInputsMap.FULL_NAME);
                       }} />
          </Grid>

          <Grid item xs={12}>
            <TextField required id={eInputsMap.EMAIL} label="Email" variant="outlined" fullWidth
                       error={errors.email.error} helperText={errors.email.desc}
                       value={userInputs.email} onChange={(e) => {
              onInputChange(e, eInputsMap.EMAIL);
            }} />
          </Grid>

          <Grid item xs={12}>
            <TextField type={'password'} required id={eInputsMap.PASSWORD} label="Password" variant="outlined" fullWidth
                       error={errors.password.error} helperText={errors.password.desc}
                       value={userInputs.password} onChange={(e) => {
              onInputChange(e, eInputsMap.PASSWORD);
            }} />
          </Grid>
        </Grid>
        <Button className={'submit-btn'} fullWidth variant="contained" color="primary"
                type={'submit'}>{'submit'}</Button>
      </form>
    </RegisterStyled>
  );
};

export default Register;

const RegisterStyled = styled.div`
  max-width: 500px;
  margin: 50px auto;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .submit-btn {
    margin-top: 20px;
  }
`;