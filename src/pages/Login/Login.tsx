import Layout from "../../components/layout/Layout";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormLabel, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUserLoggedIn } from "../../redux/users/userSlice";
import { useForm, Controller } from "react-hook-form";
import { doc, getDoc } from "firebase/firestore";
import { useValidationRules } from "../../hooks/useValidationRules";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { handleSubmit, control } = useForm<LoginForm>({ mode: "onChange" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ValidationRules = useValidationRules();

  const LoginAuth = async (data: LoginForm) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      const fetchUserData = async (uid: string) => {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          console.log("NO DATA");
        }
      };

      const userData = await fetchUserData(user.uid);

      dispatch(
        setUserLoggedIn({
          uid: user.uid,
          firstName: userData?.firstName,
          lastName: userData?.lastName,
          firstNameKana: userData?.firstNameKana,
          lastNameKana: userData?.lastNameKana,
          email: userData?.email,
          tel: userData?.tel,
          zip: userData?.zip,
          prefectures: userData?.prefectures,
          municipalities: userData?.municipalities,
          street: userData?.street,
          apartment: userData?.apartment,
          ...userData,
        })
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout>
        <Container sx={{ pt: 10 }}>
          <Grid
            container
            justifyContent="space-evenly"
            columns={12}
          >
            <Grid
              item
              xs={5}
              sx={{ bgcolor: "#F7F7F7", padding: "2rem 4rem", borderRadius: "1rem" }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{ mb: 5 }}
              >
                ログイン
              </Typography>
              <form onSubmit={handleSubmit(LoginAuth)}>
                <Stack spacing={2}>
                  <FormLabel htmlFor="mail">メールアドレス</FormLabel>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={ValidationRules.email}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        name="email"
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                        fullWidth
                        id="mail"
                      />
                    )}
                  />
                  <FormLabel htmlFor="password">パスワード</FormLabel>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={ValidationRules.pw}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        autoComplete="current-password"
                        name="password"
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                        fullWidth
                        id="password"
                        type="password"
                      />
                    )}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="large"
                    sx={{ color: "white" }}
                  >
                    ログイン
                  </Button>
                </Stack>
                <Typography
                  variant="subtitle1"
                  sx={{ mt: 1 }}
                  align="center"
                >
                  パスワードを忘れた方はこちら
                </Typography>
              </form>
            </Grid>
            <Grid
              item
              xs={5}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{ mb: 5 }}
              >
                はじめてご利用の方
              </Typography>
              <Stack>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ color: "white" }}
                  component={Link}
                  to={"/register"}
                >
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
