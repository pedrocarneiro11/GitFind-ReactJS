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
        </div>
      </div>
    </div>
  );
}

export default App;
