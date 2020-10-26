import { UPDATE_QUESTION_TYPES } from './actypes';

const defaultState = {
  questionTypes: {
    fillBlank: 4,
    judge: 3,
    select: 3,
  },
};

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    // update question types
    case UPDATE_QUESTION_TYPES:
      return Object.assign({}, prevState, {
        // data from `action` only has one key, need to merge with `prevState`
        questionTypes: { ...prevState.questionTypes, ...action.value },
      });
    // init
    default:
      return prevState;
  }
};

export default reducer;
