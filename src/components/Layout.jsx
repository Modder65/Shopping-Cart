import { Header } from "./Header";
import PropTypes from "prop-types";

export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

//Prop Validation

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
