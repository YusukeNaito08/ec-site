import Layout from "../../components/layout/Layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Button, FormLabel, Grid, TextField } from "@mui/material";

const Register = () => {
  const RegisterAuth = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;
  };

  return (
    <>
      <Layout>
        <Container sx={{ pt: 10, pb: 10 }}>
          <Typography variant="h5" gutterBottom sx={{ padding: "0 0 0 4rem" }}>
            新規会員登録
          </Typography>
          <form onSubmit={RegisterAuth}>
            <Box sx={{ bgcolor: "#F7F7F7", padding: "2rem 4rem", width: "60%" }}>
              <Typography variant="h5" gutterBottom>
                アカウント情報
              </Typography>
              <Grid container spacing={2} sx={{ mb: 5 }}>
                <Grid item xs={6}>
                  <FormLabel htmlFor="firstName">性</FormLabel>
                  <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" autoFocus />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="lastName">名</FormLabel>
                  <TextField required fullWidth id="lastName" name="lastName" autoComplete="family-name" />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="firstNameKana">セイ</FormLabel>
                  <TextField autoComplete="given-name-kana" name="firstNameKana" required fullWidth id="firstNameKana" autoFocus />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="lastNameKana">メイ</FormLabel>
                  <TextField required fullWidth id="lastNameKana" name="lastNameKana" autoComplete="family-name-kana" />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="mail">メールアドレス</FormLabel>
                  <TextField required fullWidth id="mail" name="mail" autoComplete="mail" />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="password">パスワード</FormLabel>
                  <TextField type="password" required fullWidth id="password" name="password" autoComplete="password" />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="tel">電話番号</FormLabel>
                  <TextField type="tel" required fullWidth id="tel" name="tel" autoComplete="tel" />
                </Grid>
              </Grid>
              <Typography variant="h5" gutterBottom>
                お届け先
              </Typography>
              <Grid container spacing={2} sx={{ mb: 5 }}>
                <Grid item xs={7}>
                  <FormLabel htmlFor="zip">郵便番号</FormLabel>
                  <TextField type="tel" required fullWidth id="zip" name="zip" autoComplete="zip" />
                </Grid>
                <Grid item xs={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Button color="primary" variant="contained" size="large" sx={{ color: "white", width: "100%;" }}>
                    住所検索
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="prefectures">都道府県</FormLabel>
                  <TextField required fullWidth id="prefectures" name="prefectures" autoComplete="prefectures" />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="municipalities">市区町村</FormLabel>
                  <TextField required fullWidth id="municipalities" name="municipalities" autoComplete="municipalities" />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="street">番地</FormLabel>
                  <TextField required fullWidth id="street" name="street" autoComplete="street" />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="apartment">アパート・マンション・部屋番号</FormLabel>
                  <TextField required fullWidth id="apartment" name="apartment" autoComplete="apartment" />
                </Grid>
              </Grid>
              <Button type="submit" color="primary" variant="contained" size="large" sx={{ color: "white", width: "60%;" }}>
                登録する
              </Button>
            </Box>
          </form>
        </Container>
      </Layout>
    </>
  );
};

export default Register;
