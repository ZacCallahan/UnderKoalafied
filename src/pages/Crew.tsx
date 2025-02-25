interface CrewMember {
  name: string;
  bio: string;
}

const characters: CrewMember[] = [
  { name: "Character 1", bio: "This is character 1." },
  { name: "Character 2", bio: "This is character 2." },
];

const Crew: React.FC = () => {
  return (
    <div>
      <h2>Meet the Characters</h2>
      {characters.map((char, index) => (
        <div key={index}>
          <h3>{char.name}</h3>
          <p>{char.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Crew; // Ensure the default export
