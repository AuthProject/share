import { warp, configureWallet } from '../warp-configs/configureWarpServer.js'
import { transactionId } from './transactionid.js'
import { testJWT } from '../warp-configs/testJWT.js'

// specific to this contract
import { transactionId as contractATransactionId } from '../contractB/transactionid.js'


async function broadcastTxn() {

    let wallet = await configureWallet()
    const contract = warp.contract(transactionId).setEvaluationOptions({
        internalWrites: true,
    }).connect(wallet)

    // send to the contract, demo make a post
    // we are the client here
    await contract.writeInteraction({
        // the send contract to contract function
        function: 'broadcastTxn', 
        // we are just passing in the JWT here for fun, demo contract entries will be in the JWT later on for us to decode
        jwt: testJWT,

        // demo contract entries
        toContractId: contractATransactionId,
        toContractFunction: 'createPost', 
        txnData: {title: 'Hello World!', content: 'Hello World!'}
    })


    console.log('contractTxId: ', 'https://sonar.warp.cc/#/app/contract/' + transactionId)

}


broadcastTxn()