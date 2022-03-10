import IUNISWAPV2_ABI from '../abi/IUniswapV2Pair.json';
const Web3 = require('web3');

export const ABI = IUNISWAPV2_ABI;
export const httpProvider = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/4b2f25cc7bde4d9180d1b626dbc72793"));
export const wsProvider = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/4b2f25cc7bde4d9180d1b626dbc72793"));
module.exports = { httpProvider, wsProvider, ABI };

export {}