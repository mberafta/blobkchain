let bitcoin = new Blockchain();
let lastBlock = bitcoin.getLastBlock();

bitcoin.getNewHash(lastBlock.previousBlockHash, lastBlock).done(
    function (data) {
        bitcoin.createNewBlock(data.nonce, lastBlock.previousBlockHash, data.hash);
        console.log(bitcoin);
    }
);