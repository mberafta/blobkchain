const bitcoin = new Blockchain();

bitcoin.createNewBlock(1257, guid(), guid());
bitcoin.createNewTransaction(200, 'jack', 'nina');
bitcoin.createNewTransaction(200, 'jose', 'nina');
bitcoin.createNewBlock(1258, guid(), guid());
bitcoin.createNewTransaction(200, 'paul', 'linda');
bitcoin.createNewBlock(1259, guid(), guid());
bitcoin.createNewTransaction(200, 'mika', 'nina');

console.log(bitcoin);

$.ajax({
    url: "http://localhost:3000/api/sha256",
    data: { tohash: "hello" },
    success: function (data) {
        document.getElementById("blockchain").innerText += "\n\n" + JSON.stringify(data);
    }
});

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}