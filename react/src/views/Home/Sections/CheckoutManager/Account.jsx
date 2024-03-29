import React from "react";
import {Panel} from "components";
import * as S from "./styled";

export default function Account(props) {
  const handleChange = name => event => {
    props.stateChange(name, event.target.value);
  };

  return (
    <Panel {...props}>
      <S.CartSubTitle
        fontSize="1.2em"
        margin="0 auto 1rem auto"
        textAlign="center"
      >
        Welcome to Bromane!
      </S.CartSubTitle>
      <S.CartSubTitle
        margin="0 auto 3rem auto"
        fontSize="0.8em"
        textAlign="center"
      >
        What's your contact info?
      </S.CartSubTitle>

      <S.Row>
        <S.HalfInput
          required
          id="firstName"
          label="First Name"
          defaultValue={props.account.firstName}
          margin="normal"
          onChange={handleChange("firstName")}
        />

        <S.HalfInput
          required
          id="lastName"
          label="Last Name"
          defaultValue={props.account.lastName}
          margin="normal"
          onChange={handleChange("lastName")}
        />
      </S.Row>
      <S.FullInput
        required
        id="email"
        type="email"
        label="Email"
        defaultValue={props.account.email}
        margin="normal"
        onChange={handleChange("email")}
      />
    </Panel>
  );
}
