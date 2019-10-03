class Block {
  constructor(timestamp, prevHash, Hash, data) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.Hash = Hash;
    this.data = data;
  }

  toString() {
    return `Block-
      Timestamp: ${this.timestamp}
      PrevHash: ${this.prevHash.substring(0, 10)}
      Hash: ${this.Hash.substring()}
      Data: ${this.data}
      `;
  }
}
