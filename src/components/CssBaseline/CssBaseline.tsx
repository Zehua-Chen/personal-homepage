import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    "@global": {
      html: {
        // NOTE:
        // We disable these two options because they cause font
        // to look extremly thin on Mac after macOS Mojave
        // WebkitFontSmoothing: "antialiased", // Antialiasing.
        // MozOsxFontSmoothing: "grayscale", // Antialiasing.
        // Change from `box-sizing: content-box` so that `width`
        // is not affected by `padding` or `border`.
        boxSizing: "border-box",
      },
      "*, *::before, *::after": {
        boxSizing: "inherit",
      },
      "strong, b": {
        fontWeight: "bolder",
      },
      body: {
        margin: 0, // Remove the margin in all browsers.
        color: theme.palette.text.primary,
        ...theme.typography.body2,
        // Set in layout
        // backgroundColor: theme.palette.background.default,
        "@media print": {
          // Save printer ink.
          backgroundColor: theme.palette.common.white,
        },
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        "&::backdrop": {
          backgroundColor: theme.palette.background.default,
        },
      },
    },
  });

const useStyles = makeStyles(styles);

/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */
function CssBaseline(props: any) {
  const { children = null } = props;
  useStyles();
  return <React.Fragment>{children}</React.Fragment>;
}

export default CssBaseline;
