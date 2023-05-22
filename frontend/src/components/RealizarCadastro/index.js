import React from 'react';

import './style.js';
import {
  ButtonInputSolicita,
  Content,
  InputSolicita,
  ModalContainer,
  InformaCidade
} from './style.js';

const ModalRealizarCadastro = ({
  id='modal',
  onClose = () => {}
  }) => {
  const handleOutsideClick = (e) => {
    if(e.target.id === id){
      onClose();
    }
  }
  return(
    <ModalContainer id={ id } onClick={ handleOutsideClick }>
      <div className="container">
        <button className="close" onClick={ onClose } />
        <Content>
          <h2>Realizar Cadastro</h2>

          <form>
            <label>
              <InputSolicita type="text" placeholder='Informe seu Nome' />
            </label>
            <label>
              <InputSolicita type="password" placeholder='Informe sua senha' />
            </label>
            <InformaCidade>
              <option>Cornélio Procópio</option>
              <option>Bandeirantes</option>
              <option>Londrina</option>
            </InformaCidade>
            <label>
              <ButtonInputSolicita type="button">Realizar Cadastro</ButtonInputSolicita>
            </label>
          </form>
        </Content>
      </div>
    </ModalContainer>
  );
}

export default ModalRealizarCadastro;