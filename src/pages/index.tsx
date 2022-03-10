import React from 'react';

import Table from '../components/layout/elements/Table';

import FlexHeading from '../components/layout/flex/flex';

import { useQuery } from '@apollo/client';
import ALL_TRANSACTIONS_QUERY from '../../queries/AllTransactions';


const Index = () => {
  const { loading, error, data } = useQuery(ALL_TRANSACTIONS_QUERY);

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
