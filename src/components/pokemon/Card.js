import AltNames from './AltNames';
import Types from './Types';
import Stats from './Stats';
const Card = ({ name, type, base }) => {
  return (
    <div className='card'>
      <h1>{name.english}</h1>
      <AltNames name={name} />
      <Types type={type} />
      <Stats stats={base} />
    </div>
  );
};

export default Card;
