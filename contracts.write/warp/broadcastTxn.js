import { warp, configureWallet } from './configureWarpServer.js'
import { transactionId } from '../transactionid.js'
import { testJWT } from '../testJWT.js'
import { v4 as uuid } from 'uuid'


async function broadcastTxn() {

    let wallet = await configureWallet()
    const contract = warp.contract(transactionId).connect(wallet)

    // send to the contract, demo make a post
    // we are the client here
    await contract.writeInteraction({
        // the send contract to contract function
        function: 'broadcastTxn', 
        // we are just passing in the JWT here for fun, demo contract entries will be in the JWT later on for us to decode
        jwt: testJWT,

        // demo contract entries
        toContractId: 'acatyaigERaHXCBzVdopQyorj1TVDm8KMjVxFOH-QHA',
        toContractFunction: 'createPost', 
        txnData: {title: 'Hello World!', content: 'Oh yeah blah blah blah', id: uuid()}
    })

}


broadcastTxn()