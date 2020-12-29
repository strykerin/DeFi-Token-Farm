const MyToken = artifacts.require('MyToken')

module.exports = async function(callback) {

    myToken = await MyToken.deployed()
    accounts = await web3.eth.getAccounts()
    balance = await myToken.balanceOf(accounts[0])
    console.log(web3.utils.fromWei(balance.toString()))
    callback();
}