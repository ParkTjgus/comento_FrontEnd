const idInput = document.getElementById("register_form__id_input");
const pwInput = document.getElementById("register_form__password_input");
const registerBtn = document.getElementsByClassName("register_form__btn")[0];
const idBtn = document.getElementsByClassName("register_form__id_btn")[0];

const accounts = {};

const validateId = () => {
  const idValue = idInput.value;

  // 공백검사
  if (idValue.includes(" ")) {
    alert("아이디에는 공백이 포함되면 안됩니다");
    return false;
  }

  if (accounts[idValue] != undefined) {
    alert("중복된 아이디가 있습니다");
    return false;
  }

  return true;
};

const validatePassword = () => {
  const pwValue = pwInput.value;

  if (pwValue.includes(" ")) {
    alert("비밀번호에는 공백이 포함되면 안됩니다");
    return false;
  }

  if (pwValue.length < 8) {
    alert("비밀번호는 8자 이상이어야 합니다");
    return false;
  }

  const hasLetter = /[a-zA-Z]/.test(pwValue);
  const hasNumber = /[0-9]/.test(pwValue);

  if (!(hasLetter && hasNumber)) {
    alert("비밀번호는 영문과 숫자를 조합해야 합니다");
    return false;
  }

  return true;
};

const checkIdDuplication = () => {
  if (!validateId()) return;

  alert("사용 가능한 아이디입니다");
  return;
};

const addAccount = () => {
  if (!(validateId() && validatePassword())) return;

  const id = idInput.value;
  const pw = pwInput.value;

  accounts[id] = pw;

  alert("회원가입이 완료되었습니다");
  console.log("현재 계정 목록:", accounts);

  idInput.value = "";
  pwInput.value = "";
};

idBtn.addEventListener("click", checkIdDuplication);
registerBtn.addEventListener("click", addAccount);
