/**
 * @private
 * get random number
 * @param {number} min
 * @param {number} max
 */
function _getRandomNumber(min, max) {
  const range = max - min;
  const rand = Math.random(); // 0.0-1.0
  return min + Math.round(rand * range);
}

/**
 * generate fill in blank questions
 * @param {array} rawExps
 */
function _genFillBlank(rawExps) {
  const questions = rawExps.map((val, index) => ({
    index,
    exp: val.exp,
    ans: val.ans,
    userAns: '',
    status: null,
  }));
  return questions;
}

/**
 * generate judge questions
 * @param {array} rawExps
 */
function _genJudge(rawExps) {
  const questions = rawExps.map((val, index) => {
    const newVal = { index, userAns: null, status: null };
    const rand = _getRandomNumber(0, 1);
    if (rand === 1) {
      newVal.exp = `${val.exp} = ${val.ans}`;
      newVal.ans = true;
    } else {
      newVal.exp = `${val.exp} = ${val.ans + _getRandomNumber(1, 50)}`;
      newVal.ans = false;
    }
    return newVal;
  });
  return questions;
}

/**
 * generate select questions
 * @param {array} rawExps
 */
function _genSelect(rawExps) {
  const questions = rawExps.map((val, index) => {
    const newVal = { index, exp: val.exp, userAns: null, status: null };
    const rand = _getRandomNumber(0, 2);
    const selections = [
      val.ans + _getRandomNumber(1, 50),
      val.ans + _getRandomNumber(1, 50),
      val.ans + _getRandomNumber(1, 50),
    ];
    selections[rand] = val.ans;
    newVal.selections = selections;
    newVal.ans = rand;
    return newVal;
  });
  return questions;
}

/**
 * generate questions
 */
function genQuestions(rawExps, fillBlank, judge, select) {
  let fillBlankExps = [];
  for (let i = 0; i < fillBlank; i++) {
    fillBlankExps.push(rawExps.shift());
  }
  fillBlankExps = _genFillBlank(fillBlankExps);
  let judgeExps = [];
  for (let i = fillBlank; i < fillBlank + judge; i++) {
    judgeExps.push(rawExps.shift());
  }
  judgeExps = _genJudge(judgeExps);
  let selectExps = [];
  for (let i = fillBlank + judge; i < fillBlank + judge + select; i++) {
    selectExps.push(rawExps.shift());
  }
  selectExps = _genSelect(selectExps);
  return {
    fillBlankQuestions: fillBlankExps,
    judgeQuestions: judgeExps,
    selectQuestions: selectExps,
  };
}

export default genQuestions;
