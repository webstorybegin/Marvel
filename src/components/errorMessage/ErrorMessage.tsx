/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />
import errorImg from "./error.gif";

export const ErrorMessage = () => {
  return (
    <img
      style={{
        display: "block",
        width: "250px",
        height: "250px",
        objectFit: "contain",
        margin: "0 auto",
      }}
      alt="error"
      src={errorImg}
    />
  );
};
