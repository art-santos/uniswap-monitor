import { Box, Button } from '@material-ui/core';
import React from 'react';
import TableComponentWeb3 from '../components/layout/Table/TableWeb3';

import FlexHeading from '../components/layout/flex/flex';
import getContractTransactions from '../lib/web3/getContractTransactions';
import getWebSocketsData from '../lib/web3/webSocket';

export default function Web3Page(){
    const [transactions, setTransactions] = React.useState({});
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [webSocketData, setWebsocketData] = React.useState([]);

// getting the transactions from the contract
    const getTransactions = async () => {
        setLoading(true);
        const transactions = await getContractTransactions();
        setTransactions({
            swap: transactions,
            add: [],
            remove: transactions,
        });
        setData(transactions.swap);
        setLoading(false);
    }

    
    React.useEffect(() => {
        getTransactions();
    }, []);

    React.useEffect(() => {
        setData(transactions.swap);
    }, [transactions]);

    React.useEffect(() => {
       async function test (){
        await getWebSocketsData({ webSocketData, setWebsocketData });
       }
        test();
    }, []);

    if(loading){
        return (
            <React.Fragment>
                <FlexHeading heading={'Loading...'} />
            </React.Fragment>
        )
    }

    return(
        <>
        <React.Fragment>
            <FlexHeading heading={'All Transactions Web3'} />
            <Box>
            <Button onClick={() => {setData(transactions.swap)}}>Swaps</Button>
            <Button onClick={() => {setData(transactions.add)}}>Add liquidity</Button>
            <Button onClick={() => {setData(transactions.remove)}}>Remove liquidity</Button>
            </Box>
            <TableComponentWeb3 data={data} webSocketData={webSocketData}/>
        </React.Fragment>
        </>
    )
}