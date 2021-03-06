import React, { useMemo } from "react";
import { Table, TableCol, TableRow } from "@shared/ui";
import { ViewProps } from "react-native";
import { TickerType } from "@shared/interfaces";
import { styles } from "./useStyles";

export interface QuotetsTableTickerProps extends ViewProps {
  items: Record<string, TickerType>;
}

interface ITicker extends TickerType {
  name: string;
}

export const QuotetsTableTicker: React.FC<QuotetsTableTickerProps> = ({
  items = [],
  style,
}) => {
  const tickerItems: ITicker[] = useMemo(
    () =>
      Object.entries(items).length > 0
        ? Object.entries(items).map((item) => ({ name: item[0], ...item[1] }))
        : [],
    [items]
  );
  const formatNumber = (value: number): string => value.toFixed(2);

  return (
    <>
      <Table
        renderHead={
          <TableRow style={styles.head}>
            {["Name", "Last", "Highest Bid", "Percent Change"].map((name) => (
              <TableCol textProps={{ style: styles.headText }} key={name}>
                {name}
              </TableCol>
            ))}
          </TableRow>
        }
        bodyData={tickerItems}
        renderBodyItem={(item) => (
          <TableRow>
            <TableCol>{item.name}</TableCol>
            <TableCol>{formatNumber(+item.last)}</TableCol>
            <TableCol>{formatNumber(+item.highestBid)}</TableCol>
            <TableCol>{formatNumber(+item.percentChange)}</TableCol>
          </TableRow>
        )}
        style={style}
        keyBodyExtractor={(item) => item.name}
      />
    </>
  );
};
