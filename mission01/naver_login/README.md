# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

1~2번

먼저 1번 2번 과정은 로그인폼에 입력된 ID 와 PW값이 
만약 (if문 사용하기) 정규표현식으로 정의된 올바른 양식에 적합하다면 에러메세지를 띄우지 않고 적합하지 않다면 에러메세지를 띄우는 단계입니다.

ID 체크
![image](https://github.com/SEUNGJUNHWANG/js-homework/assets/148776199/07a2f3c8-71c7-4890-9889-0336a175a919)

PW 체크
![image](https://github.com/SEUNGJUNHWANG/js-homework/assets/148776199/ef9d66b4-f153-4b95-bd34-d4c83ef817af)

이 과정을 수행하기 위해 함수 emailIdValidation 과 emailPwValidation 을 만들어 정규표현식에 입력된 값이 적합한지(true) 또는 적합하지 않은지(false)에 따라
클래스 is--invalid 를 빼거나(remove) 넣어주는(add) 동작을 수행하도록 합니다.

**여기서 질문있습니다**
![캡처](https://github.com/SEUNGJUNHWANG/js-homework/assets/148776199/c18790c5-421b-4ebd-a27b-6705bdbedbe7)
저는 코드에서 클래스 is--invalid 를 remove 하고 add 하는걸 html input태그의 .user-email-input 클래스로 접근한 변수inputEmailID에 .classList.remove 또는 .classList.add 를 써서
처리해줬는데..하고나서 생각해보니 왜 inputEmailID 에서 처리하는지 모르겠습니다.
이걸 하는 이유는 입력된 값이 적절한지 아닌지 여부에 따라 에러메세지를 띄우느냐 아니냐인데 에러메세지는 span테그의 error-message라는 클래스에 존재하는데 정작 메세지가 있는 클래스가 아니라 input테그 내부의 클래스를 통해 처리하는게..이해가 잘 안됩니다.

3번
로그인 버튼을 누를시 input된 이메일 ID 와 PW 의 값에 적합 여부에 따라 다음 과정을 실행해준다.
버튼 변수에 addEventListener를 사용해서 click이라는 이벤트에 따라 로그인 완료or실패를 판별하여 그에 따른 처리를 해주는 함수를 넣어준다.
![image](https://github.com/SEUNGJUNHWANG/js-homework/assets/148776199/b4103667-ab4d-4376-9e1a-2387203819a6)








