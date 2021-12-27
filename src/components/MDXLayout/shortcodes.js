import React from "react";
import { Text, Box, Image, Button, Heading, ResponsiveContext } from "grommet";
import Container from "../Container";
import FullWidthContainer from "../FullWidthContainer";

const Section = ({ children, ...rest }) => (
  <Container>
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          margin={{ vertical: size === "small" ? "xxlarge" : "xlarge" }}
          {...rest}
        >
          {children}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </Container>
);

const FullWidthSection = ({ children, ...rest }) => (
  <FullWidthContainer>
    <Box margin={{ vertical: "xlarge" }} {...rest}>
      {children}
    </Box>
  </FullWidthContainer>
);

const CustomButton = ({ label, href, align, margin, ...rest }) => (
  <Box align={align} margin={margin}>
    <Button label={label} href={href} {...rest} />
  </Box>
);

CustomButton.defaultProps = {
  align: "center",
  margin: {},
};

const ResponsiveContent = ({ breakpoints, children }) => (
  <ResponsiveContext.Consumer>
    {(size) => <>{breakpoints.indexOf(size) >= 0 ? children : null}</>}
  </ResponsiveContext.Consumer>
);

ResponsiveContent.defaultProps = {
  breakpoints: [],
};

export {
  Image,
  Text,
  Box,
  Heading,
  Section,
  FullWidthSection,
  ResponsiveContent,
};
