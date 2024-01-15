import Layout from "../../components/layout/Layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Button, FormLabel, Grid, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

interface RegisterForm {
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  email: string;
  password: string;
  tel: string;
  zip: string;
  prefectures: string;
  municipalities: string;
  street: string;
  apartment: string;
}

const Register = () => {
  const { handleSubmit, control } = useForm<RegisterForm>();
  const navigate = useNavigate();

  const RegisterAuth = async (data: RegisterForm) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName: data.firstName,
        lastName: data.lastName,
        firstNameKana: data.firstNameKana,
        lastNameKana: data.lastNameKana,
        email: data.email,
        password: data.password,
        tel: data.tel,
        zip: data.zip,
        prefectures: data.prefectures,
        municipalities: data.municipalities,
        street: data.street,
        apartment: data.apartment,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <Container sx={{ pt: 10, pb: 10 }}>
          <Typography variant="h5" gutterBottom sx={{ padding: "0 0 0 4rem" }}>
            新規会員登録
          </Typography>
          <form onSubmit={handleSubmit(RegisterAuth)}>
            <Box sx={{ bgcolor: "#F7F7F7", padding: "2rem 4rem", width: "60%" }}>
              <Typography variant="h5" gutterBottom>
                アカウント情報
              </Typography>
              <Grid container spacing={2} sx={{ mb: 5 }}>
                <Grid item xs={6}>
                  <FormLabel htmlFor="firstName">性</FormLabel>
                  <Controller name="firstName" control={control} defaultValue="" render={({ field }) => <TextField {...field} autoComplete="given-name" name="firstName" required fullWidth id="firstName" autoFocus />} />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="lastName">名</FormLabel>
                  <Controller name="lastName" control={control} defaultValue="" render={({ field }) => <TextField {...field} autoComplete="family-name" name="lastName" required fullWidth id="lastName" />} />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="firstNameKana">セイ</FormLabel>
                  <Controller name="firstNameKana" control={control} defaultValue="" render={({ field }) => <TextField {...field} autoComplete="last-name-kana" name="firstNameKana" required fullWidth />} />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="lastNameKana">メイ</FormLabel>
                  <Controller name="lastNameKana" control={control} defaultValue="" render={({ field }) => <TextField {...field} autoComplete="family-name-kana" name="lastNameKana" required fullWidth />} />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="mail">メールアドレス</FormLabel>
                  <Controller name="email" control={control} defaultValue="" render={({ field }) => <TextField {...field} autoComplete="email" name="email" required fullWidth id="mail" />} />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="password">パスワード</FormLabel>
                  <Controller name="password" control={control} defaultValue="" render={({ field }) => <TextField {...field} autoComplete="current-password" name="password" required fullWidth id="password" type="password" />} />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="tel">電話番号</FormLabel>
                  <Controller name="tel" control={control} defaultValue="" render={({ field }) => <TextField {...field} type="tel" required fullWidth id="tel" name="tel" autoComplete="tel" />} />
                </Grid>
              </Grid>
              <Typography variant="h5" gutterBottom>
                お届け先
              </Typography>
              <Grid container spacing={2} sx={{ mb: 5 }}>
                <Grid item xs={7}>
                  <FormLabel htmlFor="zip">郵便番号</FormLabel>
                  <Controller name="zip" control={control} defaultValue="" render={({ field }) => <TextField {...field} type="tel" required fullWidth id="zip" name="zip" autoComplete="zip" />} />
                </Grid>
                <Grid item xs={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Button color="primary" variant="contained" size="large" sx={{ color: "white", width: "100%;" }}>
                    住所検索
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="prefectures">都道府県</FormLabel>
                  <Controller name="prefectures" control={control} defaultValue="" render={({ field }) => <TextField {...field} required fullWidth id="prefectures" name="prefectures" autoComplete="pref" />} />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="municipalities">市区町村</FormLabel>
                  <Controller name="municipalities" control={control} defaultValue="" render={({ field }) => <TextField {...field} required fullWidth id="municipalities" name="municipalities" autoComplete="municipalities" />} />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="street">番地</FormLabel>
                  <Controller name="street" control={control} defaultValue="" render={({ field }) => <TextField {...field} type="tel" required fullWidth id="street" name="street" autoComplete="street" />} />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel htmlFor="apartment">アパート・マンション・部屋番号</FormLabel>
                  <Controller name="apartment" control={control} defaultValue="" render={({ field }) => <TextField {...field} required fullWidth id="apartment" name="apartment" autoComplete="apartment" />} />
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
