module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
};

const HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
};