import {
  SectionContainer,
  InfoContainer,
  InfoTitle,
  ScoreContainer,
  ScroreSection,
  ScoreInner,
  Score,
  TotalScore,
  RestartButton,
  Board,
  Square,
} from "./style";

import { useState } from "react";

const Container = () => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  return (
    <SectionContainer>
      <InfoContainer>
        <InfoTitle>2048</InfoTitle>
        <ScroreSection>
          <ScoreInner>
            <ScoreContainer>
              <Score>
                Score<TotalScore>{score}</TotalScore>
              </Score>
            </ScoreContainer>
            <ScoreContainer>
              <Score>
                Best<TotalScore>{best}</TotalScore>
              </Score>
            </ScoreContainer>
          </ScoreInner>
          <RestartButton>New Game</RestartButton>
        </ScroreSection>
      </InfoContainer>
      <Board>
        <Square className="no-value"></Square>
        <Square className="white-blank">2</Square>
        <Square className="sand">4</Square>
        <Square className="orange-blank">8</Square>
        <Square className="carrot-blank ">16</Square>
        <Square className="carrot">32</Square>
        <Square className="carrot-contast">64</Square>
        <Square className="yellow-blank">128</Square>
        <Square className="yellow">256</Square>
        <Square className="yellow-contrast">512</Square>
        <Square className="yellow-close-max ">1024</Square>
        <Square className="yellow-max">2048</Square>
        <Square className="no-value"></Square>
        <Square className="no-value"></Square>
        <Square className="no-value"></Square>
        <Square className="no-value"></Square>
      </Board>
    </SectionContainer>
  );
};

export default Container;
