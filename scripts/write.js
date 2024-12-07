async function main() {
    const greeterAddress = "0x0a0d32d096E3414B76AB1791ddEc1e24b1508a6f";
    const provider = ethers.provider;

    // Verificar si el contrato existe
    const bytecode = await provider.getCode(greeterAddress);
    // console.log("Bytecode del contrato:", bytecode);

    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = Greeter.attach(greeterAddress);

    try {
        const timestamp = Date.now();
        const fecha = new Date(timestamp);
        const tx = await greeter.setGreeting(`${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}`);
        await tx.wait();
    } catch (error) {
        console.error("Error al leer el contrato:", error.message);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});