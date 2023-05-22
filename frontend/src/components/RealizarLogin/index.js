import React from 'react';

import './style.js';
import {
  ButtonInputSolicita,
  Content,
  InputSolicita,
  ModalContainer
} from './style.js';

const ModalRealizaLogin = ({
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
          <h2>Realizar Login</h2>

          <form>
            <label>
              <InputSolicita type="text" placeholder='Informe seu Nome' />
            </label>
            <label>
              <InputSolicita type="password" placeholder='Informe sua senha' />
            </label>
            <label>
              <ButtonInputSolicita type="button">Realizar Login</ButtonInputSolicita>
            </label>
          </form>
        </Content>
      </div>
    </ModalContainer>
  );
}

export default ModalRealizaLogin;