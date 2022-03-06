import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import tableStyles from './Styles';
import moment from 'moment';

export default function TableComponent({ swapApiData }) {
  const classes = tableStyles();
  const data = swapApiData.swaps;

  const getTime = (time) => {
    const dateObj = new Date(time * 1000);
    const now = new Date();
    const seconds = (now.getTime() - dateObj.getTime()) / 1000;
    const finalTime = moment().subtract(seconds, 'seconds').calendar();
    return finalTime;
  };

  const getTransaction = (token0) => {
    return parseInt(token0) === 0 ? 'ETH for USDC' : 'USDC for ETH';
  };

  console.log(getTime());
  console.log(data);
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
          {data.map((transaction) => {
            return (
              <TableRow key={transaction.id}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.TableCell}
                >
                  {getTransaction(transaction.amount0In)}
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  ${Math.floor(transaction.amountUSD * 100) / 100}
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  {transaction.amount0In == 0
                    ? Math.floor(transaction.amount0Out * 100) / 100
                    : Math.floor(transaction.amount1In * 100) / 100} USDC
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  {transaction.amount1In == 0
                    ? Math.floor(transaction.amount1Out * 100) / 100
                    : Math.floor(transaction.amount1In * 100) / 100} ETH
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  {transaction.to}
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  {getTime(transaction.transaction.timestamp)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

TableComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
