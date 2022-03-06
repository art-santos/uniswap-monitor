import { gql } from '@apollo/client';

const ALL_TRANSACTIONS_QUERY = gql`
{
    swaps(first: 84, where: { pair: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc" } orderBy: timestamp, orderDirection: desc) {
      transaction {
        id
        timestamp
      }
      id
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      amount0In
      amount0Out
      amount1In
      amount1Out
      amountUSD
      to
    }
}
`;

export default ALL_TRANSACTIONS_QUERY;