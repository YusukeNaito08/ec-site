import Layout from "../../components/layout/Layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Button, FormLabel, Grid, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { setUserLoggedIn } from "../../redux/users/userSlice";
import { useDispatch } from "react-redux";
import { useValidationRules } from "../../hooks/useValidationRules";

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
  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { isValid, isSubmitting },
  } = useForm<RegisterForm>({ mode: "onChange" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ValidationRules = useValidationRules();

  const fetchUserData = async (uid: string) => {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("NO DATA");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddressSearch = async () => {
    try {
      const zip = getValues("zip");
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`);
      const data = await response.json();

      if (data.results) {
        setValue("prefectures", data.results[0].address1);
        setValue("municipalities", `${data.results[0].address2}` + `${data.results[0].address3}`);
      } else {
        console.log("NO Address");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        tel: data.tel,
        zip: data.zip,
        prefectures: data.prefectures,
        municipalities: data.municipalities,
        street: data.street,
        apartment: data.apartment,
      });

      const userData = await fetchUserData(user.uid);

      dispatch(
        setUserLoggedIn({
          uid: user.uid,
          firstName: data.firstName,
          lastName: data.lastName,
          firstNameKana: data.firstNameKana,
          lastNameKana: data.lastNameKana,
          email: data.email,
          tel: data.tel,
          zip: data.zip,
          prefectures: data.prefectures,
          municipalities: data.municipalities,
          street: data.street,
          apartment: data.apartment,
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
        <Container sx={{ pt: 10, pb: 10 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ padding: "0 0 0 4rem" }}
          >
            新規会員登録
          </Typography>
          <form onSubmit={handleSubmit(RegisterAuth)}>
            <Box sx={{ bgcolor: "#F7F7F7", padding: "2rem 4rem", width: "60%" }}>
              <Typography
                variant="h5"
                gutterBottom
              >
                アカウント情報
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{ mb: 5 }}
              >
                <Grid
                  item
                  xs={6}
                >
                  <FormLabel htmlFor="firstName">性</FormLabel>

                  <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    rules={ValidationRules.name}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        name="firstName"
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                        fullWidth
                        id="firstName"
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <FormLabel htmlFor="lastName">名</FormLabel>
                  <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    rules={ValidationRules.name}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        name="lastName"
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                        fullWidth
                        id="lastName"
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <FormLabel htmlFor="firstNameKana">セイ</FormLabel>
                  <Controller
                    name="firstNameKana"
                    control={control}
                    defaultValue=""
                    rules={ValidationRules.name}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        name="firstNameKana"
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <FormLabel htmlFor="lastNameKana">メイ</FormLabel>
                  <Controller
                    name="lastNameKana"
                    control={control}
                    defaultValue=""
                    rules={ValidationRules.name}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        name="lastNameKana"
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                >
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
                </Grid>
                <Grid
                  item
                  xs={6}
                >
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
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <FormLabel htmlFor="tel">電話番号</FormLabel>
                  <Controller
                    name="tel"
                    control={control}
                    defaultValue=""
                    rules={ValidationRules.tel}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        type="tel"
                        fullWidth
                        id="tel"
                        name="tel"
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Typography
                variant="h5"
                gutterBottom
              >
                お届け先
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{ mb: 5 }}
              >
                <Grid
                  item
                  xs={7}
                >
                  <FormLabel htmlFor="zip">郵便番号</FormLabel>
                  <Controller
                    name="zip"
                    control={control}
                    defaultValue=""
                    rules={ValidationRules.zip}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        type="tel"
                        fullWidth
                        id="zip"
                        name="zip"
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={5}
                  sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    sx={{ color: "white", width: "100%;" }}
                    onClick={handleAddressSearch}
                  >
                    住所検索
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <FormLabel htmlFor="prefectures">都道府県</FormLabel>
                  <Controller
                    name="prefectures"
                    control={control}
                    defaultValue=""
                    rules={ValidationRules.prefectures}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="prefectures"
                        name="prefectures"
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <FormLabel htmlFor="municipalities">市区町村</FormLabel>
                  <Controller
                    name="municipalities"
                    control={control}
                    defaultValue=""
                    rules={ValidationRules.municipalities}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="municipalities"
                        name="municipalities"
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <FormLabel htmlFor="street">番地</FormLabel>
                  <Controller
                    name="street"
                    control={control}
                    defaultValue=""
                    rules={ValidationRules.street}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        type="tel"
                        fullWidth
                        id="street"
                        name="street"
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <FormLabel htmlFor="apartment">アパート・マンション・部屋番号</FormLabel>
                  <Controller
                    name="apartment"
                    control={control}
                    defaultValue=""
                    rules={ValidationRules.apartment}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="apartment"
                        name="apartment"
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                color="primary"
                variant="contained"
                size="large"
                sx={{ color: "white", width: "60%;" }}
              >
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

/*.exists() と .data() Firebase FirestoreのAPIに属している特定の関数*/
