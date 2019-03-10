// vitocchi
// 2019-03-10
// BIP39のニーモニックコードと拡張公開鍵を新規作成するスクリプト

const bitcoin = require('bitcoinjs-lib')
const bip39 = require('bip39')

// ニーモニックコードを新規作成する
const mnemonic = bip39.generateMnemonic()
console.log('ニーモニックコードを保存してください')
console.log(mnemonic)

// ニーモニックコードからSeedを作成する
const seed = bip39.mnemonicToSeed(mnemonic);

// シードからRootの拡張秘密鍵を作成する
const xpriv = bitcoin.bip32.fromSeed(seed, bitcoin.networks.testnet)

// 拡張秘密鍵から拡張公開鍵を作成する
const xpub = xpriv.neutered();
console.log('------')
console.log('親の拡張公開鍵です')
console.log(xpub.toBase58())