import { WarpFactory } from "warp-contracts";
import * as fs from 'fs';

const environment = 'mainnet'
let warp 


// set environment
if (environment == 'testnet') {
    warp = WarpFactory.forTestnet()
} else if (environment == 'mainnet') {
    warp = WarpFactory.forMainnet()
} else {
    throw Error('Environment not set properly...')
}



async function configureWallet() {
    try {
        // spoof brand new wallet
        const { jwk } = await warp.generateWallet()
        // add it to local file system
        fs.writeFileSync('../testwallet.json', JSON.stringify(jwk))
        // return their newly generate wallet
        return jwk
    } catch (err) {
        console.log('Error configure\'ing Wallet')
    }
}



// now we can export warp as well as our configure wallet 
export {
    configureWallet, 
    warp
}