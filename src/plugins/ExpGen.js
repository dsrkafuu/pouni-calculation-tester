const options = {};

class ExpGen {
  /**
   * @constructor
   * @param {string} mode easy or hard
   * @param {*} range number range
   */
  constructor(mode = 'easy', range = 10, count = 1) {
    this.exps = []; // expressions
    this.mode = mode; // mode
    this.range = range; // element range
    this.count = count; // generate how much
    this.output = [];
    if (mode === 'easy') {
      this._generateExpressionsEasy();
    }
  }

  /**
   * generate easy expressions
   */
  _generateExpressionsEasy() {
    const genExpression = () => {
      // gen element number
      const elementNumber = this._getRandomNumber(2, 3);
      // gen elements
      const elementArray = [];
      for (let i = 0; i < elementNumber; i++) {
        elementArray.push(this._getRandomNumber(0, this.range));
      }
      // gen cals
      const calsArray = [];
      for (let i = 0; i < elementNumber - 1; i++) {
        calsArray.push(['+', '-', '*', '/'][this._getRandomNumber(0, 3)]);
      }
      // gen expression
      const expression = [];
      for (let i = 0; i < 2 * elementNumber - 1; i++) {
        if (i % 2 === 0) {
          expression.push(elementArray.shift());
        } else {
          expression.push(calsArray.shift());
        }
      }
      // return
      const exp = expression.join('');
      const ans = eval(exp);
      return { exp, ans };
    };
    for (let i = 0; i < this.count; i++) {
      this.output.push(genExpression());
    }
  }

  /**
   * get expression element number
   * @param {number} min
   * @param {number} max
   */
  _getRandomNumber(min, max) {
    const range = max - min;
    const rand = Math.random(); // 0.0-1.0
    return min + Math.round(rand * range);
  }
}
