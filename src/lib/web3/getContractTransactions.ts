import getTime from "../functions/getTime";
//kept this module imported on pourpuse. The explanation is on the readme MD
import abiDecoder from "./abidecoder";
import { httpProvider, ABI }from './providers';


//module used for decode input data
export default async function getContractTransactions(){    
   const contract = new httpProvider.eth.
   Contract(ABI, '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc');

   const blockNumber = await httpProvider.eth.getBlockNumber(); 

   //100 is a totally arbitrary number.
   const events = await contract.getPastEvents
   ('Swap', {
      fromBlock: blockNumber - 100,
      toBlock: 'latest'
   },
   (err, events) => {
      return events;
   });
//create object from swap data
   const values = events.map((item, i) => {
      return {
         amount0In: 
         item.returnValues.amount0In,
         amount1In:
         item.returnValues.amount1In,
         amount0Out:
         item.returnValues.amount0Out,
         amount1Out:
         item.returnValues.amount1Out,
         to: item.returnValues.sender,
         address: item.address,
         blocknumber: item.blockNumber,
         data: item.raw.data,
         hash: item.transactionHash,
      };
   });

   //create a asynchronous function for retreiving time
   values.map(item => {
      const time = httpProvider.eth.getBlock(item.blocknumber);
      item.time = getTime(time.timestamp);
   })

   return values;
}