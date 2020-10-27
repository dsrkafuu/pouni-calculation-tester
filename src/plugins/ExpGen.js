import { evaluate } from 'mathjs';

const defaultSettings = {
  hhc: 'easy',
  range: 10,
  minus: false,
  bracket: false,
  dot: false,
  dotRange: 1,
};

class ExpGen {
  /**
   * @constructor
   */
  constructor() {
    // init settings
    this._updateSettings(defaultSettings);
  }

  /**
   * @private
   * update generator settings
   * @param {object} settings
   */
  _updateSettings(settings) {
    this.hhc = settings.hhc;
    this.range = settings.range;
    this.minus = settings.minus;
    this.bracket = settings.bracket;
    this.dot = settings.dot;
    this.dotRange = settings.dotRange;
  }

  /**
   * @private
   * get random number
   * @param {number} min
   * @param {number} max
   */
  _getRandomNumber(min, max) {
    const range = max - min;
    const rand = Math.random(); // 0.0-1.0
    return min + Math.round(rand * range);
  }

  /**
   * @private
   * gen a expression (un processed)
   */
  _genExpression() {
    // gen elements
    let elementArray = [];
    // el number
    const elementNumber = this._getRandomNumber(2, 5);
    for (let i = 0; i < elementNumber; i++) {
      elementArray.push(this._getRandomNumber(0, this.range));
    }
    // if dot
    if (this.dot) {
      elementArray = elementArray.map((val) => {
        // gen dot number
        let dotNum = '';
        for (let i = 0; i < this.dotRange; i++) {
          dotNum = dotNum.concat(this._getRandomNumber(0, 9));
        }
        return `${val}.${dotNum}`;
      });
    }
    // if minus
    if (this.minus) {
      elementArray = elementArray.map((val) => {
        // random minus
        const rand = Math.random();
        if (rand - 0.5 > 0) {
          return val;
        } else {
          return `(-${val})`;
        }
      });
    }
    // cals
    const calsArray = [];
    for (let i = 0; i < elementNumber - 1; i++) {
      calsArray.push([' + ', ' - ', ' * ', ' / '][this._getRandomNumber(0, 3)]);
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
    // return expressiong
    return expression.join('');
  }

  /**
   * insert brackets, element number need to > 3
   * @param {string} exp
   */
  _insertBracket(exp) {
    const startRand = Math.random() - 0.5;
    const endRand = Math.random() - 0.5;
    const elements = exp.split(' ');
    let startIndex, endIndex;
    // find first op
    for (let i = 0; i < elements.length; i++) {
      if (['+', '-', '*', '/'].includes(elements[i])) {
        startIndex = i;
        break;
      }
    }
    // find second op
    if (startRand > 0) {
      for (let i = startIndex; i < elements.length; i++) {
        if (['+', '-', '*', '/'].includes(elements[i])) {
          startIndex = i;
          break;
        }
      }
    }
    // find last first op
    for (let i = elements.length - 1; i >= 0; i--) {
      if (['+', '-', '*', '/'].includes(elements[i])) {
        endIndex = i;
        break;
      }
    }
    // find last second op
    if (endRand > 0) {
      for (let i = endIndex; i >= 0; i--) {
        if (['+', '-', '*', '/'].includes(elements[i])) {
          endIndex = i;
          break;
        }
      }
    }
    // insert bracket
    if (endIndex - startIndex !== 4 && endIndex - 1 > startIndex + 1) {
      elements.splice(startIndex + 1, 0, '(');
      elements.splice(endIndex - 1, 0, ')');
      return elements.join(' ');
    } else {
      return exp;
    }
  }

  /**
   * @public
   * generate expressions, returns a promise
   * @param {number} number
   * @param {objext} settings
   */
  getExpressions(number, settings) {
    return new Promise((resolve, reject) => {
      try {
        // if pssed in settings, update settings
        if (settings) {
          const s = { ...defaultSettings, ...settings };
          this._updateSettings(s);
        }
        // gen expressions
        const exps = [];
        for (let i = 0; i < number; i++) {
          let exp = this._genExpression();
          this.bracket && (exp = this._insertBracket(exp)); // insert bracket
          let ans = evaluate(exp);
          // prevent minus and dot
          let checker;
          switch (true) {
            case !this.minus && !this.dot:
              checker = (ans) =>
                Number.isFinite(ans) && !Number.isNaN(ans) && ans % 1 === 0 && ans >= 0;
              break;
            case !this.minus && this.dot:
              checker = (ans) => Number.isFinite(ans) && !Number.isNaN(ans) && ans >= 0;
              break;
            case this.minus && !this.dot:
              checker = (ans) => Number.isFinite(ans) && !Number.isNaN(ans) && ans % 1 === 0;
              break;
            default:
              checker = (ans) => Number.isFinite(ans) && !Number.isNaN(ans);
          }
          while (!checker(ans)) {
            exp = this._genExpression();
            this.bracket && (exp = this._insertBracket(exp)); // insert bracket
            ans = evaluate(exp);
          }
          // if dot, floor to same dot range
          this.dot && (ans = Number.parseFloat(ans.toFixed(this.dotRange)));
          // add exp
          exps.push({ exp, ans });
        }
        resolve(exps);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default ExpGen;
