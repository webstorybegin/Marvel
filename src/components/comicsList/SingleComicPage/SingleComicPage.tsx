import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useMarvelService } from "../../../services/useMarvelService";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";

import { makeStyles } from "@material-ui/styles";
import { Spinner } from "../../ui/Spinner/Spinner";

const useStyles = makeStyles({
  text: {
    "& p": {
      marginBottom: 20,
    },
    "& a": {
      width: 100,
      padding: 15,
      background: "red",
      borderRadius: 10,
      color: "#fff",
      fontSize: 14,
      textAlign: "center",
    },
  },
});

const SingleComicPage = () => {
  const [comic, setComic] = useState(null);
  const { comicId } = useParams();
  const { loading, error, getComic, clearError } = useMarvelService();

  useEffect(() => {
    updComic();
  }, [comicId]);

  const updComic = () => {
    if (!comicId) {
      return;
    }

    clearError();
    getComic(comicId).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ comic }: any) => {
  const { title, description, thumbnail, pageCount, language } = comic;

  const classes = useStyles();

  return (
    <div className={classes.text}>
      <img style={{ width: 325, height: 445 }} src={thumbnail} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Pages: {pageCount}</p>
      <p>Language: {language}</p>
      <Link to="/comics">Back to all</Link> 
    </div>
  );
};

export default SingleComicPage;