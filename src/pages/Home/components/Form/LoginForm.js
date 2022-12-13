import styled from "styled-components";
import Button from "components/Button/Button";
import { flexCenter } from "styles/common";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


function LoginForm() {

    

    const navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [emailvalid, setEmailvalid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);


    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
        const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
        if(emailRegEx.test(Email)) {
          setEmailvalid(true);
        } else {
          setEmailvalid(false);
        }
    };
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
        const passwordRegEx = /^[A-Za-z0-9]{8,}$/
        if(passwordRegEx.test(Password)) {
          setPasswordValid(true);
        } else {
          setPasswordValid(false);
        }
    };
    const onConfirmPassword = (e) => {
        setConfirmPassword(e.currentTarget.value);
    };

    const onLoginSubmit = (e) => {
        e.preventDefault();
        navigate("/SignUpForm");
    };

    useEffect(() => {
      if(emailvalid && passwordValid) {
        setNotAllow(false);
        return
      }
      setNotAllow(true);
    },[emailvalid, passwordValid])


    return (
        <S.Form onSubmit={onLoginSubmit}>
            <S.InputBox>
                <input
                    type="text"
                    placeholder="Email"
                    value={Email}
                    onChange={onEmailHandler}
                />
                <span>이메일</span>
                <div className="errorMessageWrap">
                  {!emailvalid && emailvalid.length > 0 && (
                    <div>올바른 이메일을 입력해주세요</div>
                  )}
                </div>
            </S.InputBox>
            <S.InputBox>
                <input
                    type="password"
                    placeholder="비밀번호 8글자 이상"
                    value={Password}
                    onChange={onPasswordHandler}
                />
                <span>암호</span>
                <div className="errorMessageWrap">
                    {! passwordValid && passwordValid.length > 0 && (
                      <div>8자 이상 입력해주세요</div>
                    )}
                </div>
            </S.InputBox>
            <S.InputBox>
                <input
                    type="password"
                    placeholder="암호 확인"
                    value={ConfirmPassword}
                    onChange={onConfirmPassword}
                />
                <span>암호 확인</span>
            </S.InputBox>
            <div className="errorMessageWrap">비밀번호 확인이 일치하지 않습니다</div>
            <div>
              <button disabled={notAllow} className="bottomButton">

              </button>
            </div>
            <Button variant="primary" size="full">
                회원가입
            </Button>
        </S.Form>
    );
}
export default LoginForm;

const Form = styled.form`
    width: 360px;
    background-color: ${({ theme }) => theme.palette.white};
    ${flexCenter};
    flex-direction: column;
    padding: 32px 0 0 0;
`;

const InputBox = styled.div`
    width: 80%;
    height: 48px;
    ${flexCenter};
    position: relative;
    margin-bottom: 16px;

    & input {
        width: 100%;
        border: 1px solid #999;
        border-radius: 5px;
        height: 100%;
        text-align: center;
    }

    & span {
        position: absolute;
        left: 15px;
        top: -5px;
        font-size: ${({ theme }) => theme.fontSize.small};
        background-color: ${({ theme }) => theme.palette.white};
        z-index: 1;
        padding: 0 5px;
    }
`;

const S = {
    Form,
    InputBox,
};
