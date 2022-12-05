import fs from 'fs'
import { configureWallet, warp } from '../warp-configs/configureWarpServer.js'

async function deploy() {
  const wallet = await configureWallet()
  const state = fs.readFileSync('state.json', 'utf-8')
  const contractsource = fs.readFileSync('contract.js', 'utf-8')

  const { contractTxId } = await warp.createContract.deploy({
    wallet,
    initState: state,
    src: contractsource
  })
  fs.writeFileSync('./transactionid.js', `export const transactionId = "${contractTxId}"`)

  const contract = warp.contract(contractTxId).setEvaluationOptions({internalWrites: true}).connect(wallet)
  await contract.writeInteraction({
    function: 'initialize'
  })

  console.log('contractTxId: ', 'https://sonar.warp.cc/#/app/contract/' + contractTxId)
}
deploy()
