const main = async () => {
  const ethers = hre.ethers;
  const dangerousGameContractFactory = await ethers.getContractFactory(
    "DangerousGame"
  );
  const dangerousGameContract = await dangerousGameContractFactory.deploy(
    ["Eren", "Mikasa", "Levi"],
    [
      "https://www.pngmart.com/files/13/Eren-Jaeger-PNG-Image.png",
      "https://www.pngmart.com/files/19/Anime-Mikasa-PNG-Transparent-Image.png",
      "https://www.pngmart.com/files/19/Captain-Levi-Ackerman-PNG-Transparent-Image.png",
    ],
    [1000, 1000, 1000],
    [1450, 1200, 1350],
    "Colossal Titan",
    "https://www.seekpng.com/png/detail/305-3054208_attack-on-titan-colossal-titan-png.png",
    5000000,
    50
  );
  await dangerousGameContract.deployed();
  console.log(`Contract deployed to: ${dangerousGameContract.address}`);

  let txn;
  txn = await dangerousGameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await dangerousGameContract.attackBoss();
  await txn.wait();

  txn = await dangerousGameContract.attackBoss();
  await txn.wait();

  let returnedTokenUri = await dangerousGameContract.tokenURI(1);
  console.log(`Token URI: ${returnedTokenUri}`);
};

const run = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

run();
