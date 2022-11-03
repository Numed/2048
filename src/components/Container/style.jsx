import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InfoTitle = styled.h2`
  font-size: 80px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #776e65;
`;

export const ScoreContainer = styled.div`
  display: flex;
  max-width: 65px;
  height: 25px;
  justify-content: center;
  align-items: center;
  background: #bbada0;
  padding: 15px 25px;
  height: 25px;
  border-radius: 3px;
  line-height: 47px;
  text-align: center;

  &:not(:first-child) {
    margin-left: 15px;
  }
`;

export const ScroreSection = styled.div`
  display: block;
  margin: 30px 0 0 120px;
`;

export const ScoreInner = styled.div`
  display: flex;
`;

export const Score = styled.h3`
  width: 100%;
  top: 10px;
  left: 0;
  text-transform: uppercase;
  font-size: 13px;
  line-height: 13px;
  text-align: center;
  color: #eee4da;
`;

export const TotalScore = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 25px;
  color: #fff;
  margin-top: 8px;
  font-weight: 700;
  transition: all 0.2s linear;
`;

export const RestartButton = styled.button`
  background: #8f7a66;
  border-radius: 3px;
  padding: 0 20px;
  text-decoration: none;
  color: #f9f6f2;
  font-weight: 600;
  height: 40px;
  line-height: 42px;
  cursor: pointer;
  border: none;
  float: right;
  margin-top: 25px;
`;

export const Board = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  background-color: #bdada0;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  border: 15px solid #bdada0;
`;

export const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 105px;
  background-color: #eee4db;
  user-select: none;
  color: #756d64;
  font-size: 50px;
  font-weight: 800;
  transition-property: left, top, transform;
  transition-duration: 250ms, 250ms, 100ms;
  transform: scale(1);

  &.no-value {
    background-color: #cdc1b3;
  }

  &.white-blank {
    background-color: #eee4da;
  }

  &.sand {
    background-color: #ede1c9;
  }

  &.orange-blank {
    background-color: #f3b27a;
    color: #f9f6f2;
  }

  &.carrot-blank {
    color: #f9f6f2;
    background: #f69664;
  }

  &.carrot {
    background-color: #f77b5f;
    color: #f9f6f2;
  }

  &.carrot-contrast {
    background-color: #f75f3b;
    color: #f9f6f2;
  }

  &.yellow-blank {
    background-color: #edd073;
    color: #f9f6f2;
    box-shadow: 0 0 30px 10px rgb(243 215 116 / 32%),
      inset 0 0 0 1px rgb(255 255 255 / 19%);
    font-size: 40px;
  }

  &.yellow {
    color: #f9f6f2;
    background: #edcc62;
    box-shadow: 0 0 30px 10px rgb(243 215 116 / 32%),
      inset 0 0 0 1px rgb(255 255 255 / 19%);
    font-size: 40px;
  }

  &.yellow-contrast {
    color: #f9f6f2;
    background: #edc53f;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619),
      inset 0 0 0 1px rgba(255, 255, 255, 0.285714);
    font-size: 40px;
  }

  &.yellow-close-max {
    background-color: #edd073;
    color: #f9f6f2;
    font-size: 40px;
  }

  &.yellow-max {
    color: #f9f6f2;
    background: #edc22e;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.555556),
      inset 0 0 0 1px rgba(255, 255, 255, 0.333333);
    font-size: 40px;
  }
`;
