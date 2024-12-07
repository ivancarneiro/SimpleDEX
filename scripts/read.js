const { ethers } = require("hardhat");

async function main() {
    const greeterAddress = "0xBCe24Bf9D36b54e2889A80B84ADeDcE719DF6125";
    const [deployer] = await ethers.getSigners();
    
    console.log("Conectando desde:", deployer.address);
    console.log("Dirección del contrato:", greeterAddress);

    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.attach(greeterAddress);

    try {
        const greeting = await greeter.greet();
        console.log("Greeting:", greeting);
    } catch (error) {
        console.error("Error al leer el contrato:", error);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});