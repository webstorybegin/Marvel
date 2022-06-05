import { useState } from "react";
import { RandomChar } from "./RandomChar";
import { CharList } from "./CharList";
import { CharInfo } from "./CharInfo";

import decoration from "../../resources/img/vision.png";
import "./mainPage.scss";

const MainPage = () => {
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

export default MainPage;