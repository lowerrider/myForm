export const NAME = "Руслан Хайбалиев";

export const ROUTES = {
  index: "/",
  createForm: "/createForm",
};

export const SELECT_OPTIONS = [
  {
    label: "Мужчина",
    value: "man",
  },
  {
    label: "Женщина",
    value: "woman",
  },
];

export const INITIAL_VALUES = {
  nickname: "",
  name: "",
  sername: "",
  sex: "",
  advantages: [{ value: "" }, { value: "" }, { value: "" }],
  radio: "",
  checkbox: [],
  about: "",
};

export const REQUIRED_FIED = "Обязательное поле";

export const REQUEST_URL =
  "https://api.sbercloud.ru/content/v1/bootcamp/frontend";

export const REQUEST_STATUS = {
  success: "success",
  error: "error",
};

export const TABS = [
  {
    label: "1",
    key: 1,
    isClickble: false,
  },
  {
    label: "2",
    key: 2,
    isClickble: false,
  },
  {
    label: "3",
    key: 3,
    isClickble: false,
  },
];
