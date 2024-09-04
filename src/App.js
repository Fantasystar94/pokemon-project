
import './style.css';
import PokemonsContainer from "./PokemonsContainer";
import Quiz from "./Quiz";
function App() {

  return (
    <div className="Wrapper">
      <h1>포켓몬 도감</h1> 
      <PokemonsContainer/>
      <Quiz/>
    </div>
  );
}

export default App;
