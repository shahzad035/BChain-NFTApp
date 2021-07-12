var NFTImage = artifacts.require("./NFTImage.sol");

module.exports = function(deployer) {
  deployer.deploy(NFTImage);
};
