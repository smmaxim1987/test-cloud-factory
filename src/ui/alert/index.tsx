import React, { isValidElement } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export interface AlertProps {
  severity: "success" | "error" | "info" | "warning";
  children: React.ReactNode;
}

export function Alert({ severity, children, ...props }: AlertProps) {
  const currentSeverity = (variant: string) => {
    switch (variant) {
      case "success":
        return styles.success;
      case "error":
        return styles.error;
      case "info":
        return styles.info;
      case "warning":
        return styles.warning;
    }
  };

  return (
    <View style={[styles.root, currentSeverity(severity)]}>
      {isValidElement(children) ? (
        children
      ) : (
        <Text style={[styles.text, currentSeverity(severity)]}>{children}</Text>
      )}
    </View>
  );
}
