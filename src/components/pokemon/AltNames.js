const AltNames = ({ name }) => {
  return (
    <div>
      <h3>alternative names</h3>
      <ul>
        <li>{name.japanese}</li>
        <li>{name.chinese}</li>
        <li>{name.french}</li>
      </ul>
    </div>
  );
};

export default AltNames;
