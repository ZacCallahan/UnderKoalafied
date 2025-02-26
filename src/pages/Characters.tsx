import React, { useState } from "react";
import "../styles/Characters.css";
import character1Img from "../assets/Kelly.png";
import character2Img from "../assets/Keith.png";
import character3Img from "../assets/Jilly.png";
import character4Img from "../assets/Penguin.png";

interface Character {
  name: string;
  shortBio: string;
  fullBio: string;
  image: string;
}

const characters: Character[] = [
  {
    name: "Kelly",
    shortBio: "Click here to learn more about Kelly",
    fullBio:
      "After bushfires destroy her rural family home, Kelly moves to the city to look for work. She resides in a flophouse with family friend Keith and snags a casual position at a call-centre. Kelly does not suffer fools gladly,although she is by nature non-confrontational, so struggles to get a leg up in the world. She has a nascent drinking problem and chlamydia.",
    image: character1Img,
  },
  {
    name: "Keith",
    shortBio: "Click here to learn more about Keith",
    fullBio:
      "The number one koala in the rap game,in his own mind. Substance abuse issues and gifted-child syndrome have hobbled Keith's attempts to make something of himself. He works various low-skilled jobs while half-heartedly pursuing his music career. As lazy as he is clever, Keith is always on the lookout for life-hacks and ways of beating the system.",
    image: character2Img,
  },
  {
    name: "Jilly",
    shortBio: "Click here to learn more about Jilly",
    fullBio:
      "If she’s not pregnant she’s doing something wrong. Gaming the welfare system with near constant childbirth, Jilly rents a small room in the Koala flophouse. She is an artist and as such, doesn't hold down a traditional 'job', but survives off the largesse of her sexual partners. Jilly has a thinking problem, but is a loyal friend.",
    image: character3Img,
  },
  {
    name: "Penguin",
    shortBio: "Click here to learn more about Penguin",
    fullBio:
      "Character 4 is an explorer, seeking new horizons and pushing limits.",
    image: character4Img,
  },
];

const Characters: React.FC = () => {
  const [flipped, setFlipped] = useState<boolean[]>(
    new Array(characters.length).fill(false)
  );

  const handleFlip = (index: number) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className="characters-container">
      <h1>Meet the Characters</h1>
      <div className="characters-grid">
        {characters.map((char, index) => (
          <div
            key={index}
            className={`character-card ${flipped[index] ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={char.image}
                  alt={char.name}
                  className="character-image"
                />
                <h3>{char.name}</h3>
                <p>{char.shortBio}</p>
              </div>
              <div className="card-back">
                <p>{char.fullBio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
