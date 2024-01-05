import { useMemo } from "react";
import { startGoogleSignIn, startloginWithEmailPassword } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import { AuthLayout } from "../layout/AuthLayout";
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

const formData = {
  email: 'p@p.com',
  password: '123456'
};

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)

  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status])


  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(startloginWithEmailPassword({ email, password }));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }


  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container display={!!errorMessage ? '' : 'none'} sx={{ mt: 1 }}>
            <Grid item xs={12} >
              <Alert severity="error">
                {errorMessage}
              </Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="end">
            <Link
              component={RouterLink}
              sx={{ mt: 1 }}
              to="/auth/register">
              Crear una cueta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
