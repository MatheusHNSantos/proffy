import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHoiRfm04dbeg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=1lLQ_wWyUse2eqQg4hRjiDZxgkKxsmgDLEe_xbWSEvg" alt="Matheus Henrique"/>
        <div>
          <strong>Matheus Henrique</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Teste Teste Teste TesteTeste TesteTeste TesteTeste.
        <br/> <br/>
        Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>

    </article>
  );
}

export default TeacherItem;