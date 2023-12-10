const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

// 1번
const inputEmailId = document.querySelector(".user-email-input");

function emailIdValidation() {
  if (emailReg(inputEmailId.value)) {
    console.log(true);
    inputEmailId.classList.remove("is--invalid");
  } else {
    console.log(false);
    inputEmailId.classList.add("is--invalid");
  }
}
// 왜 안되는지 고민해보자!!!!!!!!!!!!!!!
inputEmailId.addEventListener("input", emailIdValidation());

// querySelector 안에 선택자에 클래시 입력시 . 빼먹는것 주의
const inputEmailPw = document.querySelector(".user-password-input");

function emailPwValidation() {
  if (pwReg(inputEmailPw.value)) {
    console.log(true);
    inputEmailPw.classList.remove("is--invalid");
  } else {
    console.log(false);
    inputEmailPw.classList.add("is--invalid");
  }
}

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const loginBtn = document.querySelector(".btn-login");

function handleLoginValidation(e) {
  e.preventDefault();
  if (inputEmailId.value === user.id && inputEmailPw.value === user.pw) {
    console.log("로그인 완료");
    location.href = "welcome.html";
  } else {
    console.log("로그인 실패");
  }
}

loginBtn.addEventListener("click", handleLoginValidation);
