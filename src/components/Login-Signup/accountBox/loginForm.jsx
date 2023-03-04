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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email/ Số điện thoại" />
        <Input type="password" placeholder="Mật khẩu" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">Quên mật khẩu?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit">Đăng nhập</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Bạn mới biết đến Apart?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Đăng kí
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
