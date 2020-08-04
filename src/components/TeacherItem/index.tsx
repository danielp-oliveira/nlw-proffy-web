import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => (
  <article className='teacher-item'>
    <header>
      <img
        src='https://avatars1.githubusercontent.com/u/30359017?s=460&u=3b2e83e0b8ab82a8dda4969167b62ff4b9e533d7&v=4'
        alt='Daniel Oliveira'
      />
      <div>
        <strong>Daniel Oliveira</strong>
        <span>Química</span>
      </div>
    </header>
    <p>
      Neste sentido, o entendimento das metas propostas agrega valor ao
      estabelecimento dos procedimentos normalmente adotados.
    </p>
    <footer>
      <p>
        Preço/hora <strong>R$ 80,00</strong>
      </p>
      <button type='button'>
        <img src={whatsappIcon} alt='Whatsapp' />
        Entrar em contato
      </button>
    </footer>
  </article>
)

export default TeacherItem
