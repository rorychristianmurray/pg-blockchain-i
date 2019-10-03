const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(timestamp, prevHash, hash, data) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
  }

  toString() {
    return `Block-
      Timestamp: ${this.timestamp}
      PrevHash: ${this.prevHash}
      Hash: ${this.hash}
      Data: ${this.data}
      `;
  }

  static genesis() {
    const timestamp = "Genesis Time";
    const prevHash = "----------------";
    const data = [];
    const hash = Block.hash(timestamp, prevHash, data);

    return new this(timestamp, prevHash, data, hash);
  }

  static mineBlock(prevBlock, data) {
    const timestamp = Date.now();
    const prevHash = prevBlock.hash;
    const hash = Block.hash(timestamp, prevHash, data);

    return new this(timestamp, prevHash, data, hash);
  }

  static hash(timestamp, prevHash, data) {
    return SHA256(`${timestamp}${prevHash}${data}`.toString());
  }
}

module.exports = Block;
