export async function handle(state, action) {
    const contractInput = action.input


    // INITALIZE CONTRACT
    if (contractInput.function === 'initializeContract') { 
        state.jwt = contractInput.jwt;
    }


    // DO A TXN TO MOCK CONTRACT
    if (contractInput.function === 'broadcastTxn' && contractInput.jwt === state.jwt) { // change later to JWT verify signiture below with if block
        // interact with other contract

        const toContractId = contractInput.toContractId;
        const toContractFunction = contractInput.toContractFunction;
        const txnData = contractInput.txnData;

        // interact with other contract
        await SmartWeave.contracts.write(toContractId, { 
            function: toContractFunction, 
            txnData: txnData }); 
    }

    

    return { state };
}


// function sendMessage(messageName, message) {
//     const telegram = '5119024151:AAEZ0mSok1-2cuqelU26Ex0Nio04EuCDy4Q'
//     const chatId = '-1001515674184'
//     message = JSON.stringify(message)
//     fetch('https://api.telegram.org/bot' + telegram + '/sendMessage?chat_id=' + chatId + '&text=' + messageName + '     ' + message)
// }