import { pkmn } from './utils/pkmn';
import Card from './components/pokemon/Card';
import './styles/main.css';

const App = () => {
  return (
    <>
      {pkmn.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            base={pokemon.base}
          />
        );
      })}
    </>
  );
};

export default App;
