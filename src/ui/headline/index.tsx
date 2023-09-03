import React from "react";
import { Text, TextProps } from "react-native";
import { styles } from "./styles";

export interface HeadlineProps extends TextProps {
  title: string;
}

export const Headline: React.FC<HeadlineProps> = ({
  title = "Заголовок",
  style,
  ...props
}) => (
  <Text style={[styles.text, style]} {...props}>
    {title}
  </Text>
);
