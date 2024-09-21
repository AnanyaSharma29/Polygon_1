const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/mamal.sol/mamal.json");

const tokenAddress = "0x16E20f04864DC4F69940EA6a1a42b781e22DB85D"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x707E65B25b52167b18E1959c578864680b840694"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
