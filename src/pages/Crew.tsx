import React, { useState } from "react";
import "../styles/Crew.css"; // Import styles
import character1Img from "../assets/Mahalia.png";
import character2Img from "../assets/Tom.png";
import character3Img from "../assets/Jacquiline.png";
import crew1Img from "../assets/Richard.png";
import crew2Img from "../assets/Tim.png";
import crew3Img from "../assets/Oscar.png";
import crew4Img from "../assets/Nin.png";
import crew5Img from "../assets/Mark.png";
import crew6Img from "../assets/Zac.png";

interface Member {
  name: string;
  shortBio: string;
  fullBio: string;
  image: string;
}

const castMembers: Member[] = [
  {
    name: "Mahalia Brown",
    shortBio: "Actor - Kelly",
    fullBio:
      "Mahalia has had roles on a wide range of network TV shows and films. Most recently, she appeared on Australia’s longest-running drama Neighbours as recurring role Cherie Reyner, which developed into a main character for the spin-off series Erinsborough High. Mahalia’s role in the film Trypophobia received critical acclaim, taking out the Best Actor award at multiple film festivals. Other credits include Utopia, Twentysomething, The Slap, Bed of Roses, Winners and Losers, and Footballer Wants A Wife.",
    image: character1Img,
  },
  {
    name: "Tom Armstrong",
    shortBio: "Actor - Keith",
    fullBio:
      "Tom is a comedian, creator and podcaster. After years of viral comedy videos online, Tom performed in his one man show Worry Wart at the Melbourne Comedy Festival. Tom recently made international news by pranking celebrities on the shout out app Cameo.Tom’s online work as The Roundabout Crew has also amassed a large following on Facebook and Instagram, gaining millions of views online.",
    image: character2Img,
  },
  {
    name: "Jacqueline Mifsud",
    shortBio: "Actor - Jilly",
    fullBio:
      "Jacqueline is a comedian, actor, writer and TV and radio host on JOY94.9’s Jacq and Dene show. She recently performed her stand up show Red Hot at the Melbourne Comedy Festival. Jacqueline developed her comedic style and quick wit over four years while working as a tour guide in Paris. Now based in Melbourne, Jacqueline travels about doing jokes at Fringe and Comedy festivals Australia wide. In 2019, her show Perfect was awarded Best of the Fest at Fringe at Edge of the World in Tasmania.",
    image: character3Img,
  },
];

const crewMembers: Member[] = [
  {
    name: "Richard Di Gregorio",
    shortBio: "Executive Producer",
    fullBio:
      "A member of SPA (Screen Producers Australia), Richard writes & produces content for Peregrine Productions. He produced the short film Clap, which had its World Premiere at Flickerfest 2020. At the Australian Women’s Film Festival 2021, Clap won 5 awards including Best Film & Best Drama. It was also nominated for Best World Short and Best Actor at the Soho International Film Festival 2020 (NYC). He produced the True Crime podcast series Killing Phar Lap: A Forensic Investigation, receiving a nomination for Best True Crime Podcast at the Australian Podcast Awards 2021. His short film Hangry won Best World Short at the Soho International Film Festival (NYC). His feature documentary Commedia dell’ Arte: The Story The Style, acquired distribution by Films Media Group (USA) and became a best seller.",
    image: crew1Img,
  },
  {
    name: "Tim Evans",
    shortBio: "Writer / Director",
    fullBio:
      "Timothy Llewellyn Evans is an award-winning writer and composer. His films, ads and music have appeared at the St Kilda Film Festival, late night on SBS, and worldwide. Rising to fame in the late 90's as one of the original Qantas kids, he has parlayed that success into literally tens of views on his Youtube channel. Known for his out-of-the-box wine ideas and penchant for pointless pettifoggery, he is survived by his two children and obsolete DVD collection.",
    image: crew2Img,
  },
  {
    name: "Oscar Thorborg",
    shortBio: "Co-Director / Try Hard",
    fullBio:
      "Oscar came into this world ahead of schedule and under budget, and nothing has changed. Raised on a steady diet of United Nations ration packs and genre films, he possesses an almost erotically adept mastery of cinematic form and technique. Director of award winning short films about haunted couches, haunted bathtubs, haunted toasters, haunted cupboards, haunted hands and also avocados; he has been an integral multi-hyphenate force at the award-winning Guerilla Creative production house for 10% of a century.",
    image: crew3Img,
  },
  {
    name: "Niniane Le Page",
    shortBio: "Character Design / Illustrator",
    fullBio:
      "Niniane Le Page is a writer, illustrator and performer. As a writer, she wrote, co-produced and illustrated the art work for the best selling documentary Commedia dell’Arte: The Story The Style, distributed by Films Media Group (USA). She has also written, directed and performed children’s theatrical shows, bringing the art of Commedia dell’ Arte to thousands of children across Australia. She designed the animated character of ‘Billy’ for the Parliament of Victoria’s Intranet and has developed character work for other corporate clients, including the City of Boroondara. She is currently illustrating a children’s book she has written and working as lead character designer for Under Koalafied.",
    image: crew4Img,
  },
  {
    name: "Mark Valerio",
    shortBio: "Animator",
    fullBio:
      "Mark Daniel Valerio, a Filipino native, discovered his passion for animation during his time as an IT student in college, inspired by the work of his peers. He went on to study and earn a degree in Multimedia Arts, specialising in Digital Animation. Mark took an internship at FunGuy as a Graphic Artist. It was here that he took his first steps into the dynamic world of animation. In 2018, he worked at the Philippine Animation Studio before moving to Xentrix Toons in 2019, expanding his repertoire and refining his techniques over four years. In 2022, he joined ZigZag Animation Company, where he continues to work. In 2023, he was offered a position with an Australian-based company, where he continues to pursue his passion as an animator.",
    image: crew5Img,
  },
  {
    name: "Zac Callahan",
    shortBio: "Composer / Webmaster",
    fullBio:
      "Zac does Music, and maybe sometimes spends his time pretending to be a disgruntled mature-aged penguin",
    image: crew6Img,
  },
];

const Cast: React.FC = () => {
  const [flipped, setFlipped] = useState<boolean[]>(
    new Array(castMembers.length + crewMembers.length).fill(false)
  );

  const handleFlip = (index: number) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className="crew-container">
      <h1>Meet the Cast</h1>
      <div className="crew-grid">
        {castMembers.map((char, index) => (
          <div
            key={index}
            className={`crew-card ${flipped[index] ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="crew-card-inner">
              <div className="crew-card-front">
                <img src={char.image} alt={char.name} className="crew-image" />
                <h3>{char.name}</h3>
                <p>{char.shortBio}</p>
              </div>
              <div className="crew-card-back">
                <h3>{char.name}</h3>
                <p>{char.fullBio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1>Meet the Crew</h1>
      <div className="crew-grid">
        {crewMembers.map((crew, index) => (
          <div
            key={index + castMembers.length}
            className={`crew-card ${
              flipped[index + castMembers.length] ? "flipped" : ""
            }`}
            onClick={() => handleFlip(index + castMembers.length)}
          >
            <div className="crew-card-inner">
              <div className="crew-card-front">
                <img src={crew.image} alt={crew.name} className="crew-image" />
                <h3>{crew.name}</h3>
                <p>{crew.shortBio}</p>
              </div>
              <div className="crew-card-back">
                <h3>{crew.name}</h3>
                <p>{crew.fullBio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
