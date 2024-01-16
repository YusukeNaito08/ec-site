import Layout from "../../components/layout/Layout";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormLabel, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUserLoggedIn } from "../../redux/users/userSlice";
import { useForm, Controller } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { handleSubmit, control } = useForm<LoginForm>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LoginAuth = async (data: LoginForm) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      dispatch(setUserLoggedIn(user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout>
        <Container sx={{ pt: 10 }}>
          <Grid container justifyContent="space-evenly" columns={12}>
            <Grid item xs={5} sx={{ bgcolor: "#F7F7F7", padding: "2rem 4rem", borderRadius: "1rem" }}>
              <Typography variant="h4" align="center" sx={{ mb: 5 }}>
                ログイン
              </Typography>
              <form onSubmit={handleSubmit(LoginAuth)}>
                <Stack spacing={2}>
                  <FormLabel>メールアドレス</FormLabel>
                  <Controller name="email" control={control} defaultValue="" render={({ field }) => <TextField {...field} autoComplete="email" name="email" required fullWidth id="mail" />} />
                  <FormLabel>パスワード</FormLabel>
                  <Controller name="password" control={control} defaultValue="" render={({ field }) => <TextField {...field} autoComplete="current-password" name="password" required fullWidth id="password" type="password" />} />
                  <Button type="submit" color="primary" variant="contained" size="large" sx={{ color: "white" }}>
                    ログイン
                  </Button>
                </Stack>
                <Typography variant="subtitle1" sx={{ mt: 1 }} align="center">
                  パスワードを忘れた方はこちら
                </Typography>
              </form>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h4" align="center" sx={{ mb: 5 }}>
                はじめてご利用の方
              </Typography>
              <Stack>
                <Button variant="contained" size="large" sx={{ color: "white" }} component={Link} to={"/register"}>
                  新規会員登録
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default Login;
