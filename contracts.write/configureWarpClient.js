import { WarpFactory } from 'warp-contracts'
import { transactionId } from './transactionid'
import wallet from './testwallet'


const environment = 'mainnet'
let warp
let contract

// getting contract
async function getContract() {
  if (environment == 'testnet') { // if testnet
    warp = WarpFactory.forTestnet()
    contract = warp.contract(transactionId).setEvaluationOptions({internalWrites: true}).connect(wallet)
  } else if (environment === 'mainnet') { // if mainnet
    warp = WarpFactory.forMainnet()
    // can use something like ar connect if you dont at JWK in .connect()
    contract = warp.contract(transactionId).connect()
  } else { // error
    throw new Error('Environment configured improperly...')
  }
  return contract
}



export {
  getContract
}