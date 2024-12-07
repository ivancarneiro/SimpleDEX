import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GreeterModule = buildModule("GreeterModule", (deployer) => {
    const greet = deployer.contract("Greeter", ["Hola ETH_Kipu!"]);
    
    return { greet };
});

export default GreeterModule;