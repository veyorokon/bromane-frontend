import React from "react";
import manHair from "assets/img/combing-hair-compressed.jpeg";
import * as S from "./styled";

class Mission extends React.Component {
  render() {
    return (
      <S.MissionWrapper
        maxHeight={[
          "50rem",
          "50rem",
          "55rem",
          "55rem",
          "55rem",
          "55rem",
          "60rem"
        ]}
        bg="purple.1"
      >
        <S.TextWrapper
          width={["100%", "100%", "100%", "50%"]}
          fontSize={["2rem"]}
          h="100%"
          mt={["3%", "3%", "3%", "8%"]}
        >
          <S.Text>
            You've probably noticed the signs: thinning hair, a receding
            hairline or maybe your dad is bald. We know how depressing hair loss
            can be. But dude. Now you can reclaim your mane.
          </S.Text>
        </S.TextWrapper>
        <S.Image
          width={["75vw", "75vw", "60w", "50vw", "50vw", "40vw"]}
          src={manHair}
        />
      </S.MissionWrapper>
    );
  }
}

export default Mission;
