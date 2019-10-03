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
    const hash = "todo-hash";

    return new this(timestamp, prevHash, data, hash);
  }

  static mineBlock(prevBlock, data) {
    const timestamp = Date.now();
    const prevHash = prevBlock.hash;
    const hash = "todo-hash";

    return new this(timestamp, prevHash, data, hash);
  }
}

module.exports = Block;
