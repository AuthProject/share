import { WarpFactory } from 'warp-contracts'
import { transactionId } from './transactionid'
import wallet from './testwallet'



// declare enviroment, defaults to testnet
const environment = process.env.NEXT_PUBLIC_WARPENV || 'mainnet'
let warp
let contract

// getting contract
async function getContract() {
  if (environment == 'testnet') { // if testnet
    warp = WarpFactory.forTestnet()
    contract = warp.contract(transactionId).connect(wallet)
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