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
      Hash: ${this.Hash.substring(0m 10)}
      Data: ${this.data}
      `;
  }

  static genesis(){
      const timestamp = "Genesis Time";
      const prevHash = "----------------";
      const data = [];
      const hash = Block.hash(timestamp, prevHash, data);

      return new this(timestamp, prevHash, data, hash);
  }




}
