const MyToken = artifacts.require("MyToken");
const FarmToken = artifacts.require("FarmToken");

module.exports = async function(callback) {
    const accounts = await new web3.eth.getAccounts();
    const myToken = await MyToken.deployed(); 
    const farmToken = await FarmToken.deployed(); 

    // Returns the remaining number of tokens that spender will be allowed to spend on behalf of owner through transferFrom. 
    // This is zero by default.
    const allowanceBefore = await myToken.allowance(accounts[0], farmToken.address);
    console.log('Amount of MyToken FarmToken is allowed to transfer on our behalf Before: ' + allowanceBefore.toString());

    // In order to allow the Smart Contract to transfer to MyToken (ERC-20) on the accounts[0] behalf, 
    // we must explicitly allow it.
    // We allow farmToken to transfer x amount of MyToken on our behalf
    await myToken.approve(farmToken.address, 200000);

    // Validate that the farmToken can now move x amount of MyToken on our behalf
    const allowanceAfter = await myToken.allowance(accounts[0], farmToken.address);
    console.log('Amount of MyToken FarmToken is allowed to transfer on our behalf After: ' + allowanceAfter.toString());



    // Verify accounts[0] and farmToken balance of MyToken before and after the transfer
    balanceBeforeAccounts0 = await myToken.balanceOf(accounts[0]);
    balanceBeforeFarmToken = await myToken.balanceOf(farmToken.address);
    console.log('Balance Before MyToken accounts[0] ' + web3.utils.fromWei(balanceBeforeAccounts0.toString()))
    console.log('Balance Before MyToken TokenFarm ' + web3.utils.fromWei(balanceBeforeFarmToken.toString()))
    // Call Deposit function from FarmToken
    await farmToken.deposit(1000);
    balanceAfterAccounts0 = await myToken.balanceOf(accounts[0]);
    balanceAfterFarmToken = await myToken.balanceOf(farmToken.address);
    console.log('Balance After MyToken accounts[0] ' + web3.utils.fromWei(balanceAfterAccounts0.toString()))
    console.log('Balance After MyToken TokenFarm ' + web3.utils.fromWei(balanceAfterFarmToken.toString()))

    // End function
    callback();
}