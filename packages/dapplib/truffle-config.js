require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift reward stereo proof install hero flock giant'; 
let testAccounts = [
"0x7b6c95dbaea7af9f739f7d09b16141f81931d12ff2e6d53a932d86016328d676",
"0x76032b4cc6363588d76ceb11994a92d914fa6e49fd14c265aedb9f734323e211",
"0x773f037d48a5679742ada6544d7decbbd073276ac57834ef8a278964136f9344",
"0x6374158a8281245c5a3777cc8e7a4c504d5766324cec9c9e4cd3480c83e881ad",
"0xba1e725733ee650ce18cb4f410319e4f2d0d022c85bf249bb6013512d1847859",
"0xc9b8b6bb141f5bf1ad3ea880eea3d9d120eaca286e28163b6a120dbe588c2ffb",
"0x227bcc68adb8180990a1c85ae3ad2580419d5cf6d476242ff058be1ead9f2e9d",
"0x5c619a10db706f611fedf4604df9bc050820a5164d102efc93c45c1f7a474178",
"0xab964ae747a04d8417aaf5c599a0dbfe20727ac9974a5eec8d266cf25a8ed9a5",
"0x6e010edfd9401dc98052a7495da49e15723b59b9edd25d40db48ebcf1acd382f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
