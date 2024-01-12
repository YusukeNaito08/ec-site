import Layout from "../../components/layout/Layout";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const LoginAuth = () => {
    alert("aa");
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
              <form onSubmit={LoginAuth}>
                <Stack spacing={6}>
                  <TextField required label="メールアドレス" type="email" />
                  <TextField required label="パスワード" type="password" />
                  <Button type="submit" color="primary" variant="contained" size="large" sx={{ color: "white" }}>
                    ログイン
                  </Button>
                </Stack>
              </form>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h4" align="center" sx={{ mb: 5 }}>
                はじめてご利用の方
              </Typography>
              <Stack>
                <Button variant="contained" size="large" sx={{ color: "white" }}>
                  <Link to={"/register"}>新規会員登録</Link>
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
