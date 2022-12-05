import { warp, configureWallet } from './configureWarpServer.js'
import { transactionId as transactionIdA } from '../contractA/transactionid.js'
import { transactionId as transactionIdB } from '../contractB/transactionid.js'


async function read() {
  let wallet = await configureWallet()

  const contractId = transactionIdA
  // const contractId = transactionIdB

  const contract = warp.contract(contractId).setEvaluationOptions({internalWrites: true}).connect(wallet);
  const { cachedValue } = await contract.readState();
  console.log('\n\n\n\n')
  console.log('State', JSON.stringify(cachedValue))
  console.log('State', cachedValue)
}

read()