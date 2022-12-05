import { warp, configureWallet } from '../warp-configs/configureWarpServer.js'
import { transactionId } from './transactionid.js'


async function createPost() {
  let wallet = await configureWallet()
  const contract = warp.contract(transactionId).setEvaluationOptions({internalWrites: true}).connect(wallet)
  await contract.writeInteraction({
    function: "createPost",
    txnData: {
      title: "THIS IS THE GENERIC DEPLOY",
      content: "THIS IS THE GENERIC DEPLOY",
    }
  })

  console.log('contractTxId: ', 'https://sonar.warp.cc/#/app/contract/' + transactionId)
}

createPost()