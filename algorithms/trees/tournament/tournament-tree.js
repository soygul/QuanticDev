module.exports = class {
  constructor (dataArr) {
    this.leaves = dataArr

    // we need to have 2^n leaves
    let n = 1
    while (this.leaves.length % 2 !== 0) {
      n++
    }
  }
}
