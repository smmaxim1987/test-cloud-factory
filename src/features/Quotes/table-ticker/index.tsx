import React from "react";
import { Table, TableCol, TableRow } from "ui";
import { ViewProps } from "react-native";
import { Ticker } from "shared/interfaces";
import { styles } from "./styles";
import { formatNumber } from "utills";

export interface QuotetsTableTickerProps extends ViewProps {
  items: Ticker[];
}

export function QuotetsTableTicker({
  items = [],
  style,
}: QuotetsTableTickerProps) {
  return (
    <Table
      renderHead={
        <TableRow style={styles.head}>
          {["Name", "amnt", "open", "low", "high", "close"].map((name) => (
            <TableCol textProps={{ style: styles.headText }} key={name}>
              {name}
            </TableCol>
          ))}
        </TableRow>
      }
      bodyData={items}
      renderBodyItem={(item) => (
        <TableRow>
          <TableCol>{item.displayName}</TableCol>
          <TableCol>{formatNumber(Number(item.amount))}</TableCol>
          <TableCol>{formatNumber(Number(item.open))}</TableCol>
          <TableCol>{formatNumber(Number(item.low))}</TableCol>
          <TableCol>{formatNumber(Number(item.high))}</TableCol>
          <TableCol>{formatNumber(Number(item.close))}</TableCol>
        </TableRow>
      )}
      style={style}
      keyBodyExtractor={(item) => item.displayName}
    />
  );
}
