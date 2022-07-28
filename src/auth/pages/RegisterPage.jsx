import { AuthLayout } from "../layout/AuthLayout"
import { useDispatch, useSelector} from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth";

const formData = {
  email: '',
  password: '',
  displayName: ''

};

const formValidations = {
    email: [(value)=> value.includes('@'), 'the email must has @'],
    password: [(value)=> value.length >= 6, 'the password must has more than 6 characters'],
    displayName: [(value)=> value.length >= 1, 'the name is required']


};


export const RegisterPage = () => {
  const dispatch= useDispatch();
  const [formSubmitted, setFormSubmitted]= useState(false);
  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);
  const{
    displayName, email, password, onInputChange, formState, isFormValid,
    displayNameValid, emailValid, passwordValid
  }= useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailAndPassword(formState));
  }

 

  return (
    <AuthLayout tittle="Register">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }} md={6}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Your name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }} md={6}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@tcs.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }} md={6}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt:1 }}>
          <Grid 
                item 
                xs={ 12 }
                display={ !!errorMessage ? '': 'none' }
              >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
            <Grid item xs={12} sm={12} sx={{ mt: 1 }}>
              <Button variant="contained" fullWidth type="submit" disabled={isCheckingAuthentication}>
                create account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Do you alredy have an account? Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
