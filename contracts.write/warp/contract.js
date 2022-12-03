
export async function handle(state, action) {

    // INITALIZE CONTRACT
    if (action.input.function === 'initializeContract') { 
        state.jwt = action.input.jwt;
    }


    // DO A TXN TO MOCK CONTRACT
    if (action.input.function === 'broadcastTxn' && action.input.jwt === state.jwt) { // change later to JWT verify signiture below
        // interact with other contract

        
        const toContractId = action.input.toContractId;
        const toContractFunction = action.input.toContractFunction;
        const txnData = action.input.txnData;
        await interactWithOtherContract(toContractId, toContractFunction, txnData);

        
        // add to state is tempoary
        state.toContractId = toContractId;
        state.toContractFunction = toContractFunction;
        state.txnData = txnData;


    }

    
    return {
        state
    }
}



async function interactWithOtherContract(toContractId, toContractFunction, txnData) {

    const result = await SmartWeave.contracts.write(toContractId, { function: toContractFunction, txnData });

    console.log(result)

    if (result.type !== "ok") {
        throw new ContractError("Error calling internalWrite");
    }

}
