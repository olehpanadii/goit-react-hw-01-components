import { Table, HeadWrapper, TableBody } from "./TransactionHistory.styled"

export const TransactionHistory = ({transactions}) => {
    return <Table >
  <HeadWrapper>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </HeadWrapper>

  <TableBody>
            {transactions.map(({ id, type, amount, currency }) => (
                <tr key={ id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
             </tr>))}
  </TableBody>
</Table>
}

