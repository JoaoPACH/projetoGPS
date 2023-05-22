//DESENVOLVER A PÁGINA INICIAL DA APLICAÇÃO

import React, { useState } from 'react';

import ModalSolicitaCarona from '../SolicitaCarona/index';
import ModalRealizaCadastro from '../RealizarCadastro/index';
import ModalRealizaLogin from '../RealizarLogin/index';

import './style.js';
import {
  AreaButtonsHeader,
  HeaderContainer,
  Dobra1,
  ButtonD1,
  Dobra2,
  Dobra3,
  SolucaoDobra3,
  Dobra4,
  Dobra5,
  Rodape,
  ButtonRealizaLogin,
  ButtonRealizaCadastro
} from './style.js';

export default function Header(){
  const [isModalSolicitaCaronaVisible, setIsModalSolicitaCaronaVisible] = useState(false);
  const [isModalRealizaCadastroVisible, setIsModalRealizaCadastroVisible ] = useState(false);
  const [isModalRealizaLoginVisible, setIsModalRealizaLoginVisible ] = useState(false);

  return(
    <>
      <AreaButtonsHeader>
        <ButtonRealizaCadastro onClick={ () => setIsModalRealizaCadastroVisible(true) }>
          Realizar Cadastro
        </ButtonRealizaCadastro>
        { isModalRealizaCadastroVisible ? (
          <ModalRealizaCadastro onClose={ () => setIsModalRealizaCadastroVisible(false) } />
        ) : null }
        <ButtonRealizaLogin onClick={ () => setIsModalRealizaLoginVisible(true) }>
          Realizar Login
        </ButtonRealizaLogin>
        { isModalRealizaLoginVisible ? (
          <ModalRealizaLogin onClose={ () => setIsModalRealizaLoginVisible(false) } />
        ) : null }
      </AreaButtonsHeader>

      <HeaderContainer>
        <Dobra1>
          <h1>
            Garanta mais conforto <br />
            e segurança nas <br />
            suas viagens 
          </h1>
          <ButtonD1 onClick={ () => setIsModalSolicitaCaronaVisible(true) }>
            Consultar Viagem
          </ButtonD1>
          { isModalSolicitaCaronaVisible ? (
            <ModalSolicitaCarona onClose = {() => setIsModalSolicitaCaronaVisible(false) } />
          ) : null }
        </Dobra1>
      </HeaderContainer>
      <Dobra2>
        <h3>Economize tempo e dinheiro</h3>
        <h3>Ganhe conforto e segurança</h3>
        <h3>Sustentabilidade e meio ambiente</h3>
      </Dobra2>
      <Dobra3>
          <h1>
            DOR PRINCIPAL DO CLIENTE
          </h1>
          <SolucaoDobra3>
            <div>
              <h2>
                Solução 01
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh quis velit iaculis bibendum non sit amet leo.
              </p>
            </div>
            <div>
              <h2>
                Solução 02
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh quis velit iaculis bibendum non sit amet leo.
              </p>
            </div>
            <div>
              <h2>
                Solução 03
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh quis velit iaculis bibendum non sit amet leo.
              </p>
            </div>
            <div>
              <h2>
                Solução 04
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh quis velit iaculis bibendum non sit amet leo.
              </p>
            </div>
          </SolucaoDobra3>
      </Dobra3>
      <Dobra4>
        <h1>
          MOCKUP DO APLICATIVO, OU FOTO RELACIONADA A CARONA.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh quis velit iaculis bibendum non sit amet leo.
        </p>
      </Dobra4>
      <Dobra5>
        <div>
          <h2>
            João Pacheco
            <h4>
              Cornélio Procópio
            </h4>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh quis velit iaculis bibendum non sit amet leo.
          </p>
        </div>
        <div>
          <h2>
            João Pacheco
            <h4>
              Londrina
            </h4>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh quis velit iaculis bibendum non sit amet leo.
          </p>
        </div>
        <div>
          <h2>
            João Pacheco
            <h4>
              Bandeirantes
            </h4>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nibh quis velit iaculis bibendum non sit amet leo.
          </p>
        </div>
      </Dobra5>
      <Rodape>
        <h4>
          Copyright © 2023 | Todos os direitos reservados
        </h4>
      </Rodape>
    </>
  );
}