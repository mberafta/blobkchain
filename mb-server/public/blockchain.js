function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];

    this.createNewBlock(100, '0', '0'); // Genesis block (premier bloc qui lance la suite)
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);
};

Blockchain.prototype.getLastBlock = function () {
    return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    this.pendingTransactions.push(newTransaction);
};

Blockchain.prototype.hashBlock = function (previousBlockHash, currentBlockData) {
    return $.ajax({
        url: API_URL + MINE_PATH,
        data: {
            constantPart: previousBlockHash + JSON.stringify(currentBlockData)
        }
    });
};

// Obtention d'un hash avec la preuve de travail
Blockchain.prototype.getNewHash = function (previousBlockHash, currentBlockData) {
    let nonce = 0;
    let hashPromise = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    return hashPromise;
};


