const AustinsToken = artifacts.require("AustinsToken");

module.exports = function(deployer) {
  deployer.deploy(AustinsToken);
};
