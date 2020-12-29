const MyToken = artifacts.require("MyToken");

module.exports = async function(callback) {
    const accounts = await new web3.eth.getAccounts();
    const myToken = await MyToken.deployed(); 

    // Transfer MyToken from account[0] to account[1]
    await myToken.transfer(accounts[1], '1000000');

    // Check balance for accounts[0] and accounts[1]
    balance0 = await myToken.balanceOf(accounts[0]);
    balance1 = await myToken.balanceOf(accounts[1]);
    console.log('Balance MyToken accounts[0] ' + web3.utils.fromWei(balance0.toString()))
    console.log('Balance MyToken accounts[1] ' + web3.utils.fromWei(balance1.toString()))

    callback();
}