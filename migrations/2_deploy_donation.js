const JokeToken = artifacts.require("JokeToken");

module.exports = function(deployer) {
  deployer.deploy(JokeToken);
};
