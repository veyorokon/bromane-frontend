import React from "react";
import { Panel } from "components/composite";
import * as S from "./styled";

export default function EmailSubscribe(props) {
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
        We{"'"}re almost ready to launch!
      </S.CartSubTitle>
      <S.CartSubTitle
        margin="0 auto 3rem auto"
        fontSize="0.8em"
        textAlign="center"
      >
        In the meantime, join our email list for updates.
      </S.CartSubTitle>
      <S.FullInput
        required
        id="email"
        type="email"
        label="Email"
        defaultValue=""
        margin="normal"
        onChange={handleChange("email")}
      />
    </Panel>
  );
}
