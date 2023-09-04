import React, { isValidElement } from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";

export interface ButtonProps extends TouchableOpacityProps {}

export const Button: React.FC<ButtonProps> = ({
  style,
  children,
  ...props
}) => (
  <TouchableOpacity style={[styles.root, style]} {...props}>
    {isValidElement(children) ? children : <Text>{children}</Text>}
  </TouchableOpacity>
);
