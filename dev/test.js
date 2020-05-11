const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
let bc1 ={
    "chain": [
    {
    "index": 1,
    "timestamp": 1588917893674,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1588918003546,
    "transactions": [
    {
    "amount": 9950,
    "sender": "bella",
    "recipient": "jhon",
    "transactionId": "01c8be8090f211eaa7aa511085655b00"
    },
    {
    "amount": 550000,
    "sender": "bella",
    "recipient": "jhon",
    "transactionId": "06fc12d090f211eaa7aa511085655b00"
    },
    {
    "amount": 85500,
    "sender": "bella",
    "recipient": "jhon",
    "transactionId": "0cba902090f211eaa7aa511085655b00"
    }
    ],
    "nonce": 36876,
    "hash": "00005fd0360b4521bf338674c3266270d44fee8c2b8c494383ac9304d47619d5",
    "previousBlockHash": "0"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "d5cd48a090f111eaa7aa511085655b00",
    "transactionId": "1776abc090f211eaa7aa511085655b00"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    }
    console.log('VALID:',bitcoin.chainIsValid(bc1.chain));



// bitcoin.createNewBlock(356,'ujmdloir7','nhihai435vs');
// bitcoin.createNewTransaction(546726,'john64gd74j','alexfsygdj75');
// bitcoin.createNewBlock(981,'bd73kdjd','h73fsji0');
// const previousBlockHash = '64hsiejat5te';
// const currentBlockData = [
//     {
//         amount: 587,
//         sender: 'hfduime83v7fnj',
//         recipient: 'ge3naj7j',
//     },
//     {
//         amount: 725,
//         sender: 'hhrj73csgfnj',
//         recipient: 'grf74gjufikg',
//     },
    
// ];
// const nonce = 100;
//console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,226391));

//console.log(bitcoin);