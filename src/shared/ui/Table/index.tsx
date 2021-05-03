import React, { isValidElement } from 'react'
import { FlatList, View, Text, ViewProps, FlatListProps } from 'react-native'
import { styles } from './useStyles'

export interface TableProps<T> {
  body: T[],
  renderHead?: JSX.Element
  renderBodyItem: (item: T) => JSX.Element,
  keyBodyExtractor: (item: T) => string
}

export function Table<T>({ body, keyBodyExtractor, renderBodyItem, renderHead }: TableProps<T>) {
  return (
    <View style={styles.table}>
      {renderHead}
      <FlatList
        data={body}
        renderItem={({ item }) => renderBodyItem(item)}
        keyExtractor={keyBodyExtractor}
      />
    </View>
  )
}

export const TableRow: React.FC<ViewProps> = ({ children, style, ...props }) => (
  <View style={[styles.row, style]} {...props}>
    {children}
  </View>
)

export const TableCol: React.FC<ViewProps> = ({ children, style, ...props }) => (
  <View style={[styles.col, style]} {...props}>
    {isValidElement(children) ? children : <Text>{children}</Text>}
  </View>
)