import * as fs from 'fs';
import { configureWallet, warp } from './configureWarpServer.js'
import { testJWT } from '../testJWT.js'


async function deploy() {

    const wallet = await configureWallet()
    const state = fs.readFileSync('state.json', 'utf-8')
    const contractsource = fs.readFileSync('contract.js', 'utf-8')


    // deploy new contract
    const { contractTxId } = await warp.createContract.deploy({
        wallet, 
        initState: state, 
        src: contractsource
    })


    fs.writeFileSync('../transactionid.js', `export const transactionId = "${contractTxId}"`)


    const contract = warp.contract(contractTxId).connect(wallet)
    // initialize contract
    await contract.writeInteraction({
        function: 'initializeContract', 
        jwt: testJWT
    })


    console.log('contractTxId: ', 'https://sonar.warp.cc/#/app/contract/' + contractTxId)

  

}

deploy()