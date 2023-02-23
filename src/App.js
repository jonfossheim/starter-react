import { pkmn } from './utils/pkmn';
import Card from './components/pokemon/Card';
import './styles/main.css';

const App = () => {
  let isDay = true;

  if (!isDay) {
    return <h1>Come Back During The Day</h1>;
  }

  return (
    <>
      <h1>{isDay ? 'God Dag' : 'God Kveld'}</h1>
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
