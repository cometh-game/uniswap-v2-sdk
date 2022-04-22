import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MUMBAI = 80001,
  MATIC = 137
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.ROPSTEN]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.RINKEBY]: '0xA4268ac9cc583cbB01cf2125f4e4710f29F6e920',
  [ChainId.GÖRLI]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.KOVAN]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.MUMBAI]: '0x15E295218618D3C47A04927D036A57a1aEf44C3b',
  [ChainId.MATIC]: '0x800b052609c355cA8103E06F022aA30647eAd60a',
}

export const INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x499154cad90a3563f914a25c3710ed01b9a43b8471a35ba8a66a056f37638542',
  [ChainId.ROPSTEN]: '0x499154cad90a3563f914a25c3710ed01b9a43b8471a35ba8a66a056f37638542',
  [ChainId.RINKEBY]: '0x631843e3ecb3ddc2c6262cfe9cf3776eb58a0ccaf325b58738b8457da7ed8cea',
  [ChainId.GÖRLI]: '0x499154cad90a3563f914a25c3710ed01b9a43b8471a35ba8a66a056f37638542',
  [ChainId.KOVAN]: '0x499154cad90a3563f914a25c3710ed01b9a43b8471a35ba8a66a056f37638542',
  [ChainId.MUMBAI]: '0xe3b0ba5c263d8ac73c0c6f932b18b50eadc02beef7b26b13ac2cd5bb1f57c761',
  [ChainId.MATIC]: '0x499154cad90a3563f914a25c3710ed01b9a43b8471a35ba8a66a056f37638542',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const NINE = JSBI.BigInt(9)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _995 = JSBI.BigInt(995)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
