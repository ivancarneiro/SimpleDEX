# SimpleDEX: A Basic Decentralized Token Exchange

## Overview

SimpleDEX is a straightforward decentralized exchange (DEX) smart contract implemented in Solidity, designed to enable token swapping between two ERC20 tokens using the constant product formula. This contract provides basic liquidity management and token exchange functionality.

## Features

- 🔄 Token Swap Mechanism
- 💧 Liquidity Management
- 🔒 Security Measures
  - Reentrancy Protection
  - Owner-only Liquidity Operations
- 💹 Price Discovery Functionality

## Prerequisites

- Solidity ^0.8.0
- OpenZeppelin Contracts Library
  - ERC20 Token Interface
  - Ownable Access Control
  - ReentrancyGuard

## Contract Functions

### Liquidity Management

#### `addLiquidity(uint256 amountA, uint256 amountB)`
- Allows the owner to add liquidity to the pool
- Requires both token amounts to be greater than 0
- Emits `LiquidityAdded` event

#### `removeLiquidity(uint256 amountA, uint256 amountB)`
- Allows the owner to remove liquidity from the pool
- Checks for sufficient liquidity before withdrawal
- Emits `LiquidityRemoved` event

### Token Swapping

#### `swapAforB(uint256 amountAIn)`
- Swaps TokenA for TokenB
- Uses constant product formula for price calculation
- Emits `TokenSwapped` event

#### `swapBforA(uint256 amountBIn)`
- Swaps TokenB for TokenA
- Uses constant product formula for price calculation
- Emits `TokenSwapped` event

### Utility Functions

#### `getReserves()`
- Returns current token reserves in the pool

#### `getPrice(address _token)`
- Retrieves the current price of a token relative to the other token
- Normalizes price to 18 decimal places

## Security Considerations

- Only the contract owner can add or remove liquidity
- Reentrancy guard prevents recursive call attacks
- Requires token approvals before transactions
- Validates input amounts and liquidity levels

## Events

- `LiquidityAdded`: Triggered when liquidity is added to the pool
- `LiquidityRemoved`: Triggered when liquidity is withdrawn
- `TokenSwapped`: Logged for every token exchange

## Limitations

- Single trading pair
- Owner-controlled liquidity
- No advanced AMM features
- Simplified constant product pricing

## Installation

1. Install [Hardhat](https://hardhat.org/) or [Truffle](https://www.trufflesuite.com/)
2. Install OpenZeppelin contracts:
   ```bash
   npm install @openzeppelin/contracts
   ```

## Deployment

Requires:
- Two ERC20 token contract addresses
- Sufficient token approvals
- Deployment by the intended owner

## Author

Ivan Carneiro

## License

MIT License

## Disclaimer

This is an educational/experimental DEX implementation. Use in production requires thorough auditing and additional features.
