import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Họ và tên" />
        <Input type="email" placeholder="Email" />
        <Input type="phone" placeholder="Số điện thoại" />
        <Input type="password" placeholder="Mật khẩu" />
        <Input type="password" placeholder="Nhập lại mật khẩu" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Đăng ký</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Bạn đã có tài khoản?
        <BoldLink href="#" onClick={switchToSignin}>
          Đăng nhập
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
