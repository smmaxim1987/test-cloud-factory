import React, { isValidElement } from "react";
import { View, Text } from "react-native";
import { styles } from "./useStyles";

export interface AlertProps {
  severity: "success" | "error" | "info" | "warning";
}

export const Alert: React.FC<AlertProps> = ({
  severity,
  children,
  ...props
}) => {
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
};
