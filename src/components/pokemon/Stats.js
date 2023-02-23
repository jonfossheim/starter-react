const Stats = (props) => {
  console.log(props);
  const { stats } = props;
  const { HP, Attack, Defense, SpAttack, SpDefense, Speed } = stats;

  return (
    <div>
      <h3>Stats:</h3>
      <ul>
        <li>HP: {HP}</li>
        <li>Attack: {Attack}</li>
        <li>Defense: {Defense}</li>
        <li>Sp. Attack: {SpAttack}</li>
        <li>Sp. Defense: {SpDefense}</li>
        <li>Speed: {Speed}</li>
      </ul>
    </div>
  );
};

export default Stats;
