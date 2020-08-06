import React from "react";
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/15204813?s=460&u=ac00a0db49f5790a5625b62ff2255bef62dd4e5d&v=4"
          alt="Luís Netto"
        />
        <div>
          <strong>Luís Netto</strong>
          <span>Teste</span>
        </div>
      </header>

      <p>
        Teste
        <br />
        <br />
        Teste
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}
export default TeacherItem;