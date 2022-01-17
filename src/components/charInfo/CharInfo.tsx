import { useState, useEffect } from "react";
import { useMarvelService } from "../../services/useMarvelService";
import { Spinner } from "../spinner/Spinner";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import "./charInfo.scss";

export const CharInfo = ({ charId }) => {
  const [char, setChar] = useState(null);
  
  const { loading, error, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updChar();
  }, [charId]);

  const updChar = () => {
    if (!charId) {
      return;
    }

    clearError();
    getCharacter(charId)
    .then(onCharLoaded)  
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt="abyss" />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} rel="noreferrer" className="button button__main">
              <div className="inner">Homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.lenght > 0 ? null : "There is no comics with this character"}
        {comics.map((item, index) => {
          // eslint-disable-next-line
          if (item > 9) return;
          return (
            <li key={index} className="char__comics-item">
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};
