const { network } = require("hardhat");
const {
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamesAccounts, deployments }) => {
    const { deploy, logs } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    if (developmentChains.includes(network.name)) {
        console.log("Local network detected! Deploying mocks...");
        console.log(deployer);
        await deploy("MockV3Aggregator", {
            from: deployer,
            logs: true,
            args: [DECIMALS, INITIAL_ANSWER],
        });
        console.log("Mock is deployed!");
        console.log("===============================");
    }
};

module.exports.tags = ["all", "mocks"];
