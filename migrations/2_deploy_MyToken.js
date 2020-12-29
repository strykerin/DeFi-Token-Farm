const MyToken = artifacts.require('MyToken')

module.exports = async function(deployer, network, accounts) {
    // Deploy MyToken
    await deployer.deploy(MyToken)
    const myToken = await MyToken.deployed()
}