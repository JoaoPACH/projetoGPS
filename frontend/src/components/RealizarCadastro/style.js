import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  
  .container {
    background-color: #FFFFFF;
    color: #000000;
    width: 60%;
    height: 60%;
    border-radius: 20px;

    .close {
      background-color: transparent;
      border: none;
      outline: none;
      width: 32px;
      height: 32px;

      right: calc(-100% + 64px);
      top: 16px;
      cursor: pointer;
      display: flex;
      position: relative;
      align-items: center;

      &:before,
      &:after {
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: #000000;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
  }
`;

export const Content = styled.div`
  height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const InputSolicita = styled.input`
  width: 300px;
  height: 5vh;

  font-size: 16px;
  
  padding: 20px 12px;
  margin: 16px auto;

  display: flex;
  flex-direction: column;
`;

export const ButtonInputSolicita = styled.button`
  width: 300px;
  height: 5vh;

  background-color: #F9CB24;
  color: #000000;
  border: none;
  border-radius: 8px;

  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  
  padding: 20px 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InformaCidade = styled.select`
  width: 300px;
  height: 4vh;

  font-size: 16px;

  padding: 0 12px;
  margin: 16px auto;

  display: flex;
  text-align: left;
`
