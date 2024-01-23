export const useValidationRules = () => {
  return {
    name: {
      required: { value: true, message: "入力必須項目です" },
      maxLength: { value: 60, message: "60文字以内で入力してください" },
    },
    email: {
      required: { value: true, message: "入力必須項目です" },
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "メールアドレスの形式が異なります。",
      },
      maxLength: { value: 256, message: "256文字以内で入力してください" },
    },
    pw: {
      required: { value: true, message: "入力必須項目です" },
      pattern: {
        value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,24}$/i,
        message: "英数字6桁から24桁でご入力ください",
      },
    },
    tel: {
      required: { value: true, message: "入力必須項目です" },
      pattern: {
        value: /^[0-9]{13}$/,
        message: "数字13桁でご入力ください",
      },
    },
    zip: {
      required: { value: true, message: "入力必須項目です" },
      pattern: {
        value: /^\d{7}$/,
        message: "数字7桁で入力してください",
      },
    },
    prefectures: {
      required: { value: true, message: "入力必須項目です" },
      maxLength: { value: 4, message: "4文字以内で入力してください" },
    },
    municipalities: {
      required: { value: true, message: "入力必須項目です" },
      maxLength: { value: 15, message: "15文字以内で入力してください" },
    },
    street: {
      required: { value: true, message: "入力必須項目です" },
      maxLength: { value: 20, message: "15文字以内で入力してください" },
    },
    apartment: {
      maxLength: { value: 20, message: "15文字以内で入力してください" },
    },
  };
};
