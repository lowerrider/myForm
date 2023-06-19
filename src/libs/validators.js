// строковое значение, максимальная длина 30 символов, могут быть просто буквы и цифры (спец символы запрещены)
export function validateNickName(value) {
  const errors = {};
  if (!value) {
    return "Заполните поле";
  }
  if (value.length > 30) {
    return "Максимальная длина 30 символов";
  }
  if (!/^[0-9А-ЯЁA-Z]+$/gi.test(value)) {
    return "Могут быть просто буквы и цифры (спец символы запрещены)";
  }
  return errors;
}
//строковое значение, максимальная длина 50 символов, только буквы
export function validateInput(value) {
  const errors = {};
  if (!value) {
    return "Заполните поле";
  }
  if (value.length > 50) {
    return "Максимальная длина 50 символов";
  }
  if (!/^[А-ЯЁA-Z]+$/gi.test(value)) {
    return "Могут быть только буквы";
  }
  return errors;
}
// sex - enum 'man' | 'woman'
export function validateSex(value) {
  const errors = {};

  if (value !== "man" || value !== "woman") {
    return true;
  }
  return errors;
}
//строковое значение, максимальная длина 50 символов, только буквы
export function validateAdvent(value) {
  const errors = {};

  if (!value) {
    return "Заполните поле";
  }
  if (!/^[А-ЯЁA-Z]+$/gi.test(value)) {
    return "Могут быть только буквы";
  }
  return errors;
}
