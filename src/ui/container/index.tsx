import React from "react";
import { View, ViewProps } from "react-native";
import { styles } from "./styles";

export interface ContainerProps extends ViewProps {}

export const Container: React.FC<ContainerProps> = ({
  style,
  children,
  ...props
}) => (
  <View style={[styles.root, style]} {...props}>
    {children}
  </View>
);
