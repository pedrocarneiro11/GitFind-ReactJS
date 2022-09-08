import {} from '../../components/Header';
import { Header } from '../../components/Header';
import logo from '../../assets/logo2.png';
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={logo} className="gitHubLogo" alt="GitHub Logo"></img>
        <div className="informacoes">
          <div>
            <input name="usuario" placeholder="@username"></input>
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/42221151?s=400&u=fb0410100372e5ade9b81b772e5087a528fcb5a6&v=4" className="profile" alt="perfil"></img>
            <div>
              <h3>Pedro Carneiro</h3>
              <span>@pedrocarneiro11</span>
              <p>Descricao</p>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default App;
