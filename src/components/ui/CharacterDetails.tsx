interface CharacterDetailsProps {
  name: string;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = (props) => {
  return (
    <section>
      <h3>{props.name}</h3>
    </section>
  );
};

export default CharacterDetails;
