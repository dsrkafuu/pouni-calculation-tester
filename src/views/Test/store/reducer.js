import { fromJS } from 'immutable';

import {
  UPDATE_ALL_QUESTIONS,
  UPDATE_FILL_BLANK_QUESTIONS,
  UPDATE_JUDGE_QUESTIONS,
  UPDATE_SELECT_QUESTIONS,
} from './actions';

const defaultState = fromJS({
  fillBlankQuestions: [],
  judgeQuestions: [],
  selectQuestions: [],
});

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    // update all questions
    case UPDATE_ALL_QUESTIONS:
      return defaultState.mergeDeep(fromJS(action.value));
    // update fill blank questions { index, answer }
    case UPDATE_FILL_BLANK_QUESTIONS: {
      const { index, answer } = action.value;
      const oldList = prevState.get('fillBlankQuestions');
      const newList = oldList.set(index, oldList.get(index).set('userAns', answer));
      return prevState.set('fillBlankQuestions', newList);
    }
    // update judge questions { index, answer }
    case UPDATE_JUDGE_QUESTIONS: {
      const { index, answer } = action.value;
      const oldList = prevState.get('judgeQuestions');
      const newList = oldList.set(index, oldList.get(index).set('userAns', answer));
      return prevState.set('judgeQuestions', newList);
    }
    // update select questions { index, answer }
    case UPDATE_SELECT_QUESTIONS: {
      const { index, answer } = action.value;
      const oldList = prevState.get('selectQuestions');
      const newList = oldList.set(index, oldList.get(index).set('userAns', answer));
      return prevState.set('selectQuestions', newList);
    }
    // init
    default:
      return prevState;
  }
};

export default reducer;
