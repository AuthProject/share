import { warp, configureWallet } from '../warp-configs/configureWarpServer.js'
import { transactionId } from './transactionid.js'


async function createPost() {
  let wallet = await configureWallet()
  const contract = warp.contract(transactionId).setEvaluationOptions({internalWrites: true}).connect(wallet)
  await contract.writeInteraction({
    function: "createPost",
    txnData: {
      title: "IGNORE THIS POST",
      content: "IGNORE THIS POST",
    }
  })

  console.log('contractTxId: ', 'https://sonar.warp.cc/#/app/contract/' + transactionId)
}

createPost()