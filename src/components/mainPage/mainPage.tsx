import { useState } from "react";
import RandomChar from "./randomChar/RandomChar";
import { CharList } from "./charList/CharList";
import { CharInfo } from "./charInfo/CharInfo";

import decoration from "../../resources/img/vision.png";
import "./mainPage.scss";

export const MainPage = () => {
  const [char, setChar] = useState(null);
  const onCharSelected = (id) => {
    setChar(id);
  };

  return (
    <div>
      <RandomChar />
      <div className="char__content">
        <CharList onCharSelected={onCharSelected} />
        <CharInfo charId={char} />
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </div>
  );
};
