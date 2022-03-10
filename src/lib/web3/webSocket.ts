import getTime from "../functions/getTime";
import { wsProvider, httpProvider, ABI  } from "./providers";

export default async function getWebSocketsData({ webSocketData, setWebsocketData }){
    const blockNumber = await wsProvider.eth.getBlockNumber(); 

    const contract = new wsProvider.eth.
    Contract(ABI, '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc');

    return contract.events.Swap({
        fromBlock: blockNumber,
        toBlock: 'latest'
    })
    .on('data', (event) => {
        console.log(event);
        const value = {
            amount0In: 
            event.returnValues.amount0In,
            amount1In:
            event.returnValues.amount1In,
            amount0Out:
            event.returnValues.amount0Out,
            amount1Out:
            event.returnValues.amount1Out,
            to: event.returnValues.sender,
            address: event.address,
            blocknumber: event.blockNumber,
            data: event.raw.data,
            hash: event.transactionHash,
        }
        
        const time = httpProvider.eth.getBlock(value.blocknumber);
        value.time = getTime(time.timestamp);
        count++;
        console.log(value);
        setWebsocketData([...webSocketData, value]);
        return value;
    })
    .on('error', (e) => {
        console.log(e);
    })
}

