var Loyalty = artifacts.require("./loyalty.sol");
var Ads = artifacts.require("./ads.sol");

module.exports = function(deployer) {

  deployer.deploy(Loyalty);
  deployer.deploy(Ads);

};
