import React, { useMemo } from 'react'
import { Table, TableCol, TableRow } from '@shared/ui'
import { Ticker } from '@shared/interfaces'

export interface QuotetsTableTickerProps {
  items: Record<string, Ticker>
}

interface ITicker extends Ticker {
  name: string
}

export const QuotetsTableTicker: React.FC<QuotetsTableTickerProps> = ({
  items = []
}) => {

  const tickerItems: ITicker[] = useMemo(() => Object.entries(items).map(item => ({ name: item[0], ...item[1] })), [items])

  return (
    <Table
      body={tickerItems}
      renderHead={<TableRow>
        {['Name', 'Last', 'Highest Bid', 'Percent Change'].map(name => (
          <TableCol key={name}>{name}</TableCol>
        ))}
      </TableRow>}
      renderBodyItem={item => (
        <TableRow>
          <TableCol>{item.name}</TableCol>
          <TableCol>{item.last}</TableCol>
          <TableCol>{item.highestBid}</TableCol>
          <TableCol>{item.percentChange}</TableCol>
        </TableRow>
      )}
      keyBodyExtractor={item => item.name}
    />
  )

}