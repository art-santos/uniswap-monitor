import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import tableStyles from '../elements/Styles';
import { Link } from '@material-ui/core';

export default function TableComponentWeb3({ data, webSocketData }) {
  const classes = tableStyles('');

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableCell}>Swap</TableCell>
            <TableCell numeric className={classes.tableCell}>
              Total Value
            </TableCell>
            <TableCell numeric className={classes.tableCell}>
              Token Amount
            </TableCell>
            <TableCell numeric className={classes.tableCell}>
              Token Amount
            </TableCell>
            <TableCell numeric className={classes.tableCell}>
              Account
            </TableCell>
            <TableCell numeric className={classes.tableCell}>
              Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data &&
            webSocketData.map((transaction, i) => {
                return (
                <TableRow key={transaction.id}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.tableCell}
                    >
                    <Link href={`https://etherscan.io/tx/${transaction.hash}/`}>{transaction.amount0In === "0" ? "ETH to USCD" : "USCD to ETH"}</Link>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                    ${transaction.amount0In === '0' ? (transaction.amount0Out / 1000000).toFixed(2): (transaction.amount0In / 1000000).toFixed(2)}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                    {transaction.amount0Out === '0' ? (transaction.amount1Out/1000000000000000).toFixed(2) + 'ETH' : (transaction.amount0Out / 1000000).toFixed(2) + 'USDC'}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {transaction.amount0In === '0' ? (transaction.amount1In/1000000000000000).toFixed(2) + 'ETH': (transaction.amount0In / 1000000).toFixed(2) + 'USDC'}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {transaction.to}
                    </TableCell>
                    <TableCell numeric className={classes.tableCell}>
                        {transaction.time}
                    </TableCell>
                </TableRow>
                )
            })}
          {data &&
            data.map((transaction, i) => {
                return (
                <TableRow key={transaction.id}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.tableCell}
                    >
                    <Link href={`https://etherscan.io/tx/${transaction.hash}/`}>{transaction.amount0In === "0" ? "ETH to USCD" : "USCD to ETH"}</Link>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                    ${transaction.amount0In === '0' ? (transaction.amount0Out / 1000000).toFixed(2): (transaction.amount0In / 1000000).toFixed(2)}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                    {transaction.amount0Out === '0' ? (transaction.amount1Out/1000000000000000).toFixed(2) + 'ETH' : (transaction.amount0Out / 1000000).toFixed(2) + 'USDC'}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {transaction.amount0In === '0' ? (transaction.amount1In/1000000000000000).toFixed(2) + 'ETH': (transaction.amount0In / 1000000).toFixed(2) + 'USDC'}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {transaction.to}
                    </TableCell>
                    <TableCell numeric className={classes.tableCell}>
                        {transaction.time}
                    </TableCell>
                </TableRow>
                )
            })}
        </TableBody>
      </Table>
    </Paper>
  );
}

TableComponentWeb3.propTypes = {
  classes: PropTypes.object.isRequired,
};
