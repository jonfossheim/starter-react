import AltNames from './AltNames';
import Types from './Types';
import Stats from './Stats';
const Card = ({ name, type, base }) => {
  let typeClass = type[0].toLowerCase();

  return (
    <div className={'card ' + typeClass}>
      <h1>{name.english}</h1>
      <AltNames name={name} />
      <Types type={type} />
      <Stats stats={base} />
    </div>
  );
};

export default Card;
