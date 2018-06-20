const crypto = require('crypto');

module.exports = {
   getSHA256:function(entry){
       let hash = crypto.createHash('sha256');
       hash.update(entry);
       return hash.digest('hex');
   }
};