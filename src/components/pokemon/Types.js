const Types = ({ type }) => {
  return (
    <div>
      <h3>{type.length < 2 ? 'Type:' : 'Types:'}</h3>
      <ul>
        {type.map((type) => {
          return <li>{type}</li>;
        })}
      </ul>
    </div>
  );
};

export default Types;
