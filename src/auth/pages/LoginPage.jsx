import { useMemo } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { chekingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";

const formData = {
  email: 'je.contretrascastillo@google.com',
  password: '12345678',
};

export const LoginPage = () => {
  const {status, errorMessage} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const{email, password, onInputChange}= useForm(formData);
  
  const isAuthenticating = useMemo(()=> status === 'checking', [status]);

  const onSubmit = (event) => {
      event.preventDefault();
      //console.log({email,password});
      dispatch(chekingAuthentication());
      dispatch( startLoginWithEmailPassword({ email, password }) );

  };

  const onGoogleSignIn = () => {
    console.log("On google signIn");
    dispatch(startGoogleSignIn());
  };
  return (
    <AuthLayout tittle="Login">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }} md={6}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@tcs.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
              <Button variant="contained" fullWidth type="submit" disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
              <Button variant="contained" fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}>
                <GoogleIcon />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
            <Grid 
                item 
                xs={ 12 }
                display={ !!errorMessage ? '': 'none' }
              >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
