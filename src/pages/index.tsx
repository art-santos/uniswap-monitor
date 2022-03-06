import React from 'react';

import Table from '../components/elements/Table';

import FlexHeading from '../components/flex/flex';

import { useQuery, gql } from '@apollo/client';

const HOME_QUERY = gql`
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

const Index = () => {
  const { loading, error, data } = useQuery(HOME_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
  <React.Fragment>
  <FlexHeading heading={'All Transactions'} />
  {data &&
  <Table swapApiData={data}/>
  }
  </React.Fragment>
  );
};

export default Index;
