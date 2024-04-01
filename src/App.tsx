import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Siga os bons e aprenda com eles.',
        'o Bom-senso vale mais do que muito conhecimento',
        'O riso é a menor distância entre duas pessoas.',
        'Deixe de lado as preocupações e seja feliz.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! bom dia, família!',
        'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!',
        'Escrever em seu coração: todo dia é o melhor dia do ano.',
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrases() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className='container'>
      <img
        alt='Logo Frases'
        src={logoImg}
        className='logo'
      />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrases.map( (item, index) => (
          <button 
          key={item.id}
          className='category-button'
          style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#1fa4db"
          }}

          onClick={ () => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className='button-frase' onClick={gerarFrases}>Gerar frase</button>

      {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p> }
    </div>
  )
}

export default App
