export default function App() {
  return (
    <div className="app">

      <img src="/react.png" alt="React" />
      <h1>React</h1>
      <p>A biblioteca para interfaces de usuário web e nativas.</p>

      <div>                                  {/* Foi usado essa div para os BOTÕES quebrarem de linha */}
        <button>Aprenda React</button> 
        <button>Referência da API</button>
      </div>

      <hr />

      <h2>Crie interfaces de usuários de componentes</h2>
      <p>React permite que você contrua interfaces de usuário a partir de pedaços individuais chamados componentes</p>
      <hr />

      <h2>Escreva componentes com código e marcação</h2>
      <p>Componentes React são funções JavaScript. A sintaxe de marcação é chamada de JSX. É uma extensão de sintaxe JavaScript popularizada pelo React.</p>
      <hr />

      <h2>Proximos passos</h2>

      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
      </ul>

    </div>
  )
}