import {useState} from 'react';
import {} from '../../components/Header';
import { Header } from '../../components/Header';
import logo from '../../assets/logo2.png';
import ItemList from '../../components/ItemList';
import "./styles.css"

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setcurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    console.log (newUser);

    if(newUser.name) {
      const {avatar_url, name, bio} = newUser;
      setcurrentUser({avatar_url, name, bio});

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length){
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={logo} className="gitHubLogo" alt="GitHub Logo"></img>
        <div className="informacoes">
          <div>
            <input
             name="usuario"
             value={user}
             onChange={event => setUser(event.target.value)} 
             placeholder="@username">
             </input>

            <button onClick={handleGetData}>Buscar</button>

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
          <div>
            <h4 className='repositorio'>Repositórios</h4>
            <ItemList title="Teste1" description="teste de descricao"></ItemList>
            <ItemList title="Teste1" description="teste de descricao"></ItemList>
            <ItemList title="Teste1" description="teste de descricao"></ItemList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
