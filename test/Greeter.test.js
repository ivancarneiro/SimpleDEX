const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function() {
    let Greeter;
    let greeter;

    beforeEach(async () => {
        Greeter = await ethers.getContractFactory("Greeter");
        greeter = await Greeter.deploy("Greeting Test!");
    });

    it("Debería mostrar el greeting inicial", async () => {
        const initialGreeting = await greeter.greet();
        expect(initialGreeting).to.equal("Greeting Test!");
    });

    it("Debería actualizar el greeting", async () => {
        await greeter.setGreeting("Greeting update!");
        const updatedGreeting = await greeter.greet();
        expect(updatedGreeting).to.equal("Greeting update!");
    });
});