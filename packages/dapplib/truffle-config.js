require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remain umbrella gloom nation flock struggle'; 
let testAccounts = [
"0xc25226be356938ef1b81f72d205eabbabc8937f428f5d8669427145767761f97",
"0x9dad18de9859c95c9f6f22f96f5b85ae45ee6d657ad118b37884689b0176e896",
"0xb78d0fcec90946d5bbde6fc8361092405023399e508cc076e4c43a816a1f1d61",
"0x921782a7bd8d48fdae3ebe8ab536b145351b96bb81165212836d33b0af8290b5",
"0x3628c93d84287f149de2185092148adf901c06537c7d345abb81ee162724acf0",
"0x83aa4fe04b5f4b6529dbaaecd80635476f3d764cfd56c80e927b8bd6e429029c",
"0xdf7d6dc666b3922fdad481ecf3de36842c7cafbbdd9fd06de64e6c9172f27574",
"0xf72702da0ef3ff2222be86b63dc16ccd43b62addb4ae223710d97cca614e8ef1",
"0x2e284287a56412dc436badc4265bcd641aebde03f4dc38b1217154072596e256",
"0x48fbcdbe27dfe875dc2449aa7e1e3ffdc4a76fad246a3b261998a48a5188cdd8"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
