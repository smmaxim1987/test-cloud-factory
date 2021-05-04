import React, { isValidElement } from "react";
import { FlatList, View, Text, ViewProps, TextProps } from "react-native";
import { styles } from "./useStyles";

export interface TableProps<T> extends ViewProps {
  bodyData: T[];
  renderHead?: JSX.Element;
  renderBodyItem: (item: T) => JSX.Element;
  keyBodyExtractor: (item: T) => string;
}

export function Table<T>({
  bodyData,
  keyBodyExtractor,
  renderBodyItem,
  renderHead,
  style,
}: TableProps<T>) {
  return (
    <View style={[styles.table, style]}>
      {renderHead}
      <FlatList
        data={bodyData}
        renderItem={({ item }) => renderBodyItem(item)}
        keyExtractor={keyBodyExtractor}
      />
    </View>
  );
}

export const TableRow: React.FC<ViewProps> = ({
  children,
  style,
  ...props
}) => (
  <View style={[styles.row, style]} {...props}>
    {children}
  </View>
);

export interface TableColProps extends ViewProps {
  textProps?: TextProps;
}

export const TableCol: React.FC<TableColProps> = ({
  children,
  style,
  textProps,
  ...props
}) => (
  <View style={[styles.col, style]} {...props}>
    {isValidElement(children) ? (
      children
    ) : (
      <Text {...textProps}>{children}</Text>
    )}
  </View>
);
