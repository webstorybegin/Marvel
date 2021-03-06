import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <ErrorMessage />
      <p style={{ fontSize: 50, textAlign: "center", marginBottom: 20 }}>
        Page doesn`t exist
      </p>
      <NavLink
        to="/Marvel"
        style={{
          fontSize: 18,
          textTransform: "uppercase",
          textAlign: "center",
          marginLeft: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        Back to main page
      </NavLink>
    </>
  );
};

export default Page404;
