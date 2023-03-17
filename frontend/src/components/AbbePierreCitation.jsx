import React, { useState, useEffect } from "react";

const citations = [
  "La charité n'est pas une vertu aisée. On croit la pratiquer quand on ne fait que la sentir.",
  "On ne guérit pas les plaies de l'homme avec de l'argent, mais avec de l'amour.",
  "Le propre de l'amour est de désirer être aimé.",
  "Le plus grand malheur aujourd'hui, c'est l'indifférence.",
  "On ne donne pas pour recevoir, on donne parce que ça fait du bien de donner.",
  "Il n'y a pas de hasard, il n'y a que des rendez-vous.",
  "Le contraire de la misère, ce n'est pas la richesse. Le contraire de la misère, c'est le partage",
  "Trop de pauvreté, tant de richesses, l'urgence est au partage",
  "On n'existe que par la rencontre",
  "La misère n'est pas une fatalité, elle vient de notre incapacité à penser le partage",
];

function AbbePierreCitation() {
  const [citation, setCitation] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * citations.length);
    const randomCitation = citations[randomIndex];
    setCitation(randomCitation);
  }, []);

  return (
    <div>
      <p className="  pl-10 font-caveat font font-semibold tracking-wider text-4xl text-white">
        "{citation}"<br /> Abbé Pierre
      </p>
    </div>
  );
}

export default AbbePierreCitation;
