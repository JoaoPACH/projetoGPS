/* ESTILO DA APLICACAO INDEX - HOME */

import styled from "styled-components";

export const AreaButtonsHeader = styled.div`
  width: 100vw;
  height: 5vh;

  padding: 32px 0;

  border-bottom: 1px solid #7CB4DC;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonRealizaCadastro = styled.div`
  margin: 8px auto;
  padding: 8px 10px;

  width: 15%;
  height: 4vh;

  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  background-color: #F9CB24;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 7px;

  cursor: pointer;

  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
`;

export const ButtonRealizaLogin = styled.div`
  margin: 8px auto;
  padding: 8px 10px;

  width: 15%;
  height: 4vh;

  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  background-color: #F9CB24;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 7px;

  cursor: pointer;

  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 72vh;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Dobra1 = styled.div`
  height: 261px;
  width: 787px;

  font-size: 24px;
  font-color: #110B11;
  text-align: center;

  justify-content: center;
  align-items: center;
`;

export const ButtonD1 = styled.button`
  margin: 42px auto;  

  width: 16vw;
  height: 7vh;

  font-size: 24px;
  text-transform: capitalize;
  font-weight: 400;
  background-color: #F9CB24;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 7px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);

  .modal-overlay {
    background: #ECECEC;
    position: fixed;
    
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    width: 90%;
    max-width: 500px;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 5px;
  }

  button {
    padding: 5px;
    font-size: large;
    float: right;
    cursor: pointer;
  }
`;

export const Dobra2 = styled.div`
  background-color: #2E5EAA;

  padding: 32px;

  font-size: 20px;
  color: #FFFEED;

  display: flex;
  direction: columns;
  align-items: center;

  h3 {
    width: 33vw;
    height: 5vh;

    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Dobra3 = styled.div`
  padding: 24px 16px;

  display: border-box;

  h1{
    margin: 32px 0;

    text-align: center;
  }

  div {
    margin: 20px;

    font-size: 20px;
    text-align: center;

    h2 {
      text-transform: uppercase;
      padding-bottom: 16px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const SolucaoDobra3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dobra4 = styled.div`
  height: 40vh;

  display: flex;
  justify-content: space-around;
  align-items: center;

  h1{
    width: 35vw;
    font-size: 20px;
    padding: 32px;
  }
  
  p{
    width: 35vw;
    font-size: 20px;
    padding: 32px;
  }
`;

export const Dobra5 = styled.div`
  border: 1px solid blue;

  height: 40vh;

  display: flex;
  justify-content: space-around;
  align-items: center;

  div{
    border: 1px solid black;

    width: 30vw;

    padding: 16px 12px;

    h2 {
      border-width: 0 0 1px 0;
      border-style: solid;
      border-color:  blue;
      
      font-size: 24px;

      display: flex;
      justify-content: space-around;
    }

    p {
      padding-top: 24px;
      
      font-size: 16px;
    }
  }
`;

export const Rodape = styled.div`
  height: 5vh;

  background-color: #F9CB24;

  color: #010421;

  display: flex;
  justify-content: center;
  align-items: center;
`


