import { FC, useState, useEffect } from "react";
import { useMarvelService } from "../../../services/useMarvelService";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";
import { Spinner } from "../../ui/Spinner/Spinner";


import mjolnir from "../../../resources/img/mjolnir.png";

import "./randomChar.scss";

interface IRandomChar {
  readonly charId?: number
}

export const RandomChar: FC<IRandomChar> = ({ charId }) => {
  const [char, setChar] = useState({});
  const { loading, error, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updChar();
  }, [charId]);

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const updChar = () => {
    clearError();
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getCharacter(id)
      .then(onCharLoaded)
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <View char={char} /> : null;

  return (
    <div className="randomchar">
      {errorMessage}
      {spinner}
      {content}
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button onClick={updChar} className="button button__main">
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
};

const View = ({ char }) => {
  const { thumbnail, name, description, homepage, wiki } = char;

  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt="Random character" className="randomchar__img" />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{description}</p>
        <div className="randomchar__btns">
          <a
            href={homepage}
            target="_blank"
            rel="noreferrer"
            className="button button__main"
          >
            <div className="inner">homepage</div>
          </a>
          <a
            href={wiki}
            target="_blank"
            rel="noreferrer"
            className="button button__secondary"
          >
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
