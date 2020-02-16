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
            There's a 'wow' moment when our users try Bromane. Sharing that
            experience is what we love most and why we hope you'll love Bromane
            as much as we do.
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
