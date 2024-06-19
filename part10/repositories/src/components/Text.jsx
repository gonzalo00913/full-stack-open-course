import React from "react";
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from "./theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },

  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },

  colorTextPrimary: {
    color: theme.colors.textPrimary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },

  fontSizeNav:{
    fontSize: theme.fontSizes.nav
  },

  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },

});

const Text = ({ color, fontSize, fontWeight, navSize, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textPrimary' && styles.colorPrimary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'nav' && styles.fontSizeNav,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
}

export default Text;