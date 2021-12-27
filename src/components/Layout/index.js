import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "grommet";
import Theme from "../Theme";

const ALTAIR_CROWNLOAN_PATH = "/altair/crowdloan";
const PARACHAIN_PATH = "/parachain";

const showEmailSubscription = (pathname = "") =>
  [ALTAIR_CROWNLOAN_PATH, PARACHAIN_PATH].reduce(
    (acc, path) => acc && !pathname.startsWith(path),
    true
  );

const Layout = ({ dark, children, location }) => {
  return (
    <Theme>
      <ThemeContext.Extend value={{ dark }}>
        <main>{children}</main>
      </ThemeContext.Extend>
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
